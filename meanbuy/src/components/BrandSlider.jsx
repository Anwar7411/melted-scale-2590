import React, { Component } from "react";
import Slider from "react-slick";
import { Box, Button, Flex, Heading, Image,Text } from "@chakra-ui/react";


export default class AdaptiveHeight extends Component {
  render() {
    var settings = {
      className: "",
      dots: true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    };
    return (
      <div>
             <Box borderBottom="2px solid"> <Text textAlign={"left"} fontSize='2xl'> <b>Top Selling Brands</b> </Text></Box> 
        <br/>
        <Slider {...settings}>
          <div>
            <Image src="https://d64lkarmo2mrq.cloudfront.net/img/home/brandbanner2.webp"/>
          </div>
          <div >
            <Image src="https://d64lkarmo2mrq.cloudfront.net/img/home/brandbanner1.webp"/>
            
          </div>
          
        </Slider>
      </div>
    );
  }
}