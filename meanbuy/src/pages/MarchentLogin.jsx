import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../redux/dashboardReducer/action";
import { authsaveData } from "../redux/utilies/authLocalData";

const MarchentLogin = () => {
     const { isLoading } = useSelector((state) => state.DashReducer);
     const [email, setEmail] = useState("eve.holt@reqres.in");
     const [password, setPassword] = useState("");

     const dispatch = useDispatch();
     const navigate = useNavigate();
     const location = useLocation();
     const comingFrom = location.state?.from?.pathname || "/admindashboard";
     const handleSubmit = (e) => {
          e.preventDefault();
          if (email && password) {
               dispatch(login({ email, password })).then((r) => {
                    navigate(comingFrom, { replace: true });
               });
          }
     };
     return (
          <Box
               // zIndex={10000}
               backgroundImage={
                    "https://i.postimg.cc/g0jQ3cfm/cffcdec6-8c57-4b6e-962e-f5f24059687f.jpg"
               }
               w={"full"}
               h={"100vh"}
               border="1px solid red"
          >
               <Box
                    width={"350px"}
                    boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
                    margin={"100px auto"}
                    display={"flex"}
                    flexDirection={"column"}
                    textAlign="left"
                    p={10}
                    backgroundColor="#ffff"
               >
                    <Heading>Login</Heading>
                    <Text mt={5}>
                         Please login with your email and password below.
                    </Text>
                    <form onSubmit={handleSubmit}>
                         <lable style={{ marginTop: "20px" }}>Email:</lable>
                         <Input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                         />
                         <lable>Password:</lable>
                         <Input
                              type={"password"}
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                         />
                         <br />

                         <Button type="submit">
                              {" "}
                              {isLoading ? "LOADING" : "LOGIN"}
                         </Button>
                    </form>
               </Box>
          </Box>
     );
};

export default MarchentLogin;
