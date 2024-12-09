import { ConfigService } from '../../config/env.config';
import { IMessageUpModel, MessageUpdateRaw } from '../models';
import { IInsert, Repository } from '../abstract/abstract.repository';
export declare class MessageUpQuery {
    where: MessageUpdateRaw;
    limit?: number;
}
export declare class MessageUpRepository extends Repository {
    private readonly messageUpModel;
    private readonly configService;
    constructor(messageUpModel: IMessageUpModel, configService: ConfigService);
    insert(data: MessageUpdateRaw[], saveDb?: boolean): Promise<IInsert>;
    find(query: MessageUpQuery): Promise<MessageUpdateRaw[]>;
}
