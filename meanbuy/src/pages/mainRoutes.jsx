import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from './Login'
import SignUp from './SignUp'
import Home from "./Home"
import FlashSale from './FlashSale'
import BestDeal from './BestDeal'
import Shop from './Shop'
import Trending from './Trending'
const MainRoutes = () => {
  return (
    <Routes >
        <Route path='/login' element={<Login />}></Route>
        <Route path='/SignUp' element={<SignUp />}></Route>
        <Route path="/" element={<Home/>}/>
        <Route path="/FlashSale" element={<FlashSale/>}/>
        <Route path="/BestDeal" element={<BestDeal/>}/>
        <Route path="/Shop" element={<Shop/>}/>
        <Route path="/Trending" element={<Trending/>}/>
        <Route path="*" element={{}}/>
    </Routes>
  )
}

export default MainRoutes