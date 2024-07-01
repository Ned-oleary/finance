import {useState} from 'react'
import axios from 'axios';


const Login: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // need to fix this later
    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        try {
            console.log(username);
            console.log(password);
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
                { username, password },
                { withCredentials: true, headers: { 'Content-Type': 'application/json' }}
            );
            console.log(response)
        }

        catch(error) {
            console.log("Login error", error);
        }
        console.log("handleSubmit");
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
