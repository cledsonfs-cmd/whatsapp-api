import { Schema } from 'mongoose';
export declare class ChatRaw {
    _id?: string;
    id?: string;
    owner: string;
}
export declare const ChatModel: import("mongoose").Model<ChatRaw, {}, {}, {}, import("mongoose").Document<unknown, {}, ChatRaw> & ChatRaw & Required<{
    _id: string;
}> & {
    __v: number;
}, Schema<ChatRaw, import("mongoose").Model<ChatRaw, any, any, any, import("mongoose").Document<unknown, any, ChatRaw> & ChatRaw & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ChatRaw, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ChatRaw>> & import("mongoose").FlatRecord<ChatRaw> & Required<{
    _id: string;
}> & {
    __v: number;
}>>;
export type IChatModel = typeof ChatModel;
