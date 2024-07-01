import {useState} from 'react'
import { useRouter } from 'next/router';

// import axios from 'axios';


const Login: React.FC = (event) => {
    const router = useRouter()

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [token, setToken] = useState(null);

    // need to fix this later
    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault(); // Prevent the default form submission behavior
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
          method: "Post",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({username, password}),
      });
      const data = await response.json();
      localStorage.setItem('access_token', data.access_token  );
      if(data){
        router.push('/');
        }
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
