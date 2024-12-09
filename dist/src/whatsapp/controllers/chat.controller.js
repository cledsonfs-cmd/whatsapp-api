"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatController = void 0;
class ChatController {
    constructor(waMonitor) {
        this.waMonitor = waMonitor;
    }
    whatsappNumber(_a, data_1) {
        return __awaiter(this, arguments, void 0, function* ({ instanceName }, data) {
            return yield this.waMonitor.waInstances[instanceName].whatsappNumber(data);
        });
    }
    readMessage(_a, data_1) {
        return __awaiter(this, arguments, void 0, function* ({ instanceName }, data) {
            return yield this.waMonitor.waInstances[instanceName].markMessageAsRead(data);
        });
    }
    archiveChat(_a, data_1) {
        return __awaiter(this, arguments, void 0, function* ({ instanceName }, data) {
            return yield this.waMonitor.waInstances[instanceName].archiveChat(data);
        });
    }
    deleteMessage(_a, data_1) {
        return __awaiter(this, arguments, void 0, function* ({ instanceName }, data) {
            return yield this.waMonitor.waInstances[instanceName].deleteMessage(data);
        });
    }
    fetchProfilePicture(_a, data_1) {
        return __awaiter(this, arguments, void 0, function* ({ instanceName }, data) {
            return yield this.waMonitor.waInstances[instanceName].profilePicture(data.number);
        });
    }
    fetchContacts(_a, query_1) {
        return __awaiter(this, arguments, void 0, function* ({ instanceName }, query) {
            return yield this.waMonitor.waInstances[instanceName].fetchContacts(query);
        });
    }
    getBase64FromMediaMessage(_a, message_1) {
        return __awaiter(this, arguments, void 0, function* ({ instanceName }, message) {
            return yield this.waMonitor.waInstances[instanceName].getMediaMessage(message, true);
        });
    }
    getBinaryMediaFromMessage(_a, message_1) {
        return __awaiter(this, arguments, void 0, function* ({ instanceName }, message) {
            return yield this.waMonitor.waInstances[instanceName].getMediaMessage(message);
        });
    }
    fetchMessages(_a, query_1) {
        return __awaiter(this, arguments, void 0, function* ({ instanceName }, query) {
            return yield this.waMonitor.waInstances[instanceName].fetchMessages(query);
        });
    }
    fetchStatusMessage(_a, query_1) {
        return __awaiter(this, arguments, void 0, function* ({ instanceName }, query) {
            return yield this.waMonitor.waInstances[instanceName].fetchStatusMessage(query);
        });
    }
    fetchChats(_a) {
        return __awaiter(this, arguments, void 0, function* ({ instanceName }) {
            return yield this.waMonitor.waInstances[instanceName].fetchChats();
        });
    }
}
exports.ChatController = ChatController;
