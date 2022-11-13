import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { loginFailure, loginRequest, loginSuccess } from "../redux/authreducer/action"
import { useNavigate,Link } from "react-router-dom"
import "./LoginSignup.css"
const Login = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const emaillocal = useSelector((store) => store.AuthReducer.userDetails.email)
    const passwordlocal = useSelector((store) => store.AuthReducer.userDetails.password)
    const isAuth=useSelector((store) => store.AuthReducer.isAuth)
    const handleSubmit = (e) => {
        e.preventDefault();
        if(loginEmail && loginPassword){
            if (emaillocal==loginEmail && loginPassword==passwordlocal) {
                dispatch(loginRequest())
                dispatch(loginSuccess())
                setLoginEmail("");
                setLoginPassword("");
               
            }else{
                alert("User Not Found please complete SignUp");
                setLoginEmail("");
                setLoginPassword("");
            }
        }else{
            alert("Please Fill All Details");
            setLoginEmail("");
            setLoginPassword("");
        }
        
    }
    
    if (isAuth) {
        navigate("/")
    }
    return (
        <div style={{paddingTop:"10%"}} class="Login">
            <h1 >Login or Create Account</h1>
            <form onSubmit={handleSubmit}>
                <label>Email Address</label><br />
                <input type="email" class="Logininput" placeholder='Email Address' value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} /><br />
                <label>Password</label><br />
                <input  type="password" class="Logininput" placeholder='Password' value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} /><br />
                <input class="inputsubmit" type="submit" value="Login" />
            </form>
            <p class="forget">Forget Password</p><br />
             <Link to="/signup"><p class="Loginlink">New to HappyKart/SignUp</p></Link>
        </div>
    )
}

export default Login