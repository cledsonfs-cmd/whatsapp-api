import { Schema } from 'mongoose';
export declare class AuthRaw {
    _id?: string;
    jwt?: string;
    apikey?: string;
}
export declare const AuthModel: import("mongoose").Model<AuthRaw, {}, {}, {}, import("mongoose").Document<unknown, {}, AuthRaw> & AuthRaw & Required<{
    _id: string;
}> & {
    __v: number;
}, Schema<AuthRaw, import("mongoose").Model<AuthRaw, any, any, any, import("mongoose").Document<unknown, any, AuthRaw> & AuthRaw & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, AuthRaw, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<AuthRaw>> & import("mongoose").FlatRecord<AuthRaw> & Required<{
    _id: string;
}> & {
    __v: number;
}>>;
export type IAuthModel = typeof AuthModel;
