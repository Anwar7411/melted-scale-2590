import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from '../components/Login'
import SignUp from '../components/SignUp'
const MainRoutes = () => {
  return (
    <Routes >
        <Route path='/login' element={<Login />}></Route>
        <Route path='/SignUp' element={<SignUp />}></Route>

    </Routes>
  )
}

export default MainRoutes