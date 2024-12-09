import { proto } from '@whiskeysockets/baileys';
import { ArchiveChatDto, DeleteMessage, NumberDto, ReadMessageDto, WhatsAppNumberDto } from '../dto/chat.dto';
import { InstanceDto } from '../dto/instance.dto';
import { ContactQuery } from '../repository/contact.repository';
import { MessageQuery } from '../repository/message.repository';
import { MessageUpQuery } from '../repository/messageUp.repository';
import { WAMonitoringService } from '../services/monitor.service';
export declare class ChatController {
    private readonly waMonitor;
    constructor(waMonitor: WAMonitoringService);
    whatsappNumber({ instanceName }: InstanceDto, data: WhatsAppNumberDto): Promise<import("../dto/chat.dto").OnWhatsAppDto[]>;
    readMessage({ instanceName }: InstanceDto, data: ReadMessageDto): Promise<{
        message: string;
        read: string;
    }>;
    archiveChat({ instanceName }: InstanceDto, data: ArchiveChatDto): Promise<{
        chatId: string;
        archived: boolean;
    }>;
    deleteMessage({ instanceName }: InstanceDto, data: DeleteMessage): Promise<proto.WebMessageInfo>;
    fetchProfilePicture({ instanceName }: InstanceDto, data: NumberDto): Promise<{
        wuid: string;
        profilePictureUrl: string;
    }>;
    fetchContacts({ instanceName }: InstanceDto, query: ContactQuery): Promise<import("../models").ContactRaw[]>;
    getBase64FromMediaMessage({ instanceName }: InstanceDto, message: proto.IWebMessageInfo): Promise<{
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
    getBinaryMediaFromMessage({ instanceName }: InstanceDto, message: proto.IWebMessageInfo): Promise<{
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
    fetchMessages({ instanceName }: InstanceDto, query: MessageQuery): Promise<import("../models").MessageRaw[]>;
    fetchStatusMessage({ instanceName }: InstanceDto, query: MessageUpQuery): Promise<import("../models").MessageUpdateRaw[]>;
    fetchChats({ instanceName }: InstanceDto): Promise<import("../models").ChatRaw[]>;
}
