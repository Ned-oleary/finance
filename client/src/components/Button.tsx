import React from 'react';
import '../styles/globals.css' 

/* deprecated - to be deleted */
type ButtonProps = {
    onClick: () => void | Promise<Response>;
    children: React.ReactNode; 
  };
  
  const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return (
      <button onClick={onClick} className="bg-blue rounded-lg border py-2 px-3">
        {children}
      </button>
    );
  };
  
  export default Button;

