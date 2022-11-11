import React from 'react'
import SimpleSlider from "../components/Slider"
import AutoPlay from '../components/WatchSilde'
import AutoPlay2 from '../components/SmallAppliancesSlider'
import AutoPlay3 from '../components/KeyboardsSlider'
import AutoPlay4 from '../components/ClothesSlider'
import AdaptiveHeight from '../components/BrandSlider'
import MultipleItems from '../components/FeatureSlider'

const Home = () => {
  return (
    <div>
        <div><SimpleSlider/></div>
        <div style={{margin:"10%"}}><AutoPlay/></div>
        <div style={{margin:"10%",marginTop:"-2%"}}><AutoPlay2/></div>
        <div style={{margin:"10%",marginTop:"-2%"}}><AutoPlay3/></div>
        <div style={{margin:"10%",marginTop:"-2%"}}><AutoPlay4/></div>
        <div style={{margin:"10%",marginTop:"-2%"}}><AdaptiveHeight/></div>
        <div style={{margin:"10%",marginTop:"-2%"}}><MultipleItems/></div>
    </div>
    
  )
}

export default Home