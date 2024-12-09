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
exports.ViewsController = void 0;
const exceptions_1 = require("../../exceptions");
const index_router_1 = require("../routers/index.router");
class ViewsController {
    constructor(waMonit, repository) {
        this.waMonit = waMonit;
        this.repository = repository;
    }
    qrcode(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const param = request.params;
                const instance = this.waMonit.waInstances[param.instanceName];
                if (instance.connectionStatus.state === 'open') {
                    throw new exceptions_1.BadRequestException('The instance is already connected');
                }
                let auth;
                if (!((_a = request === null || request === void 0 ? void 0 : request.session) === null || _a === void 0 ? void 0 : _a[param.instanceName])) {
                    auth = yield this.repository.auth.find(param.instanceName);
                }
                else {
                    auth = JSON.parse(Buffer.from(request.session[param.instanceName], 'base64').toString('utf8'));
                }
                const type = (auth === null || auth === void 0 ? void 0 : auth.jwt) ? 'jwt' : 'apikey';
                return response.status(index_router_1.HttpStatus.OK).render('qrcode', Object.assign(Object.assign({}, param), { type,
                    auth, connectionState: instance.connectionStatus.state }));
            }
            catch (error) {
                console.log('ERROR: ', error);
            }
        });
    }
}
exports.ViewsController = ViewsController;
