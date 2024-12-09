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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageRouter = void 0;
const express_1 = require("express");
const validate_schema_1 = require("../../validate/validate.schema");
const sendMessage_dto_1 = require("../dto/sendMessage.dto");
const whatsapp_module_1 = require("../whatsapp.module");
const abstract_router_1 = require("../abstract/abstract.router");
const index_router_1 = require("./index.router");
const multer_1 = __importDefault(require("multer"));
const exceptions_1 = require("../../exceptions");
const class_validator_1 = require("class-validator");
class MessageRouter extends abstract_router_1.RouterBroker {
    constructor(...guards) {
        super();
        this.router = (0, express_1.Router)();
        const uploadFile = (0, multer_1.default)({ preservePath: true });
        this.router
            .post(this.routerPath('sendText'), ...guards, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const response = yield this.dataValidate({
                request: req,
                schema: validate_schema_1.textMessageSchema,
                ClassRef: sendMessage_dto_1.SendTextDto,
                execute: (instance, data) => whatsapp_module_1.sendMessageController.sendText(instance, data),
            });
            return res.status(index_router_1.HttpStatus.CREATED).json(response);
        }))
            .post(this.routerPath('sendMedia'), ...guards, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const response = yield this.dataValidate({
                request: req,
                schema: validate_schema_1.mediaMessageSchema,
                ClassRef: sendMessage_dto_1.SendMediaDto,
                execute: (instance, data) => whatsapp_module_1.sendMessageController.sendMedia(instance, data),
            });
            return res.status(index_router_1.HttpStatus.CREATED).json(response);
        }))
            .post(this.routerPath('sendMediaFile'), ...guards, uploadFile.single('attachment'), this.validateMedia, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const response = yield this.dataValidate({
                request: req,
                schema: validate_schema_1.mediaFileMessageSchema,
                ClassRef: sendMessage_dto_1.MediaFileDto,
                execute: (instance, data, file) => whatsapp_module_1.sendMessageController.sendMediaFile(instance, data, file),
            });
            return res.status(index_router_1.HttpStatus.CREATED).json(response);
        }))
            .post(this.routerPath('sendWhatsAppAudio'), ...guards, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const response = yield this.dataValidate({
                request: req,
                schema: validate_schema_1.audioMessageSchema,
                ClassRef: sendMessage_dto_1.SendMediaDto,
                execute: (instance, data) => whatsapp_module_1.sendMessageController.sendWhatsAppAudio(instance, data),
            });
            return res.status(index_router_1.HttpStatus.CREATED).json(response);
        }))
            .post(this.routerPath('sendWhatsAppAudioFile'), ...guards, uploadFile.single('attachment'), this.validateMedia, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const response = yield this.dataValidate({
                request: req,
                schema: validate_schema_1.audioFileMessageSchema,
                ClassRef: sendMessage_dto_1.AudioMessageFileDto,
                execute: (instance, data, file) => whatsapp_module_1.sendMessageController.sendWhatsAppAudioFile(instance, data, file),
            });
            return res.status(index_router_1.HttpStatus.CREATED).json(response);
        }))
            .post(this.routerPath('sendLocation'), ...guards, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const response = yield this.dataValidate({
                request: req,
                schema: validate_schema_1.locationMessageSchema,
                ClassRef: sendMessage_dto_1.SendLocationDto,
                execute: (instance, data) => whatsapp_module_1.sendMessageController.sendLocation(instance, data),
            });
            return res.status(index_router_1.HttpStatus.CREATED).json(response);
        }))
            .post(this.routerPath('sendContact'), ...guards, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const response = yield this.dataValidate({
                request: req,
                schema: validate_schema_1.contactMessageSchema,
                ClassRef: sendMessage_dto_1.SendContactDto,
                execute: (instance, data) => whatsapp_module_1.sendMessageController.sendContact(instance, data),
            });
            return res.status(index_router_1.HttpStatus.CREATED).json(response);
        }))
            .post(this.routerPath('sendReaction'), ...guards, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const response = yield this.dataValidate({
                request: req,
                schema: validate_schema_1.reactionMessageSchema,
                ClassRef: sendMessage_dto_1.SendReactionDto,
                execute: (instance, data) => whatsapp_module_1.sendMessageController.sendReaction(instance, data),
            });
            return res.status(index_router_1.HttpStatus.CREATED).json(response);
        }));
    }
    validateMedia(req, _, next) {
        var _a;
        if (!(req === null || req === void 0 ? void 0 : req.file) || req.file.fieldname !== 'attachment') {
            throw new exceptions_1.BadRequestException('Invalid File');
        }
        if ((0, class_validator_1.isEmpty)((_a = req.body) === null || _a === void 0 ? void 0 : _a.presence)) {
            req.body.presence = undefined;
        }
        next();
    }
}
exports.MessageRouter = MessageRouter;
