'use client';

import { AuthContext } from "@/contexts/Auth/AuthContext";
import Link from "next/link";
import { useContext } from "react";

export default function Header() {
    const auth = useContext(AuthContext);

    return (
        <header> 
            <h1>Login</h1>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/private" >Página Privada</Link>
                {auth.isLogged() && <a onClick={() => auth.logout()}>Sair</a>}
            </nav>
        </header>
    );
}