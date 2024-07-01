import {useState} from 'react'
// import axios from 'axios';


const Login: React.FC = (event) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [token, setToken] = useState(null);

    // need to fix this later
    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault(); // Prevent the default form submission

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
    
        if (!response.ok) {
          const errorDetails = await response.text();
          throw new Error(`HTTP error! status: ${response.status}, details: ${errorDetails}`);
        }
    
        const data = await response.json();
    
        if (data.access_token) {
          localStorage.setItem('token', data.access_token);
        } else {
          console.error('No access token received');
        }
      } catch (error) {
        console.error('Error during fetch:', error);
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
