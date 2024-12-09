import { ArchiveChatDto, DeleteMessage, OnWhatsAppDto, ReadMessageDto, WhatsAppNumberDto } from '../dto/chat.dto';
import { AudioMessageFileDto, MediaFileDto, SendAudioDto, SendContactDto, SendLocationDto, SendMediaDto, SendReactionDto, SendTextDto } from '../dto/sendMessage.dto';
import { ConfigService } from '../../config/env.config';
import { CreateGroupDto, GroupJid, GroupPictureDto, GroupUpdateParticipantDto } from '../dto/group.dto';
import { wa } from '../types/wa.types';
import { MessageRaw, MessageUpdateRaw } from '../models/message.model';
import { GroupMetadata, WASocket, proto } from '@whiskeysockets/baileys';
import { ChatRaw } from '../models/chat.model';
import { ContactQuery } from '../repository/contact.repository';
import { ContactRaw } from '../models/contact.model';
import EventEmitter2 from 'eventemitter2';
import { MessageQuery } from '../repository/message.repository';
import { MessageUpQuery } from '../repository/messageUp.repository';
import { RedisCache } from '../../db/redis.client';
import { RepositoryBroker } from '../repository/repository.manager';
import { WebhookRaw } from '../models/webhook.model';
export declare class WAStartupService {
    private readonly configService;
    private readonly eventEmitter;
    private readonly repository;
    private readonly cache;
    constructor(configService: ConfigService, eventEmitter: EventEmitter2, repository: RepositoryBroker, cache: RedisCache);
    private readonly logger;
    private readonly instance;
    client: WASocket;
    private readonly localWebhook;
    private stateConnection;
    private readonly storePath;
    private readonly msgRetryCounterCache;
    private readonly userDevicesCache;
    private endSession;
    set instanceName(name: string);
    get instanceName(): string;
    get wuid(): string;
    getProfileName(): Promise<string>;
    get profilePictureUrl(): string;
    get qrCode(): wa.QrCode;
    private loadWebhook;
    setWebhook(data: WebhookRaw): Promise<void>;
    findWebhook(): Promise<WebhookRaw>;
    private sendDataWebhook;
    private connectionUpdate;
    private getMessage;
    private cleanStore;
    private defineAuthState;
    private setSocket;
    reloadConnection(): Promise<WASocket>;
    connectToWhatsapp(): Promise<WASocket>;
    private readonly chatHandle;
    private readonly contactHandle;
    private readonly messageHandle;
    private readonly groupHandler;
    private eventHandler;
    private formatMXOrARNumber;
    private formatBRNumber;
    private createJid;
    profilePicture(number: string): Promise<{
        wuid: string;
        profilePictureUrl: string;
    }>;
    private sendMessageWithTyping;
    get connectionStatus(): wa.StateConnection;
    textMessage(data: SendTextDto): Promise<proto.WebMessageInfo>;
    private prepareMediaMessage;
    mediaMessage(data: SendMediaDto): Promise<proto.WebMessageInfo>;
    mediaFileMessage(data: MediaFileDto, file: Express.Multer.File): Promise<proto.WebMessageInfo>;
    audioWhatsapp(data: SendAudioDto): Promise<proto.WebMessageInfo>;
    audioWhatsAppFile(data: AudioMessageFileDto, file: Express.Multer.File): Promise<proto.WebMessageInfo>;
    locationMessage(data: SendLocationDto): Promise<proto.WebMessageInfo>;
    contactMessage(data: SendContactDto): Promise<proto.WebMessageInfo>;
    reactionMessage(data: SendReactionDto): Promise<proto.WebMessageInfo>;
    whatsappNumber(data: WhatsAppNumberDto): Promise<OnWhatsAppDto[]>;
    markMessageAsRead(data: ReadMessageDto): Promise<{
        message: string;
        read: string;
    }>;
    archiveChat(data: ArchiveChatDto): Promise<{
        chatId: string;
        archived: boolean;
    }>;
    deleteMessage(del: DeleteMessage): Promise<proto.WebMessageInfo>;
    getMediaMessage(m: proto.IWebMessageInfo, base64?: boolean): Promise<{
        mediaType: string;
        fileName: any;
        caption: any;
        size: {
            fileLength: any;
            height: any;
            width: any;
        };
        mimetype: any;
        media: string | Buffer<ArrayBufferLike>;
    }>;
    fetchContacts(query: ContactQuery): Promise<ContactRaw[]>;
    fetchMessages(query: MessageQuery): Promise<MessageRaw[]>;
    fetchStatusMessage(query: MessageUpQuery): Promise<MessageUpdateRaw[]>;
    fetchChats(): Promise<ChatRaw[]>;
    createGroup(create: CreateGroupDto): Promise<{
        groupMetadata: GroupMetadata;
    }>;
    updateGroupPicture(picture: GroupPictureDto): Promise<{
        update: string;
    }>;
    findGroup(id: GroupJid, reply?: 'inner' | 'out'): Promise<GroupMetadata>;
    inviteCode(id: GroupJid): Promise<{
        inviteUrl: string;
        inviteCode: string;
    }>;
    revokeInviteCode(id: GroupJid): Promise<{
        revoked: boolean;
        inviteCode: string;
    }>;
    findParticipants(id: GroupJid): Promise<{
        participants: import("@whiskeysockets/baileys").GroupParticipant[];
    }>;
    updateGParticipant(update: GroupUpdateParticipantDto): Promise<{
        updateParticipants: {
            status: string;
            jid: string;
            content: import("@whiskeysockets/baileys").BinaryNode;
        }[];
    }>;
    leaveGroup(id: GroupJid): Promise<{
        groupJid: string;
        leave: boolean;
    }>;
}
