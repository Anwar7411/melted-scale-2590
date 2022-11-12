import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home"
import FlashSale from './FlashSale'
import BestDeal from './BestDeal'
import Shop from './Shop'
import Trending from './Trending'
import Watchpage from "./Watchpage";
import { Electronics } from "./Electronics";
<<<<<<< Updated upstream
import Clothing from "./Clothing";
import PageNotFound from "./PageNotFound";
import PrivateRoute from "./PrivateRoute";
=======
import Category from "../components/Category";

>>>>>>> Stashed changes
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/SignUp" element={<SignUp />}></Route>
      <Route path="/home/electronics" element={<Electronics />} />
      <Route path="/clothing" element={<PrivateRoute><Clothing /></PrivateRoute>}></Route>
      <Route path="/" element={<Home/>}/>
        <Route path="/FlashSale" element={<FlashSale/>}/>
        <Route path="/BestDeal" element={<BestDeal/>}/>
        <Route path="/Shop" element={<Shop/>}/>
        <Route path="/Trending" element={<Trending/>}/>

        <Route path="/Watchpage" element={<Watchpage/>}/>
<<<<<<< Updated upstream
      
=======
        <Route path="/Category" element={<Category/>}/>

        
      <Route path="*" element={<div>Page Not Found!</div>} />
>>>>>>> Stashed changes
    </Routes>
  );
};

export default MainRoutes;
