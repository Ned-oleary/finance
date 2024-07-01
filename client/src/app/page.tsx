'use client'

import LogoutButton from "@/components/LogoutButton";
import LoginButton from "@/components/LoginButton";
import getSession from "@/lib/getSession";
import { SessionData } from "@/lib/getSession"
import React, { useState, useEffect } from 'react';
import updateUser from "@/lib/updateUser";
import addUser from "@/lib/addUser";

export default function Home() {
  const [session, setSession] = useState<SessionData | null>(null);


  useEffect(() => {
    const handleSession = async () => {
      try {
        const response = await getSession();
        if (response.ok) { // Check if the HTTP response status is 200-299
          const data = await response.json(); // Adjust this line to match the data format, use response.text() if it's text
          setSession(data); // Make sure 'data' here is a string or something that can be rendered in JSX
        } else {
          throw new Error('Failed to fetch session data');
        }
      } catch (error) {
        console.log(error);
        //setSession('Failed to load session');
      }
    };

    handleSession();
  }, []);
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
      

      <p>Your session is: {session ? session.display_name : 'Loading...'}</p>
      <LogoutButton/>

      <LoginButton/>

      <button onClick = {updateUser}>the button to update the user</button>

      {/* <button onClick = {addUser}>the button to add a new user!</button>*/}

    </main>
  );
}
