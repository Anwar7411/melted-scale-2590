import React, { Component } from "react";
import Slider from "react-slick";
import {AiFillStar} from "react-icons/ai"
import "./Watchslider.css"
import {Image,Heading,Container,GridItem,Grid, Button, Flex} from "@chakra-ui/react"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class AutoPlay2 extends Component {

 

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
        <Heading className="heading" pr="83%" size={"xl"} >Small Appliance</Heading>
        <Button marginLeft="-10px" w="50px" bg={"white"}>See More</Button>

        </Flex>
       
        <Slider {...settings}>
          <div>
            <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzODA5L0JsYWNrX25fMV9KdWljZXJtaXhlcjEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=" />
            <Heading size="xs" color={"#455A64"}>400ml Mixer juicer</Heading>
            <Grid templateColumns='repeat(2, 1fr)' gap={0}>
                <GridItem w='100%' h='10'  ><Container maxW='100px' color='#008A00' >4.8/5 </Container></GridItem>
                <GridItem pt={"1.5"}  w='100%' h='10' color='#008A00'><AiFillStar/></GridItem>
            </Grid>
            
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10'  color='#008A00'  >3,999</GridItem>
                <GridItem w='100%' h='10'  color='#008A00' >flat 67% OFF</GridItem>
            </Grid>
          </div>
          <div>
          <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzODIwL1doaXRlX25fMV9QYW5jYWtlbWFrZXIxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19" />
            <Heading size="xs" color={"#455A64"}>Electic Pancake Maker</Heading>
            <Grid templateColumns='repeat(2, 1fr)' gap={0}>
                <GridItem w='100%' h='10'  ><Container maxW='100px' color='#008A00' >4.8/5 </Container></GridItem>
                <GridItem pt={"1.5"}  w='100%' h='10' color='#008A00'><AiFillStar/></GridItem>
            </Grid>
            
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10' color='#008A00' >4,299</GridItem>
                <GridItem w='100%' h='10'color='#008A00' >flat 71% OFF</GridItem>
            </Grid>
          </div>
          <div>
          <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzODkwL0JsYWNrX25fMV9MdW5jaGJveDEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0="/>
            <Heading size="xs" color={"#455A64"}>Electric Lunch Box</Heading>
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
          <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0MDc0L1Bpbmtfbl8xX0VsZWN0cmljRnJ1aXRKdWljZXIxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19" />
            <Heading size="xs" color={"#455A64"}>Mini Electric Juicer</Heading>
            <Grid templateColumns='repeat(2, 1fr)' gap={0}>
                <GridItem w='100%' h='10'  ><Container maxW='100px' color='#008A00' >4.9/5</Container></GridItem>
                <GridItem pt={"1.5"}  w='100%' h='10' color='#008A00'><AiFillStar/></GridItem>
            </Grid>
            
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10' color='#008A00' >5,299</GridItem>
                <GridItem w='100%' h='10' color='#008A00' >flat 74% OFF</GridItem>
            </Grid>
          </div>
          <div>
          <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0MDczL1doaXRlX25fMV9FbGVjdHJpY0ZydWl0SnVpY2VyMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==" />
            <Heading size="xs" color={"#455A64"}>Portable Blender Juicer</Heading>
            <Grid templateColumns='repeat(2, 1fr)' gap={0}>
                <GridItem w='100%' h='10'  ><Container maxW='100px'  color='#008A00' >4.3/5 </Container></GridItem>
                <GridItem pt={"1.5"}  w='100%' h='10'  color='#008A00'><AiFillStar/></GridItem>
            </Grid>
            
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10'  color='#008A00' >4,299</GridItem>
                <GridItem w='100%' h='10'  color='#008A00' >flat 63% OFF</GridItem>
            </Grid>
          </div>
          <div>
          <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzODg3L0JsdWVfbl8xX0Nvb2tpZXNtYWtlcjEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=" />
            <Heading size="xs" color={"#455A64"}>Cookies Making Sets</Heading>
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
          <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjM0MjYzL1doaXRlX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19" />
            <Heading size="xs" color={"#455A64"}>400ml MultiFunctional Electric Squeezer Juicer</Heading>
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
          <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjM0MjY1L1Bpbmtfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=" />
            <Heading size="xs"color={"#455A64"}>350ml Electric Portable Juicing Cup</Heading>
            <Grid templateColumns='repeat(2, 1fr)' gap={0}>
                <GridItem w='100%' h='10'  ><Container maxW='100px' color='#008A00' >4.5/5</Container></GridItem>
                <GridItem pt={"1.5"}  w='100%' h='10' color='#008A00'><AiFillStar/></GridItem>
            </Grid>
            
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10' color='#008A00' >4,499</GridItem>
                <GridItem w='100%' h='10'color='#008A00' >flat 75% OFF</GridItem>
            </Grid>
          </div>
          <div>
          <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTc0L0dyZWVuX25fMV9NaXhlckdyaW5kZXIxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19" />
            <Heading size="xs"color={"#455A64"}>Multi-Function Grinder</Heading>
            <Grid templateColumns='repeat(2, 1fr)' gap={0}>
                <GridItem w='100%' h='10'  ><Container maxW='100px' color='#008A00' >4.9/5</Container></GridItem>
                <GridItem pt={"1.5"}  w='100%' h='10' color='#008A00'><AiFillStar/></GridItem>
            </Grid>
            
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10' color='#008A00' >5,499</GridItem>
                <GridItem w='100%' h='10' color='#008A00' >flat 61% OFF</GridItem>
            </Grid>
          </div>
          <div>
          <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTgwL0JsdWVfbl8xX0hhbmRUeXBlRm9hbStNYWtlcjEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=" />
            <Heading size="xs" color={"#455A64"}>Multi-Functional Cream Whisker</Heading>
            <Grid templateColumns='repeat(2, 1fr)' gap={0}>
                <GridItem w='100%' h='10'  ><Container maxW='100px' color='#008A00' >4.5/5</Container></GridItem>
                <GridItem pt={"1.5"}  w='100%' h='10' color='#008A00'><AiFillStar/></GridItem>
            </Grid>
            
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10' color='#008A00' >4,599</GridItem>
                <GridItem w='100%' h='10' color='#008A00' >flat 69% OFF</GridItem>
            </Grid>
          </div>
          <div>
          <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzODA0L1doaXRlX25fMV9KdWljZXJtaXhlcjEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=" />
            <Heading size="xs" color={"#455A64"}>300ml Mini Fruit Mixer</Heading>
            <Grid templateColumns='repeat(2, 1fr)' gap={0}>
                <GridItem w='100%' h='10'  ><Container maxW='100px' color='#008A00' >4.7/5</Container></GridItem>
                <GridItem pt={"1.5"}  w='100%' h='10' color='#008A00'><AiFillStar/></GridItem>
            </Grid>
            
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10' color='#008A00' >3,999</GridItem>
                <GridItem w='100%' h='10' color='#008A00' >flat 69% OFF</GridItem>
            </Grid>
          </div>
          
        </Slider>
      </div>
    );
  }
}