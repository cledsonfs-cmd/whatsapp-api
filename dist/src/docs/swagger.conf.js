"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerRouter = void 0;
const express_1 = require("express");
const path_1 = require("path");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const yamljs_1 = __importDefault(require("yamljs"));
const document = yamljs_1.default.load((0, path_1.join)(process.cwd(), 'src', 'docs', 'swagger.yaml'));
const router = (0, express_1.Router)();
exports.swaggerRouter = router.use('/docs', swagger_ui_express_1.default.serve).get('/docs', swagger_ui_express_1.default.setup(document, {
    customCssUrl: '/css/dark-theme-swagger.css',
    customSiteTitle: 'CodeChat - WhatsApp API',
    customfavIcon: '/images/logo.svg',
}));
