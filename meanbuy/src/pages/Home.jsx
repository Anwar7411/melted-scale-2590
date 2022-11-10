import React from 'react'
import SimpleSlider from "../components/Slider"
import AutoPlay from '../components/WatchSilde'
import AutoPlay2 from '../components/SmallAppliancesSlider'
const Home = () => {
  return (
    <div>
        <div><SimpleSlider/></div>
        <div style={{margin:"10%"}}><AutoPlay/></div>
        <div style={{margin:"10%",marginTop:"-2%"}}><AutoPlay2/></div>
    </div>
    
  )
}

export default Home