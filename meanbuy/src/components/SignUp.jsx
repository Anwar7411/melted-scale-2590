import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { SignUpSuccess } from "../redux/authreducer/action"
import { Navigate ,useNavigate} from "react-router-dom"
const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ConfirmPassword,setConfirmPassword]=useState("");
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password==ConfirmPassword){
            dispatch(SignUpSuccess({email:email,password:password}))
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            navigate("/Login")
        }else{
            alert("Enter All Details");
            setEmail("");
            setPassword("");
        }
    }
    return (
        <div style={{ width: "1200px", textAlign: "left", marginTop: "15px", width: "93%", margin: "auto" }}>
            <h2 style={{ color: "#f79850 ", marginBottom: "40px", marginLeft: "10px" }}>Login or Create Account</h2>
            <form onSubmit={handleSubmit}>
                <label style={{ marginBottom: "10px", marginLeft: "12px" }}>Email Address</label><br />
                <input style={{ width: "800px", fontSize: "20px", marginBottom: "15px", height: "40px", marginLeft: "12px" }} type="email" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                <label style={{ marginBottom: "10px", marginLeft: "12px" }}>Password</label><br />
                <input style={{ width: "800px", fontSize: "20px", marginBottom: "15px", height: "40px", marginLeft: "12px" }} type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                <label style={{ marginBottom: "10px", marginLeft: "12px" }}>ConfirmPassword</label><br />
                <input style={{ width: "800px", fontSize: "20px", marginBottom: "15px", height: "40px", marginLeft: "12px" }} type="password" placeholder='Confirm Password' value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /><br />
                <input style={{ background: "#f7941d", width: "800px", color: "white", fontSize: "20px", height: "40px", marginLeft: "12px" }} type="submit" value="SignUp" />
            </form>
            <p style={{ margin: "10px 270px", }}>Already have a HappyKart Account/Login</p><br />
        </div>
    )
}

export default SignUp