"use client";

import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { redirect } from "next/navigation";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useContext(AuthContext);

    if (!auth.user) {
        redirect('/login');
    }

    return children;
}