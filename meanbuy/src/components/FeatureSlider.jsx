import { Box, Button, Flex, Heading, Image,Text } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div>
         <Box borderBottom="2px solid"> <Text textAlign={"left"} fontSize='2xl'> <b>Feature</b> </Text></Box> 
        <br/>
        <Slider {...settings}>
            <div>
                <Image ml="15%" src="https://d64lkarmo2mrq.cloudfront.net/img/as_seen_on/chainmag.jpg"/>
                <Heading size="xs" color={"#333333"}>Chain Magazine</Heading>
                <Heading size="xs" color={"#455A64"}>MeanBuy -An Indian StartUp eCommerce Market Place</Heading>
           </div>
           <div>
                <Image ml="15%" src="https://d64lkarmo2mrq.cloudfront.net/img/as_seen_on/sillicon.jpg"/>
                <Heading size="xs" color={"#333333"}>Sillicon India</Heading>
                <Heading size="xs" color={"#455A64"}>10 Most Promising E-Commerce Startups</Heading>
           </div>
           <div>
                <Image ml="15%" src="https://d64lkarmo2mrq.cloudfront.net/img/as_seen_on/medium.jpg"/>
                <Heading size="xs" color={"#333333"}>FLair Explorer</Heading>
                <Heading size="xs" color={"#455A64"}>E-commerce Inside the Startup Ecosystem in India</Heading>
           </div>
          
        </Slider>
      </div>
    );
  }
}