import { Express } from 'express';
import * as https from 'https';
import * as http from 'http';
export declare class ServerUP {
    #private;
    static set app(e: Express);
    static get https(): https.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;
    static get http(): http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;
}
