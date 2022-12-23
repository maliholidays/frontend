import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const[token,setToken]= useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const navigate = useNavigate()
    // console.log(process.env);
    console.log(email);
    console.log(password);
    
    const Submit=(e)=>{
        e.preventDefault();
        
        fetch("http://localhost:8000/api/user/login",{
            method:"POST",
            body:JSON.stringify({
                email:email,
                password:password
            }),
            headers:{
                "Content-Type": "application/json"
            }
        }).then(response=>response.json()).then((data)=>{
            // setToken(data)
            console.log(data);
            
            const TokenString = {
                token:data
                }
            localStorage.setItem("token",JSON.stringify(TokenString))
            navigate("/")
              
        })

    }
  return (
    <div>
        <form onSubmit={Submit}>
            {/* <input type="text" name="fullname" id="" /> */}
            <input type="email" name="email" id="" onChange={(e)=>{
                setEmail(e.target.value)
            }}/>
            <input type="password" name="password" id="" onChange={(e)=>{
                setPassword(e.target.value)
            }}/>
            <input type="submit" value="Click" />
        </form>
    </div>
  )
}

export default Login