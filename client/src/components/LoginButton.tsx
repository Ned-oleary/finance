'use client'
import React from 'react';
import Button from '@/components/Button'
import '../styles/globals.css' 
import { useRouter } from 'next/navigation';


const LoginButton: React.FC = () => {
    const router = useRouter();

    const handleLoginButtonPress = async () => {
        await router.push("/login");
        return new Response(null, { status: 200 });
      };

    return(
        <Button onClick = {handleLoginButtonPress}> Here is a button to press if you want to login </Button>
    );
};

export default LoginButton


