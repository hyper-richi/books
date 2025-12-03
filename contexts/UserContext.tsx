import { createContext, ReactNode, useState } from "react";
import { account } from "../lib/appwrite";
import { ID, Models } from "react-native-appwrite";

interface UserContextType {
    user: Models.User<Models.Preferences> | null;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

interface UserProviderProps {
    children: ReactNode;
}

export const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: UserProviderProps) {
    const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);

    async function login(email: string, password: string) {
        try {
            await account.createEmailPasswordSession(email, password);
            const response = await account.get();
            setUser(response);
        } catch (error: any) {
            throw Error(error.message);
        }
    }

    async function register(email: string, password: string) {
        try {
            await account.create(ID.unique(), email, password);
            await login(email, password);
        } catch (error: any) {
            throw Error(error.message);
        }
    }

    async function logout() {}
    return (
        <UserContext.Provider
            value={{
                user,
                login,
                logout,
                register,
            }}>
            {children}
        </UserContext.Provider>
    );
}
