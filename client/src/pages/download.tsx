import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { SessionData } from "@/lib/getSession"
import getSession from "@/lib/getSession"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import LogoutButton from '@/components/LogoutButton'


import '../styles/globals.css' 

// add credentials check
const Download: React.FC = () => {

    const router = useRouter();
    const [session, setSession] = useState<SessionData | null>("");
    const [alphavantageFunction, setAlphavantageFunction] = useState<string | null>("BALANCE_SHEET");
    const [tickerSymbol, setTickerSymbol] = useState<string | null>("");

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
          router.push("/");
          console.log(error);
        }
      };
  
      handleSession();
    }, []);

    const handleLogout = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`, {method: "POST", credentials: "include"});
      await router.push("/");
      return response
    };

    const handlePress = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
    
      const handleAsyncPress = async () => {        
        try{
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/av/download`, {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  function: alphavantageFunction,
                  symbol: "AAPL"
                })
              })
              .then(response => {
                if (response.ok) return response.blob();
                throw new Error('Network response was not ok.');
                })
                .then(blob => {
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'data.csv';
                    a.click();
                    window.URL.revokeObjectURL(url);
                    a.remove();
                });
            console.log(response);
          }
          catch(error){
            console.error("Failed login", error);
          }
      };
      handleAsyncPress();
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className = "flex w-2/3 absolute top-0  h-[200px] justify-end items-center">
            <Button className="w-1/4  hover:bg-slate-200 active:translate-y-px text-black rounded " onClick = {handleLogout}>
                    Logout
            </Button>
        </div>
        <Card className="bg-white w-2/3 min-w-[400px] flex flex-col items-center p-6">
          <CardHeader>
            <CardTitle>Get all historical financials</CardTitle>
          </CardHeader>
          <div className="flex items-center w-2/3 my-2 px-2 lg:px-4 min-w-[150px]">
            <Label className="w-1/5 min-w-[60px]">Ticker</Label>
            <Input placeholder="AAPL" className="w-full min-w-[100px] border-slate-200 rounded" maxLength="9" onChangeCapture={e => setTickerSymbol(e.currentTarget.value)} />
          </div>
          <div className="flex items-center w-2/3 my-2 px-2 lg:px-4 min-w-[150px]">
            <Label className="w-1/5 min-w-[60px]">Dataset</Label>
            <Select onValueChange={setAlphavantageFunction}>
              <SelectTrigger className="w-full min-w-[100px] border-slate-200 rounded">
                <SelectValue placeholder="Financial statement" />
              </SelectTrigger>
              <SelectContent className="bg-white border-slate-200 rounded">
                <SelectItem value="BALANCE_SHEET">Balance sheet</SelectItem>
                <SelectItem value="CASH_FLOW">Cash flow statement</SelectItem>
                <SelectItem value="INCOME_STATEMENT">Income statement</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="w-4/6 min-w-[150px] bg-black hover:bg-slate-800 active:translate-y-px text-white rounded my-5" onClick = {handlePress}>Download your data</Button>
        </Card>
      </main>      
  );
}; 

export default Download;
