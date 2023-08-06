'use client';

import { AuthContext } from "@/contexts/Auth/AuthContext";
import { RequireAuth } from "@/contexts/Auth/RequireAuth";
import { useContext } from "react";

export default function Private() {
    const auth = useContext(AuthContext);

    return (
        <RequireAuth>
            <>
                <div>Página privada</div>
                <p>{auth.user?.username}</p>
                <p>{auth.user?.email}</p>
            </>
        </RequireAuth>
    );
} 