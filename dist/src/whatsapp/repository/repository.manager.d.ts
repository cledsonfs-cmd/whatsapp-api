import { MessageRepository } from './message.repository';
import { ChatRepository } from './chat.repository';
import { ContactRepository } from './contact.repository';
import { MessageUpRepository } from './messageUp.repository';
import { MongoClient } from 'mongodb';
import { WebhookRepository } from './webhook.repository';
import { AuthRepository } from './auth.repository';
import { ConfigService } from '../../config/env.config';
export declare class RepositoryBroker {
    readonly message: MessageRepository;
    readonly chat: ChatRepository;
    readonly contact: ContactRepository;
    readonly messageUpdate: MessageUpRepository;
    readonly webhook: WebhookRepository;
    readonly auth: AuthRepository;
    private configService;
    constructor(message: MessageRepository, chat: ChatRepository, contact: ContactRepository, messageUpdate: MessageUpRepository, webhook: WebhookRepository, auth: AuthRepository, configService: ConfigService, dbServer?: MongoClient);
    private dbClient?;
    get dbServer(): MongoClient;
    private __init_repo_without_db__;
}
