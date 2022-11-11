import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import { Electronics } from "./Electronics";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/SignUp" element={<SignUp />}></Route>
      <Route path="/home/electronics" element={<Electronics />} />
      <Route path="*" element={<div>Page Not Found!</div>} />
    </Routes>
  );
};

export default MainRoutes;
