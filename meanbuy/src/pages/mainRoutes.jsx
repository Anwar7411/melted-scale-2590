import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from '../components/Login'
import SignUp from '../components/SignUp'
const mainRoutes = () => {
  return (
    <Routes >
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/SignUp' element={<SignUp />}></Route>

    </Routes>
  )
}

export default mainRoutes