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
exports.RedisCache = void 0;
const client_1 = require("@redis/client");
const logger_config_1 = require("../config/logger.config");
const baileys_1 = require("@whiskeysockets/baileys");
class RedisCache {
    constructor() {
        this.statusConnection = false;
        this.logger = new logger_config_1.Logger(RedisCache.name);
        process.on('beforeExit', () => __awaiter(this, void 0, void 0, function* () {
            if (this.statusConnection) {
                yield this.client.disconnect();
            }
        }));
    }
    set reference(reference) {
        this.instanceName = reference;
    }
    connect(redisEnv) {
        return __awaiter(this, void 0, void 0, function* () {
            this.client = (0, client_1.createClient)({ url: redisEnv.URI });
            yield this.client.connect();
            this.statusConnection = true;
            this.redisEnv = redisEnv;
        });
    }
    instanceKeys() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.client.sendCommand(['keys', this.redisEnv.PREFIX_KEY + ':*']);
            }
            catch (error) {
                this.logger.error(error);
            }
        });
    }
    keyExists(key) {
        return __awaiter(this, void 0, void 0, function* () {
            if (key) {
                return !!(yield this.instanceKeys()).find((i) => i === key);
            }
            return !!(yield this.instanceKeys()).find((i) => i === this.instanceName);
        });
    }
    writeData(field, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const json = JSON.stringify(data, baileys_1.BufferJSON.replacer);
                return yield this.client.hSet(this.redisEnv.PREFIX_KEY + ':' + this.instanceName, field, json);
            }
            catch (error) {
                this.logger.error(error);
            }
        });
    }
    readData(field) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.client.hGet(this.redisEnv.PREFIX_KEY + ':' + this.instanceName, field);
                if (data) {
                    return JSON.parse(data, baileys_1.BufferJSON.reviver);
                }
            }
            catch (error) {
                this.logger.error(error);
            }
        });
    }
    removeData(field) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.client.hDel(this.redisEnv.PREFIX_KEY + ':' + this.instanceName, field);
            }
            catch (error) {
                this.logger.error(error);
            }
        });
    }
    delAll(hash) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.client.del(hash || this.redisEnv.PREFIX_KEY + ':' + this.instanceName);
            }
            catch (error) {
                this.logger.error(error);
            }
        });
    }
}
exports.RedisCache = RedisCache;
