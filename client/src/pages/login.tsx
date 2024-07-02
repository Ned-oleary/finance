import {useState, useEffect} from 'react'
import { useRouter } from 'next/router';
import { Button } from "@/components/ui/button"
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardTitle, CardHeader } from "@/components/ui/card";  
import '../styles/globals.css' 
import axios from 'axios';
import {SessionData} from "@/lib/getSession"
import getSession from "@/lib/getSession"



const Login: React.FC = (event) => {
    const router = useRouter()

    const [session, setSession] = useState<SessionData | null>(null)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
      const handleSession = async () => {
        try {
          const response = await getSession();
          if (response.ok) { 
            router.push("/download");
          } else {
            console.log("No session active");
          }
        } catch (error) {
          console.log(error);
        }
      };
  
      handleSession();
    }, []);

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const credentials = {username, password};

      try{
        const success = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, credentials, { withCredentials: true });
        console.log(success);
        if(success){
          router.push("/download");
        }
        else{
          console.error("Failed login");
        }
      }
      catch(error){
        console.error("Failed login", error);

      }
    };

    return (
      <main className="flex items-center justify-center h-screen bg-gray-100">
      <Card className = "w-[500px] min-h-[270px] p-6 border border-gray-300 rounded shadow-md bg-white items-center justify-center">
        <CardHeader>
            <CardTitle className = "text-center ">Log in</CardTitle>
        </CardHeader>
        <div className = "flex w-full h-2/3 items-center justify-center ">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-center">
                    <Label htmlFor="username" className="w-[100px] pr-2 text-left">Username:</Label>
                    <Input
                        id="username"
                        type="text"
                        className="w-[300px] border-slate-200 rounded"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="flex items-center">
                    <Label htmlFor="password" className="w-[100px] pr-2 text-left">Password:</Label>
                    <Input
                        id="password"
                        type="password"
                        className="w-[300px] border-slate-200 rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Button type="submit" className="w-full bg-black hover:bg-slate-800 active:translate-y-px text-white rounded" variant="primary">
                    Login
                </Button>
            </form>
            </div>
        </Card>
      </main>
  );
}; 

export default Login;
