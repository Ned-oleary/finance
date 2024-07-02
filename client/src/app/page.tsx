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
    <main className="flex h-screen flex-col items-center justify-center p-36 gap-4 bg-gray-100">
      {/* <p>Your session is: {session ? session.display_name : 'Loading...'}</p>*/}
      <Card className = "w-[500px] min-h-[300px] p-6 border border-gray-300 rounded shadow-md bg-white relative">
      <CardHeader className = "border">
        <CardTitle>AlphaVantage API wrapper</CardTitle>
        <CardDescription>
          {session ? "Logged in as " + session.display_name : "You are not logged in"}
        </CardDescription>
      </CardHeader>
        <div className = "w-full relative border">
          {session ? <LogoutButton/> : <LoginButton/>}
        </div>
      </Card>
    </main>
  );
}
