'use client';
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import axios from "axios";
import { API_URL } from "@/constants";


export default function LoginPage(){
    const handleSubmit = async (e : React.FormEvent) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        let authData: any = {}
        authData.userEmail = formData.get("userEmail");
        authData.userPassword = formData.get("userPassword");
        const {data } = await axios.post(`${API_URL}/auth/login`,  {
            ...authData
        })
        return;
    }
    return (
        <form className="bg-orange-500 px-10 py-2 rounded-md" onSubmit={handleSubmit}>
            <p className="text-2xl my-4 text-white">Iniciar sesión</p>
            <div className="flex flex-col gap-2 my-4 items-center">
                <Input label="Email" name="userEmail" type="email" isRequired={true} size="sm" />
                <Input label="Contraseña" name="UserPassword" type="password" isRequired={true} size="sm" />
                <Input label="Repetir contraseña" type="password" isRequired={true} size="sm" />
            </div> 
            <div className="flex flex-col items-center" gap-2>
                <Button color="primary" type="submit">Iniciar sesión</Button>
                <p className="text-white">¿No tienes cuenta? <Link href="/signup" className="text-red-600 underline">Registrarse</Link></p>
            </div>
        </form>
    );
}