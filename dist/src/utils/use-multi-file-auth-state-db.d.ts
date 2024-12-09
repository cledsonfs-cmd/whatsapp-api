type AuthState = {
    state: AuthenticationState;
    saveCreds: () => Promise<void>;
};
import { AuthenticationState } from '@whiskeysockets/baileys';
export declare function useMultiFileAuthStateDb(coll: string): Promise<AuthState>;
export {};
