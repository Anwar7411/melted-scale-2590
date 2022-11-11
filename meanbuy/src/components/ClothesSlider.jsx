import React, { Component } from "react";
import Slider from "react-slick";
import {AiFillStar} from "react-icons/ai"
import "./Watchslider.css"
import {Image,Heading,Container,GridItem,Grid, Button, Flex} from "@chakra-ui/react"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class AutoPlay4 extends Component {

 

  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    
    return (
      <div>
        <Flex >
        <Heading className="heading" pr="83%" size={"xl"} >Clothing</Heading>
        <Button marginLeft="-10px" w="50px" bg={"white"}>See More</Button>

        </Flex>
       
        <Slider {...settings}>
          <div>
            <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjM0ODQwL1BpbmtfU18xXzEucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=" />
            <Heading size="xs" color={"#455A64"}>Happiness istanbul Jumpsuit - powdered pink -Relaxed</Heading>
            <Grid templateColumns='repeat(2, 1fr)' gap={0}>
                <GridItem w='100%' h='10'  ><Container maxW='100px' color='#008A00' >3.8/5 </Container></GridItem>
                <GridItem pt={"1.5"}  w='100%' h='10' color='#008A00'><AiFillStar/></GridItem>
            </Grid>
            
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10'  color='#008A00'  >5,999</GridItem>
                <GridItem w='100%' h='10'  color='#008A00' >flat 40% OFF</GridItem>
            </Grid>
          </div>
          <div>
          <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjM0NjI5L1doaXRlX1NfMV8xLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19"/>
            <Heading size="xs" color={"#455A64"}>Zippered Linen Abaya -White</Heading>
            <Grid templateColumns='repeat(2, 1fr)' gap={0}>
                <GridItem w='100%' h='10'  ><Container maxW='100px' color='#008A00' >4.6/5 </Container></GridItem>
                <GridItem pt={"1.5"}  w='100%' h='10' color='#008A00'><AiFillStar/></GridItem>
            </Grid>
            
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10' color='#008A00' >6,999</GridItem>
                <GridItem w='100%' h='10'color='#008A00' >flat 51% OFF</GridItem>
            </Grid>
          </div>
          <div>
          <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjM0NjQzL09yYW5nZV9TXzFfMS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ=="/>
            <Heading size="xs" color={"#455A64"}>Women Long Knitted Kimono -Orange</Heading>
            <Grid templateColumns='repeat(2, 1fr)' gap={0}>
                <GridItem w='100%' h='10'  ><Container maxW='100px' color='#008A00' >3.9/5 </Container></GridItem>
                <GridItem pt={"1.5"}  w='100%' h='10' color='#008A00'><AiFillStar/></GridItem>
            </Grid>
            
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10' color='#008A00' >4,599</GridItem>
                <GridItem w='100%' h='10' color='#008A00' >flat 60% OFF</GridItem>
            </Grid>
          </div>
          <div>
          <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjM0NjM0L1doaXRlX1NfMV8xLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19" />
            <Heading size="xs" color={"#455A64"}>Red Chanel Blazer Jacket</Heading>
            <Grid templateColumns='repeat(2, 1fr)' gap={0}>
                <GridItem w='100%' h='10'  ><Container maxW='100px' color='#008A00' >4.1/5</Container></GridItem>
                <GridItem pt={"1.5"}  w='100%' h='10' color='#008A00'><AiFillStar/></GridItem>
            </Grid>
            
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10' color='#008A00' >9,299</GridItem>
                <GridItem w='100%' h='10' color='#008A00' >flat 44% OFF</GridItem>
            </Grid>
          </div>
          <div>
          <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjM0Njc2L1BpbmtfU18xXzEucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=" />
            <Heading size="xs" color={"#455A64"}> Sleeveless Trench Vest Coat</Heading>
            <Grid templateColumns='repeat(2, 1fr)' gap={0}>
                <GridItem w='100%' h='10'  ><Container maxW='100px'  color='#008A00' >4.3/5 </Container></GridItem>
                <GridItem pt={"1.5"}  w='100%' h='10'  color='#008A00'><AiFillStar/></GridItem>
            </Grid>
            
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10'  color='#008A00' >3,299</GridItem>
                <GridItem w='100%' h='10'  color='#008A00' >flat 60% OFF</GridItem>
            </Grid>
          </div>
          <div>
          <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjM0NzkyL0JsYWNrX1NfMV8xLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19"/>
            <Heading size="xs" color={"#455A64"}>Black Collar Lace-up Dress</Heading>
            <Grid templateColumns='repeat(2, 1fr)' gap={0}>
                <GridItem w='100%' h='10'  ><Container maxW='100px'  color='#008A00' >5.0/5</Container></GridItem>
                <GridItem pt={"1.5"}  w='100%' h='10'  color='#008A00'><AiFillStar/></GridItem>
            </Grid>
            
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10' color='#008A00'  >4,999</GridItem>
                <GridItem w='100%' h='10'  color='#008A00'>flat 64% OFF</GridItem>
            </Grid>
          </div>
          <div>
          <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjM0Nzc2L1BpbmtfU18xXzEucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=" />
            <Heading size="xs" color={"#455A64"}>Patterned hijab dress</Heading>
            <Grid templateColumns='repeat(2, 1fr)' gap={0}>
                <GridItem w='100%' h='10'  ><Container maxW='100px' color='#008A00' >3.7/5</Container></GridItem>
                <GridItem pt={"1.5"}  w='100%' h='10' color='#008A00'><AiFillStar/></GridItem>
            </Grid>
            
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10' color='#008A00' >5,299</GridItem>
                <GridItem w='100%' h='10' color='#008A00' >flat 74% OFF</GridItem>
            </Grid>
          </div>
          <div>
          <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjM0OTAyL1doaXRlX1NfMV8xLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19" />
            <Heading size="xs"color={"#455A64"}>Women White Sweat Tunic</Heading>
            <Grid templateColumns='repeat(2, 1fr)' gap={0}>
                <GridItem w='100%' h='10'  ><Container maxW='100px' color='#008A00' >4.5/5</Container></GridItem>
                <GridItem pt={"1.5"}  w='100%' h='10' color='#008A00'><AiFillStar/></GridItem>
            </Grid>
            
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10' color='#008A00' >5,499</GridItem>
                <GridItem w='100%' h='10'color='#008A00' >flat 60% OFF</GridItem>
            </Grid>
          </div>
          
          
        </Slider>
      </div>
    );
  }
}