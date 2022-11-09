import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from '../components/Login'
const mainRoutes = () => {
  return (
    <Routes >
        <Route path='/Login' element={<Login />}></Route>
    </Routes>
  )
}

export default mainRoutes