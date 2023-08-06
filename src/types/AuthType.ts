import { User } from "./User"

export type AuthType = {
    user: User | null;
    isLogged: () => boolean;
    signIn: (eamil: string, password: string) =>  Promise<boolean>;
    logout: () => void;
};