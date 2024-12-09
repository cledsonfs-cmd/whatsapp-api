import { Schema } from 'mongoose';
import { wa } from '../types/wa.types';
declare class Key {
    id?: string;
    remoteJid?: string;
    fromMe?: boolean;
    participant?: string;
}
export declare class MessageRaw {
    constructor(props?: MessageRaw);
    _id?: string;
    key?: Key;
    pushName?: string;
    participant?: string;
    message?: object;
    messageTimestamp?: number | Long.Long;
    owner: string;
    source?: 'android' | 'web' | 'ios';
}
export declare const MessageModel: import("mongoose").Model<MessageRaw, {}, {}, {}, import("mongoose").Document<unknown, {}, MessageRaw> & MessageRaw & Required<{
    _id: string;
}> & {
    __v: number;
}, Schema<MessageRaw, import("mongoose").Model<MessageRaw, any, any, any, import("mongoose").Document<unknown, any, MessageRaw> & MessageRaw & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, MessageRaw, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<MessageRaw>> & import("mongoose").FlatRecord<MessageRaw> & Required<{
    _id: string;
}> & {
    __v: number;
}>>;
export type IMessageModel = typeof MessageModel;
export declare class MessageUpdateRaw {
    _id?: string;
    remoteJid?: string;
    id?: string;
    fromMe?: boolean;
    participant?: string;
    datetime?: number;
    status?: wa.StatusMessage;
    owner: string;
}
export declare const MessageUpModel: import("mongoose").Model<MessageUpdateRaw, {}, {}, {}, import("mongoose").Document<unknown, {}, MessageUpdateRaw> & MessageUpdateRaw & Required<{
    _id: string;
}> & {
    __v: number;
}, Schema<MessageUpdateRaw, import("mongoose").Model<MessageUpdateRaw, any, any, any, import("mongoose").Document<unknown, any, MessageUpdateRaw> & MessageUpdateRaw & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, MessageUpdateRaw, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<MessageUpdateRaw>> & import("mongoose").FlatRecord<MessageUpdateRaw> & Required<{
    _id: string;
}> & {
    __v: number;
}>>;
export type IMessageUpModel = typeof MessageUpModel;
export {};
