'use client'
import React from 'react';
import { Button } from '@/components/ui/button'
import {useRouter} from 'next/navigation'
import '../styles/globals.css' 

/* deprecated -- to be deleted */
const LogoutButton: React.FC = () => {
    const router = useRouter();

    const handleLogout = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`, {method: "POST", credentials: "include"});
        await router.push("/login");
        return response
      }

    return(
        <Button className = "absolute mx-[100px] my-5 bottom-0 inset-x-0" onClick = {handleLogout}> Logout </Button>
    );
};

export default LogoutButton


