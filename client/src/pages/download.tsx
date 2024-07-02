import { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
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
        <p>Here's a download ... hopefully...</p>
        <button onClick = {handlePress}>here's the button you have to hit</button>
        <Input placeholder="AAPL" maxLength = "9" onChangeCapture={e => setTickerSymbol(e.currentTarget.value)}  />
        <Select onValueChange = {setAlphavantageFunction}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Financial statement" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="BALANCE_SHEET">Balance sheet</SelectItem>
                <SelectItem value="CASH_FLOW">Cash flow statement</SelectItem>
                <SelectItem value="INCOME_STATEMENT">Income statement</SelectItem>
            </SelectContent>
        </Select>
    
      </main>
  );
}; 

export default Download;
