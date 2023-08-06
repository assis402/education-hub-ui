"use client";

import { AuthContext } from "@/contexts/Auth/AuthContext";
import { redirect } from "next/navigation";
import { useState, useContext } from "react";

export default function Login() {
    const auth = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (email && password) {
            const isLogged = await auth.signIn(email, password);

            if (isLogged) {
                redirect('/')
            }
            else {
                alert("Não deu certo!");
            }
        }
    }

    return (
        <div>
            <h2>Página Fechada</h2>
            <input 
                type="text" 
                value={email} 
                placeholder="Digite seu e-mail" 
                onChange={e => setEmail(e.target.value)}>
            </input>
            <input 
                type="password" 
                value={password} 
                placeholder="Digite seu password" 
                onChange={e => setPassword(e.target.value)}>
            </input>
            <button onClick={handleLogin} >Logar</button>
        </div>
    )
}