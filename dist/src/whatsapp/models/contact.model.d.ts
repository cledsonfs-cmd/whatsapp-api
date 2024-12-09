import { Schema } from 'mongoose';
export declare class ContactRaw {
    _id?: string;
    pushName?: string;
    id?: string;
    profilePictureUrl?: string;
    owner: string;
}
export declare const ContactModel: import("mongoose").Model<ContactRaw, {}, {}, {}, import("mongoose").Document<unknown, {}, ContactRaw> & ContactRaw & Required<{
    _id: string;
}> & {
    __v: number;
}, Schema<ContactRaw, import("mongoose").Model<ContactRaw, any, any, any, import("mongoose").Document<unknown, any, ContactRaw> & ContactRaw & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ContactRaw, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ContactRaw>> & import("mongoose").FlatRecord<ContactRaw> & Required<{
    _id: string;
}> & {
    __v: number;
}>>;
export type IContactModel = typeof ContactModel;
