import { Schema } from 'mongoose';
export declare class WebhookRaw {
    _id?: string;
    url?: string;
    enabled?: boolean;
}
export declare const WebhookModel: import("mongoose").Model<WebhookRaw, {}, {}, {}, import("mongoose").Document<unknown, {}, WebhookRaw> & WebhookRaw & Required<{
    _id: string;
}> & {
    __v: number;
}, Schema<WebhookRaw, import("mongoose").Model<WebhookRaw, any, any, any, import("mongoose").Document<unknown, any, WebhookRaw> & WebhookRaw & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, WebhookRaw, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<WebhookRaw>> & import("mongoose").FlatRecord<WebhookRaw> & Required<{
    _id: string;
}> & {
    __v: number;
}>>;
export type IWebhookModel = typeof WebhookModel;
