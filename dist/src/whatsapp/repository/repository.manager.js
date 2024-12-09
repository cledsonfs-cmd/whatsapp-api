"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryBroker = void 0;
const child_process_1 = require("child_process");
const path_1 = require("path");
const fs_1 = require("fs");
class RepositoryBroker {
    constructor(message, chat, contact, messageUpdate, webhook, auth, configService, dbServer) {
        this.message = message;
        this.chat = chat;
        this.contact = contact;
        this.messageUpdate = messageUpdate;
        this.webhook = webhook;
        this.auth = auth;
        this.configService = configService;
        this.dbClient = dbServer;
        this.__init_repo_without_db__();
    }
    get dbServer() {
        return this.dbClient;
    }
    __init_repo_without_db__() {
        if (!this.configService.get('DATABASE').ENABLED) {
            const storePath = (0, path_1.join)(process.cwd(), 'store');
            const paths = [
                (0, path_1.join)(storePath, 'auth', this.configService.get('AUTHENTICATION').TYPE),
                (0, path_1.join)(storePath, 'chats'),
                (0, path_1.join)(storePath, 'contacts'),
                (0, path_1.join)(storePath, 'messages'),
                (0, path_1.join)(storePath, 'message-up'),
                (0, path_1.join)(storePath, 'webhook'),
            ];
            for (const path of paths) {
                if ((0, fs_1.existsSync)(path)) {
                    continue;
                }
                (0, child_process_1.execSync)(`mkdir -p ${path}`);
            }
        }
    }
}
exports.RepositoryBroker = RepositoryBroker;
