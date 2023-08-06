"use client";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "@/types/User";
import { useApi } from "@/hooks/useApi";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    const isLogged = () => {
        return user != null;
    } 

    const signIn = async (email: string, password: string) => {
        const data = await api.login(email, password);

        if (data.user && data.token) {
            setUser(data.user);
            return true;
        }

        return false;
    }

    const logout = async () => {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, isLogged, signIn, logout }}>
            {children}
        </AuthContext.Provider>
    )
};