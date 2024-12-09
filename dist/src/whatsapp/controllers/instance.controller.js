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
exports.InstanceController = void 0;
const baileys_1 = require("@whiskeysockets/baileys");
const exceptions_1 = require("../../exceptions");
const whatsapp_service_1 = require("../services/whatsapp.service");
const logger_config_1 = require("../../config/logger.config");
class InstanceController {
    constructor(waMonitor, configService, repository, eventEmitter, authService, cache) {
        this.waMonitor = waMonitor;
        this.configService = configService;
        this.repository = repository;
        this.eventEmitter = eventEmitter;
        this.authService = authService;
        this.cache = cache;
        this.logger = new logger_config_1.Logger(InstanceController.name);
    }
    createInstance(_a, req_1) {
        return __awaiter(this, arguments, void 0, function* ({ instanceName }, req) {
            try {
                const instance = new whatsapp_service_1.WAStartupService(this.configService, this.eventEmitter, this.repository, this.cache);
                instance.instanceName = instanceName;
                this.waMonitor.waInstances[instance.instanceName] = instance;
                this.waMonitor.delInstanceTime(instance.instanceName);
                const hash = yield this.authService.generateHash({
                    instanceName: instance.instanceName,
                });
                req.session[instance.instanceName] = Buffer.from(JSON.stringify(hash)).toString('base64');
                return {
                    instance: {
                        instanceName: instance.instanceName,
                        status: 'created',
                    },
                    hash,
                };
            }
            catch (error) {
                this.logger.error(error);
            }
        });
    }
    reloadConnection(_a) {
        return __awaiter(this, arguments, void 0, function* ({ instanceName }) {
            var _b;
            try {
                const instance = this.waMonitor.waInstances[instanceName];
                const state = (_b = instance === null || instance === void 0 ? void 0 : instance.connectionStatus) === null || _b === void 0 ? void 0 : _b.state;
                switch (state) {
                    case 'open':
                        yield instance.reloadConnection();
                        yield (0, baileys_1.delay)(2000);
                        return yield this.connectionState({ instanceName });
                    default:
                        return yield this.connectionState({ instanceName });
                }
            }
            catch (error) {
                this.logger.error(error);
            }
        });
    }
    connectToWhatsapp(_a) {
        return __awaiter(this, arguments, void 0, function* ({ instanceName }) {
            var _b;
            try {
                const instance = this.waMonitor.waInstances[instanceName];
                const state = (_b = instance === null || instance === void 0 ? void 0 : instance.connectionStatus) === null || _b === void 0 ? void 0 : _b.state;
                switch (state) {
                    case 'close':
                        yield instance.connectToWhatsapp();
                        yield (0, baileys_1.delay)(2000);
                        return instance.qrCode;
                    case 'connecting':
                        return instance.qrCode;
                    default:
                        return yield this.connectionState({ instanceName });
                }
            }
            catch (error) {
                this.logger.error(error);
            }
        });
    }
    connectionState(_a) {
        return __awaiter(this, arguments, void 0, function* ({ instanceName }) {
            return this.waMonitor.waInstances[instanceName].connectionStatus;
        });
    }
    fetchInstances(_a) {
        return __awaiter(this, arguments, void 0, function* ({ instanceName }) {
            if (instanceName) {
                return this.waMonitor.instanceInfo(instanceName);
            }
            return this.waMonitor.instanceInfo();
        });
    }
    logout(_a) {
        return __awaiter(this, arguments, void 0, function* ({ instanceName }) {
            var _b, _c;
            try {
                yield ((_c = (_b = this.waMonitor.waInstances[instanceName]) === null || _b === void 0 ? void 0 : _b.client) === null || _c === void 0 ? void 0 : _c.logout('Log out instance: ' + instanceName));
                return { error: false, message: 'Instance logged out' };
            }
            catch (error) {
                throw new exceptions_1.InternalServerErrorException(error.toString());
            }
        });
    }
    deleteInstance(_a) {
        return __awaiter(this, arguments, void 0, function* ({ instanceName }) {
            const stateConn = yield this.connectionState({ instanceName });
            if (stateConn.state === 'open') {
                throw new exceptions_1.BadRequestException([
                    'Deletion failed',
                    'The instance needs to be disconnected',
                ]);
            }
            try {
                delete this.waMonitor.waInstances[instanceName];
                return { error: false, message: 'Instance deleted' };
            }
            catch (error) {
                throw new exceptions_1.BadRequestException(error.toString());
            }
        });
    }
    refreshToken(instance, oldToken, req) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = yield this.authService.refreshToken(oldToken);
            req.session[instance.instanceName] = Buffer.from(JSON.stringify(token)).toString('base64');
        });
    }
}
exports.InstanceController = InstanceController;
