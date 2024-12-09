import EventEmitter2 from 'eventemitter2';
import { ConfigService } from '../../config/env.config';
import { InstanceDto } from '../dto/instance.dto';
import { RepositoryBroker } from '../repository/repository.manager';
import { AuthService, OldToken } from '../services/auth.service';
import { WAMonitoringService } from '../services/monitor.service';
import { RedisCache } from '../../db/redis.client';
import { Request } from 'express';
export declare class InstanceController {
    private readonly waMonitor;
    private readonly configService;
    private readonly repository;
    private readonly eventEmitter;
    private readonly authService;
    private readonly cache;
    constructor(waMonitor: WAMonitoringService, configService: ConfigService, repository: RepositoryBroker, eventEmitter: EventEmitter2, authService: AuthService, cache: RedisCache);
    private readonly logger;
    createInstance({ instanceName }: InstanceDto, req: Request): Promise<{
        instance: {
            instanceName: string;
            status: string;
        };
        hash: {
            jwt: string;
        } | {
            apikey: string;
        };
    }>;
    reloadConnection({ instanceName }: InstanceDto): Promise<import("../types/wa.types").wa.StateConnection>;
    connectToWhatsapp({ instanceName }: InstanceDto): Promise<import("../types/wa.types").wa.QrCode | import("../types/wa.types").wa.StateConnection>;
    connectionState({ instanceName }: InstanceDto): Promise<import("../types/wa.types").wa.StateConnection>;
    fetchInstances({ instanceName }: InstanceDto): Promise<any[]>;
    logout({ instanceName }: InstanceDto): Promise<{
        error: boolean;
        message: string;
    }>;
    deleteInstance({ instanceName }: InstanceDto): Promise<{
        error: boolean;
        message: string;
    }>;
    refreshToken(instance: InstanceDto, oldToken: OldToken, req: Request): Promise<void>;
}
