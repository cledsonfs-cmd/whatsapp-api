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
exports.SendMessageController = void 0;
const class_validator_1 = require("class-validator");
const exceptions_1 = require("../../exceptions");
class SendMessageController {
    constructor(waMonitor) {
        this.waMonitor = waMonitor;
    }
    sendText(_a, data_1) {
        return __awaiter(this, arguments, void 0, function* ({ instanceName }, data) {
            return yield this.waMonitor.waInstances[instanceName].textMessage(data);
        });
    }
    sendMedia(_a, data_1) {
        return __awaiter(this, arguments, void 0, function* ({ instanceName }, data) {
            var _b, _c, _d;
            if ((0, class_validator_1.isBase64)((_b = data === null || data === void 0 ? void 0 : data.mediaMessage) === null || _b === void 0 ? void 0 : _b.media)) {
                throw new exceptions_1.BadRequestException('Owned media must be a url');
            }
            if ((data === null || data === void 0 ? void 0 : data.mediaMessage.mediatype) === 'document' && !((_c = data === null || data === void 0 ? void 0 : data.mediaMessage) === null || _c === void 0 ? void 0 : _c.fileName)) {
                throw new exceptions_1.BadRequestException('Enter the file name for the "document" type.');
            }
            if ((0, class_validator_1.isURL)((_d = data === null || data === void 0 ? void 0 : data.mediaMessage) === null || _d === void 0 ? void 0 : _d.media)) {
                return yield this.waMonitor.waInstances[instanceName].mediaMessage(data);
            }
        });
    }
    sendMediaFile(_a, data_1, file_1) {
        return __awaiter(this, arguments, void 0, function* ({ instanceName }, data, file) {
            if ((data === null || data === void 0 ? void 0 : data.delay) && !(0, class_validator_1.isNumberString)(data.delay)) {
                throw new exceptions_1.BadRequestException('The "delay" property must have an integer.');
            }
            else {
                data.delay = Number.parseInt(data === null || data === void 0 ? void 0 : data.delay);
            }
            return yield this.waMonitor.waInstances[instanceName].mediaFileMessage(data, file);
        });
    }
    sendWhatsAppAudio(_a, data_1) {
        return __awaiter(this, arguments, void 0, function* ({ instanceName }, data) {
            if ((0, class_validator_1.isBase64)(data === null || data === void 0 ? void 0 : data.audioMessage.audio)) {
                throw new exceptions_1.BadRequestException('Owned media must be a url');
            }
            if ((0, class_validator_1.isURL)(data.audioMessage.audio) || (0, class_validator_1.isBase64)(data.audioMessage.audio)) {
                return yield this.waMonitor.waInstances[instanceName].audioWhatsapp(data);
            }
        });
    }
    sendWhatsAppAudioFile(_a, data_1, file_1) {
        return __awaiter(this, arguments, void 0, function* ({ instanceName }, data, file) {
            if ((data === null || data === void 0 ? void 0 : data.delay) && !(0, class_validator_1.isNumberString)(data.delay)) {
                throw new exceptions_1.BadRequestException('The "delay" property must have an integer.');
            }
            else {
                data.delay = Number.parseInt(data === null || data === void 0 ? void 0 : data.delay);
            }
            return yield this.waMonitor.waInstances[instanceName].audioWhatsAppFile(data, file);
        });
    }
    sendLocation(_a, data_1) {
        return __awaiter(this, arguments, void 0, function* ({ instanceName }, data) {
            return yield this.waMonitor.waInstances[instanceName].locationMessage(data);
        });
    }
    sendContact(_a, data_1) {
        return __awaiter(this, arguments, void 0, function* ({ instanceName }, data) {
            return yield this.waMonitor.waInstances[instanceName].contactMessage(data);
        });
    }
    sendReaction(_a, data_1) {
        return __awaiter(this, arguments, void 0, function* ({ instanceName }, data) {
            if (!data.reactionMessage.reaction.match(/[^\(\)\w\sà-ú"-\+]+/)) {
                throw new exceptions_1.BadRequestException('"reaction" must be an emoji');
            }
            return yield this.waMonitor.waInstances[instanceName].reactionMessage(data);
        });
    }
}
exports.SendMessageController = SendMessageController;
