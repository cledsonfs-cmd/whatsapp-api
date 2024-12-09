import { WAStartupService } from './whatsapp.service';
import EventEmitter2 from 'eventemitter2';
import { ConfigService } from '../../config/env.config';
import { RepositoryBroker } from '../repository/repository.manager';
import { RedisCache } from '../../db/redis.client';
export declare class WAMonitoringService {
    private readonly eventEmitter;
    private readonly configService;
    private readonly repository;
    private readonly cache;
    constructor(eventEmitter: EventEmitter2, configService: ConfigService, repository: RepositoryBroker, cache: RedisCache);
    private readonly db;
    private readonly redis;
    private dbInstance;
    private readonly logger;
    readonly waInstances: Record<string, WAStartupService>;
    delInstanceTime(instance: string): void;
    instanceInfo(instanceName?: string): Promise<any[]>;
    private delInstanceFiles;
    private cleaningUp;
    loadInstance(): Promise<void>;
    private removeInstance;
    private noConnection;
}
