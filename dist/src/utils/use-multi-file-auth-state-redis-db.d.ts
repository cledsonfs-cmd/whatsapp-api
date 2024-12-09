type AuthState = {
    state: AuthenticationState;
    saveCreds: () => Promise<void>;
};
import { AuthenticationState } from '@whiskeysockets/baileys';
import { RedisCache } from '../db/redis.client';
export declare function useMultiFileAuthStateRedisDb(cache: RedisCache): Promise<AuthState>;
export {};
