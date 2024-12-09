import { InstanceDto } from '../dto/instance.dto';
import { AudioMessageFileDto, MediaFileDto, SendAudioDto, SendContactDto, SendLocationDto, SendMediaDto, SendReactionDto, SendTextDto } from '../dto/sendMessage.dto';
import { WAMonitoringService } from '../services/monitor.service';
export declare class SendMessageController {
    private readonly waMonitor;
    constructor(waMonitor: WAMonitoringService);
    sendText({ instanceName }: InstanceDto, data: SendTextDto): Promise<import("@whiskeysockets/baileys").proto.WebMessageInfo>;
    sendMedia({ instanceName }: InstanceDto, data: SendMediaDto): Promise<import("@whiskeysockets/baileys").proto.WebMessageInfo>;
    sendMediaFile({ instanceName }: InstanceDto, data: MediaFileDto, file: Express.Multer.File): Promise<import("@whiskeysockets/baileys").proto.WebMessageInfo>;
    sendWhatsAppAudio({ instanceName }: InstanceDto, data: SendAudioDto): Promise<import("@whiskeysockets/baileys").proto.WebMessageInfo>;
    sendWhatsAppAudioFile({ instanceName }: InstanceDto, data: AudioMessageFileDto, file: Express.Multer.File): Promise<import("@whiskeysockets/baileys").proto.WebMessageInfo>;
    sendLocation({ instanceName }: InstanceDto, data: SendLocationDto): Promise<import("@whiskeysockets/baileys").proto.WebMessageInfo>;
    sendContact({ instanceName }: InstanceDto, data: SendContactDto): Promise<import("@whiskeysockets/baileys").proto.WebMessageInfo>;
    sendReaction({ instanceName }: InstanceDto, data: SendReactionDto): Promise<import("@whiskeysockets/baileys").proto.WebMessageInfo>;
}
