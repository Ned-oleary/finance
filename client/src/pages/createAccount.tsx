import {useState} from 'react'
import { useRouter } from 'next/router';
import '../styles/globals.css' 
import addUser from "@/lib/addUser"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


const CreateAccount: React.FC = (event) => {
    const router = useRouter()

    const [displayName, setDisplayName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      try{
        const response = await addUser(displayName, password);
        console.log(response);
        if(response){
          router.push("/login");
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
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <Card className = "w-[500px] p-6 border border-gray-300 rounded shadow-md bg-white">
        <CardHeader>
            <CardTitle>
                Create account
            </CardTitle>
        </CardHeader>
          <div className="px-6 my-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center">
                      <Label htmlFor="username" className="w-[100px] pr-2 text-left">Username:</Label>
                      <Input
                          id="username"
                          type="text"
                          className="flex-1 p-2 border border-gray-300 rounded"
                          minLength = "4"
                          value={displayName}
                          onChange={(e) => setDisplayName(e.target.value)}
                      />
                  </div>
                  <div className="flex items-center py-2">
                      <Label htmlFor="password" className="w-[100px] pr-2 text-left">Password:</Label>
                      <Input
                          id="password"
                          type="password"
                          className="flex-1 p-2 border border-gray-300 rounded"
                          minLength = "4"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                      />
                  </div>
                  <Button type="submit" className="w-full bg-black hover:bg-slate-800 active:translate-y-px text-white rounded">
                      Create your account
                  </Button>
              </form>
          </div>
          
          </Card>
      </main>
  );
}; 

export default CreateAccount;
