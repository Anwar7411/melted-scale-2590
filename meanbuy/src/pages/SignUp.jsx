import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { SignUpSuccess } from "../redux/authreducer/action"
import { Navigate ,useNavigate,Link} from "react-router-dom"
import "./LoginSignup.css"
const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name,setName]=useState("");
    const [ConfirmPassword,setConfirmPassword]=useState("");
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(name && email && password && ConfirmPassword){
            if (password==ConfirmPassword){
                dispatch(SignUpSuccess({name:name,email:email,password:password}))
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                setName("")
                navigate("/Login")
            }else{
                alert("Confirm Password not Matched");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                setName("")
            }
        }else{
            alert("Enter All Details");
            setEmail("");
            setPassword("");
            setName("")
        }
    }
    return (
        <div  class="Login">
            <h1>Login or Create Account</h1>
            <form onSubmit={handleSubmit}>
                <label >Full Name</label><br />
                <input type="text" class="Logininput" placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)} /><br />
                <label >Email Address</label><br />
                <input type="email" class="Logininput" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                <label >Password</label><br />
                <input type="password" class="Logininput" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                <label >ConfirmPassword</label><br />
                <input type="password" placeholder='Confirm Password' class="Logininput" value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /><br />
                <input class="inputsubmit" type="submit" value="SignUp" />
            </form>
                 <Link to="/login"><p class="Loginlink">Already have a HappyKart Account/Login</p><br /></Link>
        </div>
    )
}

export default SignUp