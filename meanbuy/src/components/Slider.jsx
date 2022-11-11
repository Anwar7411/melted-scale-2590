import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Image, Grid ,Box, Button,Text, Heading} from "@chakra-ui/react";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Box width="90%" ml="6%" >
        
        <Slider {...settings}  >
          
          <div >
            <Box><Image width="100%" height="100%" src="https://d64lkarmo2mrq.cloudfront.net/img/home/international-banner-02.webp"/></Box>
          </div>
          <div>
            <Box><Image width="100%" height="100%" src="https://d64lkarmo2mrq.cloudfront.net/img/home/watch-offer-banner.webp" /></Box>
          </div>
          <div>
          <Box><Image width="100%" height="100%" src="https://d64lkarmo2mrq.cloudfront.net/img/home/turkey-fashion.webp" /></Box>
          </div>
          <div>
          <Box><Image width="100%" height="100%" src="https://d64lkarmo2mrq.cloudfront.net/img/home/made-in-turkey.webp" /></Box>
          </div>
          <div>
          <Box><Image width="100%" height="100%" src="https://d64lkarmo2mrq.cloudfront.net/img/home/34535_new_arrivals.webp" /></Box>
          </div>
          <div>
          <Box><Image width="100%" height="100%" src="https://d64lkarmo2mrq.cloudfront.net/img/home/4544_500_off.webp" /></Box>
          </div>
          <div>
          <Box><Image width="100%" height="100%" src="https://d64lkarmo2mrq.cloudfront.net/img/home/544545_best_selling.webp" /></Box>
          </div>
          <div>
          <Box><Image width="100%" height="100%" src="https://d64lkarmo2mrq.cloudfront.net/img/home/new-global.webp" /></Box>
          </div>
          <div>
          <Box><Image width="100%" height="100%" src="https://d64lkarmo2mrq.cloudfront.net/img/home/prepaid-order-free-watch-banner.webp" /></Box>
          </div>
        </Slider>
      </Box>
    );
  }
}
