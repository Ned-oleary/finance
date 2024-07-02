import {useState} from 'react'
import { useRouter } from 'next/router';
import { Button } from "@/components/ui/button"
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardTitle, CardHeader, CardDescription } from "@/components/ui/card";  
import '../styles/globals.css' 
import axios from 'axios';


const Login: React.FC = (event) => {
    const router = useRouter()

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const credentials = {username, password};

      try{
        const success = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, credentials, { withCredentials: true });
        console.log(success);
        if(success){
          router.push("/");
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
      <main className="flex items-center justify-center h-screen">
          <Card className="w-1/2 h-2/3 p-10 relative min-w-[400px]">
            <CardHeader>
            <CardTitle className = "text-center">Log in</CardTitle>
            </CardHeader>
            <div className = "flex w-full h-2/3 items-center justify-around ">
              <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center">
                      <Label htmlFor="username" className="w-[150px] pr-2 text-left">Username:</Label>
                      <Input
                          id="username"
                          type="text"
                          className="w-[300]px border-slate-200 rounded"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                      />
                  </div>
                  <div className="flex items-center">
                      <Label htmlFor="password" className="w-[150px] pr-2 text-left">Password:</Label>
                      <Input
                          id="password"
                          type="password"
                          className="w-[300]px border-slate-200 rounded"
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
