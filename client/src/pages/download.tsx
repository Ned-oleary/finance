import { useState } from 'react'
import '../styles/globals.css' 

// add credentials check
const Download: React.FC = () => {
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
                  function: "BALANCE_SHEET",
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
      </main>
  );
}; 

export default Download;
