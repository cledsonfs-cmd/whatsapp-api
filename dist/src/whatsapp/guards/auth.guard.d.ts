import { NextFunction, Request, Response } from 'express';
declare function jwtGuard(req: Request, _: Response, next: NextFunction): Promise<void>;
declare function apikey(req: Request, _: Response, next: NextFunction): Promise<void>;
export declare const authGuard: {
    jwt: typeof jwtGuard;
    apikey: typeof apikey;
};
export {};
