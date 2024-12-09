import { proto, WAPresence } from '@whiskeysockets/baileys';
export declare class Options {
    delay?: number;
    presence?: WAPresence;
}
declare class OptionsMessage {
    options: Options;
}
export declare class Metadata extends OptionsMessage {
    number: string;
}
declare class TextMessage {
    text: string;
}
export declare class SendTextDto extends Metadata {
    textMessage: TextMessage;
}
export type MediaType = 'image' | 'document' | 'video' | 'audio';
export declare class MediaMessage {
    mediatype: MediaType;
    caption?: string;
    fileName?: string;
    media: string | Buffer;
}
export declare class SendMediaDto extends Metadata {
    mediaMessage: MediaMessage;
}
export declare class MediaFileDto extends Metadata {
    caption?: string;
    mediatype: MediaType;
    presence?: WAPresence;
    delay: number;
}
declare class Audio {
    audio: string;
}
export declare class SendAudioDto extends Metadata {
    audioMessage: Audio;
}
export declare class AudioMessageFileDto extends Metadata {
    delay: number;
    audio: Buffer;
}
declare class LocationMessage {
    latitude: number;
    longitude: number;
    name?: string;
    address?: string;
}
export declare class SendLocationDto extends Metadata {
    locationMessage: LocationMessage;
}
export declare class ContactMessage {
    fullName: string;
    wuid: string;
    phoneNumber: string;
}
export declare class SendContactDto extends Metadata {
    contactMessage: ContactMessage[];
}
declare class ReactionMessage {
    key: proto.IMessageKey;
    reaction: string;
}
export declare class SendReactionDto {
    reactionMessage: ReactionMessage;
}
export {};
