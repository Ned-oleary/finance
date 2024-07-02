'use client'
import React from 'react';
import { Button } from '@/components/ui/button'
import '../styles/globals.css' 
import { useRouter } from 'next/navigation';

/* deprecated -- to be deleted */
const LoginButton: React.FC = () => {
    const router = useRouter();

    const handleLoginButtonPress = async () => {
        await router.push("/login");
        return new Response(null, { status: 200 });
      };

    return(
        <Button className = "absolute mx-[100px] my-5 bottom-0 inset-x-0" onClick = {handleLoginButtonPress}> Login </Button>
    );
};

export default LoginButton


