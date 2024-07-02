import { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import LogoutButton from '@/components/LogoutButton'


import '../styles/globals.css' 

// add credentials check
const Download: React.FC = () => {
    const [alphavantageFunction, setAlphavantageFunction] = useState<string | null>("BALANCE_SHEET");
    const [tickerSymbol, setTickerSymbol] = useState<string | null>("");

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
        <Card className="bg-white w-2/3 min-w-[400px] flex flex-col items-center p-6">
          <CardHeader>
            <CardTitle>Query the AlphaVantage API</CardTitle>
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
