import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import AuthContext from "./AuthContext";
import "./Register.css";

const LogIn = () => {
  // const { setAuth } = useContext(AuthContext)
  const [input, setInput] = useState({
    email:'',
    password:'',
  })

  const logged = JSON.parse(localStorage.getItem("user") || '{}')
  const handleLogin = () =>{
    
    if(input.email === logged.email && input.password === logged.password){
      localStorage.setItem("user", JSON.stringify(input))
      localStorage.setItem("userInfo", JSON.stringify(logged));

        // setInput(logged);
        window.location.href = '/'
        
      }
      
    }
console.log(logged);

console.log(input);

  
  return (
    <div className="login">
      <form>
        <p>
          <input
            name="email"
            value={input.email}
            type='email'
            placeholder="E-mail"
            onChange={(e) => setInput({...input,[e.target.name]: e.target.value})}
          />
        </p>
        <p>
          <input
            name="password"
            value={input.password}
            type='password'
            placeholder="Password"
            onChange={(e) => setInput({...input,[e.target.name]: e.target.value})}
          />
        </p>
        <Button variant="outline-success" onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleLogin()}>
          Log In
        </Button>
      <Link  to="/register"><Button variant="outline-primary" >Register</Button></Link>
      </form>
    </div>
  );
};

export default LogIn;
