import {useState} from 'react'
import { useRouter } from 'next/router';

import axios from 'axios';


const Login: React.FC = (event) => {
    const router = useRouter()

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [token, setToken] = useState(null);

    // need to fix this later
    const handleSubmit = async(event) => {
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

    //   try {
    //     const response = await axios.post('/login', credentials, { withCredentials: true });
    //     return response.status === 200;
    // } catch (error) {
    //     console.error('Login failed', error);
    //     return false;
    // }
    // };
    };

    return (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      );
}; 

export default Login;
