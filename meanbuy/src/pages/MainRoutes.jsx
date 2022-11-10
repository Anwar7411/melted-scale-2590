import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
const MainRoutes = () => {
  return (
    <Routes >
        <Route path='/login' element={<Login />}></Route>
        <Route path='/SignUp' element={<SignUp />}></Route>
        {/* <Route path="*" element={{}}/> */}
    </Routes>
  );
};

export default MainRoutes;
