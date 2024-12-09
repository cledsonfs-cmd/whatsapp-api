"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbserver = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const env_config_1 = require("../config/env.config");
const logger_config_1 = require("../config/logger.config");
const logger = new logger_config_1.Logger('Db Connection');
const db = env_config_1.configService.get('DATABASE');
exports.dbserver = (() => {
    if (db.ENABLED) {
        const dbs = mongoose_1.default.createConnection(db.CONNECTION.URI, {
            dbName: db.CONNECTION.DB_PREFIX_NAME + '-whatsapp-api',
        });
        logger.info('ON - dbName: ' + dbs['$dbName']);
        process.on('beforeExit', () => {
            exports.dbserver.destroy(true);
        });
        return dbs;
    }
})();
