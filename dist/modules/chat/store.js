"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NineStore = void 0;
const uuid_1 = require("uuid");
const tiktoken_1 = require("@dqbd/tiktoken");
const tokenizer = (0, tiktoken_1.get_encoding)('cl100k_base');
class NineStore {
    constructor(options) {
        const { store, namespace, expires } = this.formatOptions(options);
        this.store = store;
        this.namespace = namespace;
        this.expires = expires;
    }
    formatOptions(options) {
        const { store, expires = 1000 * 60 * 60 * 24 * 3, namespace = 'chat' } = options;
        return { store, namespace, expires };
    }
    generateKey(key) {
        return this.namespace ? `${this.namespace}-${key}` : key;
    }
    async getData(id) {
        const res = await this.store.get(id);
        return res;
    }
    async setData(message, expires = this.expires) {
        await this.store.set(message.id, message, expires);
    }
    async buildMessageFromParentMessageId(text, options, chatLogService) {
        let { systemMessage = '', fileInfo, model, groupId, maxRounds = 5, maxModelTokens = 4000, isFileUpload = 0 } = options;
        let messages = [];
        if (systemMessage) {
            messages.push({ role: 'system', content: systemMessage });
        }
        if (groupId) {
            const history = await chatLogService.chatHistory(groupId, maxRounds);
            history.forEach((record) => {
                let content;
                if (isFileUpload === 2 && record.fileInfo) {
                    content = [
                        { type: "text", text: record.text },
                        { type: "image_url", image_url: { url: record.fileInfo } }
                    ];
                }
                else if (isFileUpload === 1 && record.fileInfo) {
                    content = record.fileInfo + "\n" + record.text;
                }
                else {
                    content = record.text;
                }
                messages.push({ role: record.role, content });
            });
        }
        let currentMessageContent;
        if (isFileUpload === 2 && fileInfo) {
            currentMessageContent = [
                { type: "text", text },
                { type: "image_url", image_url: { url: fileInfo } }
            ];
        }
        else if (isFileUpload === 1 && fileInfo) {
            currentMessageContent = fileInfo + "\n" + text;
        }
        else {
            currentMessageContent = text;
        }
        messages.push({ role: 'user', content: currentMessageContent });
        let totalTokens = await this._getTokenCount(messages);
        while (totalTokens > maxModelTokens / 2) {
            let foundNonSystemMessage = false;
            for (let i = 0; i < messages.length; i++) {
                if (messages[i].role !== 'system') {
                    messages.splice(i, 2);
                    foundNonSystemMessage = true;
                    break;
                }
            }
            if (!foundNonSystemMessage) {
                break;
            }
            totalTokens = await this._getTokenCount(messages);
        }
        return {
            messagesHistory: messages,
            round: messages.length
        };
    }
    _getTokenCount(messages) {
        let text = messages.reduce((pre, cur) => {
            if (Array.isArray(cur.content)) {
                const contentText = cur.content
                    .filter((item) => item.type === 'text')
                    .map((item) => item.text)
                    .join(' ');
                return pre + contentText;
            }
            else {
                return pre + (cur.content || '');
            }
        }, '');
        text = text.replace(/<\|endoftext\|>/g, '');
        return tokenizer.encode(text).length;
    }
    _recursivePruning(messages, maxNumTokens, systemMessage) {
        const currentTokens = this._getTokenCount(messages);
        if (currentTokens <= maxNumTokens) {
            return messages;
        }
        messages.splice(systemMessage ? 1 : 0, 1);
        return this._recursivePruning(messages, maxNumTokens, systemMessage);
    }
    getUuid() {
        return (0, uuid_1.v4)();
    }
}
exports.NineStore = NineStore;
