import {useState} from 'react'
import { useRouter } from 'next/router';
import '../styles/globals.css' 
import addUser from "@/lib/addUser"


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
        <h1>This is the page for creating an account!</h1>
          <div className="w-[400px] p-6 bg-white border border-gray-300 rounded shadow-md">
              <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center">
                      <label htmlFor="username" className="w-[100px] pr-2 text-left">Username:</label>
                      <input
                          id="username"
                          type="text"
                          className="flex-1 p-2 border border-gray-300 rounded"
                          value={displayName}
                          onChange={(e) => setDisplayName(e.target.value)}
                      />
                  </div>
                  <div className="flex items-center">
                      <label htmlFor="password" className="w-[100px] pr-2 text-left">Password:</label>
                      <input
                          id="password"
                          type="password"
                          className="flex-1 p-2 border border-gray-300 rounded"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                      />
                  </div>
                  <button type="submit" className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                      Login
                  </button>
              </form>
          </div>
      </main>
  );
}; 

export default CreateAccount;
