import { CreateGroupDto, GroupJid, GroupPictureDto, GroupUpdateParticipantDto } from '../dto/group.dto';
import { InstanceDto } from '../dto/instance.dto';
import { WAMonitoringService } from '../services/monitor.service';
export declare class GroupController {
    private readonly waMonitor;
    constructor(waMonitor: WAMonitoringService);
    createGroup(instance: InstanceDto, create: CreateGroupDto): Promise<{
        groupMetadata: import("@whiskeysockets/baileys").GroupMetadata;
    }>;
    updateGroupPicture(instance: InstanceDto, update: GroupPictureDto): Promise<{
        update: string;
    }>;
    findGroupInfo(instance: InstanceDto, groupJid: GroupJid): Promise<import("@whiskeysockets/baileys").GroupMetadata>;
    inviteCode(instance: InstanceDto, groupJid: GroupJid): Promise<{
        inviteUrl: string;
        inviteCode: string;
    }>;
    revokeInviteCode(instance: InstanceDto, groupJid: GroupJid): Promise<{
        revoked: boolean;
        inviteCode: string;
    }>;
    findParticipants(instance: InstanceDto, groupJid: GroupJid): Promise<{
        participants: import("@whiskeysockets/baileys").GroupParticipant[];
    }>;
    updateGParticipate(instance: InstanceDto, update: GroupUpdateParticipantDto): Promise<{
        updateParticipants: {
            status: string;
            jid: string;
            content: import("@whiskeysockets/baileys").BinaryNode;
        }[];
    }>;
    leaveGroup(instance: InstanceDto, groupJid: GroupJid): Promise<{
        groupJid: string;
        leave: boolean;
    }>;
}
