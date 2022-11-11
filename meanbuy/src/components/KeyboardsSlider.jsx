import React, { Component } from "react";
import Slider from "react-slick";
import {AiFillStar} from "react-icons/ai"
import "./Watchslider.css"
import {Image,Heading,Container,GridItem,Grid, Button, Flex} from "@chakra-ui/react"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class AutoPlay3 extends Component {

 

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
        <Heading className="heading" pr="83%" size={"xl"} >Keyboards & Mouse</Heading>
        <Button marginLeft="-10px" w="50px" bg={"white"}>See More</Button>

        </Flex>
       
        <Slider {...settings}>
          <div>
            <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0Mzk0L0JsYWNrX25fMV9XaXJlbGVzc0tleWJvYXJkMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==" />
            <Heading size="xs" color={"#455A64"}>Folding Keyboard</Heading>
            <Grid templateColumns='repeat(2, 1fr)' gap={0}>
                <GridItem w='100%' h='10'  ><Container maxW='100px' color='#008A00' >3.8/5 </Container></GridItem>
                <GridItem pt={"1.5"}  w='100%' h='10' color='#008A00'><AiFillStar/></GridItem>
            </Grid>
            
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10'  color='#008A00'  >6,999</GridItem>
                <GridItem w='100%' h='10'  color='#008A00' >flat 67% OFF</GridItem>
            </Grid>
          </div>
          <div>
          <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0MzkzL0JsYWNrX25fMV9XaXJlbGVzc0tleWJvYXJkMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ=="/>
            <Heading size="xs" color={"#455A64"}>Bluetooth Folding Keyboard</Heading>
            <Grid templateColumns='repeat(2, 1fr)' gap={0}>
                <GridItem w='100%' h='10'  ><Container maxW='100px' color='#008A00' >4.6/5 </Container></GridItem>
                <GridItem pt={"1.5"}  w='100%' h='10' color='#008A00'><AiFillStar/></GridItem>
            </Grid>
            
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10' color='#008A00' >2,999</GridItem>
                <GridItem w='100%' h='10'color='#008A00' >flat 61% OFF</GridItem>
            </Grid>
          </div>
          <div>
          <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0NDMyL0JsYWNrX25fMV9XaXJlbGVzc0tleWJvYXJkMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ=="/>
            <Heading size="xs" color={"#455A64"}>Mini Foldable Keyboard</Heading>
            <Grid templateColumns='repeat(2, 1fr)' gap={0}>
                <GridItem w='100%' h='10'  ><Container maxW='100px' color='#008A00' >4.2/5 </Container></GridItem>
                <GridItem pt={"1.5"}  w='100%' h='10' color='#008A00'><AiFillStar/></GridItem>
            </Grid>
            
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10' color='#008A00' >3,999</GridItem>
                <GridItem w='100%' h='10' color='#008A00' >flat 60% OFF</GridItem>
            </Grid>
          </div>
          <div>
          <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyMTM0L1JlZF9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==" />
            <Heading size="xs" color={"#455A64"}>Makeup Keyboard</Heading>
            <Grid templateColumns='repeat(2, 1fr)' gap={0}>
                <GridItem w='100%' h='10'  ><Container maxW='100px' color='#008A00' >4.9/5</Container></GridItem>
                <GridItem pt={"1.5"}  w='100%' h='10' color='#008A00'><AiFillStar/></GridItem>
            </Grid>
            
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10' color='#008A00' >11,299</GridItem>
                <GridItem w='100%' h='10' color='#008A00' >flat 74% OFF</GridItem>
            </Grid>
          </div>
          <div>
          <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTM2L0JsYWNrX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19" />
            <Heading size="xs" color={"#455A64"}> Xiamoi Mi Dual Wireless Mouse</Heading>
            <Grid templateColumns='repeat(2, 1fr)' gap={0}>
                <GridItem w='100%' h='10'  ><Container maxW='100px'  color='#008A00' >4.3/5 </Container></GridItem>
                <GridItem pt={"1.5"}  w='100%' h='10'  color='#008A00'><AiFillStar/></GridItem>
            </Grid>
            
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10'  color='#008A00' >6,299</GridItem>
                <GridItem w='100%' h='10'  color='#008A00' >flat 63% OFF</GridItem>
            </Grid>
          </div>
          <div>
          <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE3NzM4L0JsYWNrX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19"/>
            <Heading size="xs" color={"#455A64"}>3D Wireless Mouse</Heading>
            <Grid templateColumns='repeat(2, 1fr)' gap={0}>
                <GridItem w='100%' h='10'  ><Container maxW='100px'  color='#008A00' >5.0/5</Container></GridItem>
                <GridItem pt={"1.5"}  w='100%' h='10'  color='#008A00'><AiFillStar/></GridItem>
            </Grid>
            
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10' color='#008A00'  >3,999</GridItem>
                <GridItem w='100%' h='10'  color='#008A00'>flat 64% OFF</GridItem>
            </Grid>
          </div>
          <div>
          <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTM3L1Jvc2Vfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=" />
            <Heading size="xs" color={"#455A64"}>Xiamoi Mi Portable Mouse</Heading>
            <Grid templateColumns='repeat(2, 1fr)' gap={0}>
                <GridItem w='100%' h='10'  ><Container maxW='100px' color='#008A00' >3.7/5</Container></GridItem>
                <GridItem pt={"1.5"}  w='100%' h='10' color='#008A00'><AiFillStar/></GridItem>
            </Grid>
            
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10' color='#008A00' >7,299</GridItem>
                <GridItem w='100%' h='10' color='#008A00' >flat 74% OFF</GridItem>
            </Grid>
          </div>
          <div>
          <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0Mzk1L0JsYWNrX25fMV9XaXJlZEtleWJvYXJkMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==" />
            <Heading size="xs"color={"#455A64"}>Mechanical Wireless Keyboard</Heading>
            <Grid templateColumns='repeat(2, 1fr)' gap={0}>
                <GridItem w='100%' h='10'  ><Container maxW='100px' color='#008A00' >4.5/5</Container></GridItem>
                <GridItem pt={"1.5"}  w='100%' h='10' color='#008A00'><AiFillStar/></GridItem>
            </Grid>
            
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10' color='#008A00' >4,499</GridItem>
                <GridItem w='100%' h='10'color='#008A00' >flat 75% OFF</GridItem>
            </Grid>
          </div>
          
          
        </Slider>
      </div>
    );
  }
}