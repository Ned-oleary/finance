'use client'
import React from 'react';
import { Button } from '@/components/ui/button'
import '../styles/globals.css' 
import { useRouter } from 'next/navigation';


const LoginButton: React.FC = () => {
    const router = useRouter();

    const handleLoginButtonPress = async () => {
        await router.push("/login");
        return new Response(null, { status: 200 });
      };

    return(
        <Button className = "w-full relative mx-2 my-5 bottom-0 inset-x-1" onClick = {handleLoginButtonPress}> Login </Button>
    );
};

export default LoginButton


