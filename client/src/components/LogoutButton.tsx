'use client'
import React from 'react';
import Button from '@/components/Button'
import '../styles/globals.css' 

const LogoutButton: React.FC = () => {

    const handleLogout = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`, {method: "POST", credentials: "include"})
        return response
      }

    return(
        <Button onClick = {handleLogout}> Here is a button to press if you want to logout </Button>
    );
};

export default LogoutButton


