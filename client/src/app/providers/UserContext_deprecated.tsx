import { createContext, useState, ReactNode } from "react";
import { UserWithoutPasswordType, UserService } from '@/entities/user';

type UserContextType = {
    user: UserWithoutPasswordType | null;
    setUser: (user: UserWithoutPasswordType | null) => void;
    registration: (email: string, password: string) => Promise<void>;
    authorization: (email: string, password: string) => Promise<void>;
    refreshAccessToken: () => Promise<void>
    logout: () => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserWithoutPasswordType | null>(null);

    const authorization = async (email: string, password: string) => {
        const data = await UserService.authorization(email, password);

        if (data) {
            setUser(data.user);
        }
    }

    const registration = async (email: string, password: string) => {
        const data = await UserService.registration(email, password);

        if (data) {
            setUser(data.user);
        }
    }

    const logout = async () => {
        await UserService.logout();
        setUser(null);
    }

    const refreshAccessToken = async () => {
        const data = await UserService.refreshAccessToken();

        if (data) {
            setUser(data.user);
        }
    }

    return (
        <UserContext.Provider value={{ authorization, registration, logout, refreshAccessToken, user, setUser }}>
            {children}
        </UserContext.Provider>
    )
};