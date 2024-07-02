'use client'


import getSession from "@/lib/getSession";
import { SessionData } from "@/lib/getSession"
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [session, setSession] = useState<SessionData | null>(null);
  const router = useRouter();


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

  const loginRedirect = () => {
    router.push("/login");
  };

  const handleLogout = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`, {method: "POST", credentials: "include"});
    router.push("/login");
    return response
  };
  

  return (
    <main className="flex h-screen flex-col items-center justify-center p-36 gap-4 bg-gray-100">
      <Card className = "w-[500px] min-h-[300px] p-6 border border-gray-300 rounded shadow-md bg-white relative flex flex-col gap-32">
      <CardHeader className = "">
        <CardTitle>Financial data application</CardTitle>
        <CardDescription>
          {session ? "Logged in as " + session.display_name : "You are not logged in"}
        </CardDescription>
      </CardHeader>
        <div className = "w-full relative justify-center items-center">
          {session ? <Button className = "w-full bg-black hover:bg-slate-800 active:translate-y-px text-white rounded" onClick = {handleLogout}>Logout</Button> : <Button className = "w-full bg-black hover:bg-slate-800 active:translate-y-px text-white rounded" onClick = {loginRedirect}>Login</Button>}
        </div>
      </Card>
    </main>
  );
}
