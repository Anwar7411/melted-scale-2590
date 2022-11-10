import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { loginFailure, loginRequest, loginSuccess } from "../redux/authreducer/action"
import { useNavigate } from "react-router-dom"
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
        if (emaillocal==loginEmail && loginPassword==passwordlocal) {
            dispatch(loginRequest())
            dispatch(loginSuccess())
            setLoginEmail("");
            setLoginPassword("");
           
        }else{
            alert("User Not Found");
            setLoginEmail("");
            setLoginPassword("");
        }
    }
    
    if (isAuth) {
        navigate("/")
    }
    return (
        <div style={{ width: "1200px", textAlign: "left", marginTop: "15px", width: "93%", margin: "auto" }}>
            <h2 style={{ color: "#f79850 ", marginBottom: "40px", marginLeft: "10px" }}>Login or Create Account</h2>
            <form onSubmit={handleSubmit}>
                <label style={{ marginBottom: "10px", marginLeft: "12px" }}>Email Address</label><br />
                <input style={{ width: "800px", fontSize: "20px", marginBottom: "15px", height: "40px", marginLeft: "12px" }} type="email" placeholder='Email Address' value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} /><br />
                <label style={{ marginBottom: "10px", marginLeft: "12px" }}>Password</label><br />
                <input style={{ width: "800px", fontSize: "20px", marginBottom: "15px", height: "40px", marginLeft: "12px" }} type="password" placeholder='Password' value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} /><br />
                <input style={{ background: "#f7941d", width: "800px", color: "white", fontSize: "20px", height: "40px", marginLeft: "12px" }} type="submit" value="Login" />
            </form>
            <p style={{ margin: "10px 350px", marginBottom: "-10px" }}>Forget Password</p><br />
            <p style={{ margin: "0 320px", marginBottom: "80px", }}>New to HappyKart/SignUp</p>
        </div>
    )
}

export default Login