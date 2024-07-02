'use client'
import React from 'react';
import { Button } from '@/components/ui/button'
import '../styles/globals.css' 

const LogoutButton: React.FC = () => {

    const handleLogout = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`, {method: "POST", credentials: "include"})
        return response
      }

    return(
        <Button className = "w-2/5" onClick = {handleLogout}> Logout </Button>
    );
};

export default LogoutButton


