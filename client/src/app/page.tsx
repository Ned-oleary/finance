'use client'

import LogoutButton from "@/components/LogoutButton";
import LoginButton from "@/components/LoginButton";
import getSession from "@/lib/getSession";
import { SessionData } from "@/lib/getSession"
import React, { useState, useEffect } from 'react';
import updateUser from "@/lib/updateUser";
import addUser from "@/lib/addUser";
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function Home() {
  const [session, setSession] = useState<SessionData | null>(null);


  useEffect(() => {
    const handleSession = async () => {
      try {
        const response = await getSession();
        if (response.ok) { 
          const data = await response.json(); 
          setSession(data); 
        } else {
          throw new Error('Failed to fetch session data');
        }
      } catch (error) {
        console.log(error);
      }
    };

    handleSession();
  }, []);
  

  return (
    <main className="flex h-screen flex-col items-center justify-center p-24 gap-4 bg-gray-100">
      {/* <p>Your session is: {session ? session.display_name : 'Loading...'}</p>*/}
      <Card className = "w-2/3 min-w-[400px] h-1/3 min-h-[200px] items-center justify-center relative">

      
      <CardHeader className = "text-center">
        <CardTitle>AlphaVantage API wrapper</CardTitle>
        <CardDescription>
          {session ? "Logged in as " + session.display_name : "You are not logged in"}
        </CardDescription>
      </CardHeader>

      

      {session ? <LogoutButton/> : <LoginButton />}
      

      </Card>
    </main>
  );
}
