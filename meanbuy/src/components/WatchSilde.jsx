import React, { Component } from "react";
import Slider from "react-slick";
import {AiFillStar} from "react-icons/ai"
import "./Watchslider.css"
import {Image,Heading,Container,GridItem,Grid, Button,Text, Flex, Box} from "@chakra-ui/react"
// import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StarIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
// import { useDispatch } from "react-redux";

// import axios from "axios"
export default class AutoPlay extends Component {


 

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
             <Box borderBottom="2px solid"> <Text textAlign={"left"} fontSize='2xl'> <b>Watches</b> </Text></Box> 
        <br/>
       
        <Slider {...settings}>
          <Box >
            <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMDgzXC9CZWlnZV9uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0" />
            <Heading size="xs" color={"#455A64"}>Men Casual Business Watch</Heading>
            <Grid templateColumns='repeat(1, 1fr)' gap={0}>
            <div style={{marginLeft:"70%",backgroundColor:"#3cc101",width:"20%",borderRadius:"50px",color:"white" }}>4.5/5<StarIcon ml="5px" viewBox="0 2 24 24" /></div>
            </Grid>
            <hr width="90%"  />
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10'  color='#008A00'  >3,299</GridItem>
                <GridItem w='100%' h='10'  color='#008A00' >flat 67% OFF</GridItem>
            </Grid>
            <hr width="90%"  />
          </Box>
          <div>
          <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyMzg1L0JsYWNrX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19" />
            <Heading size="xs" color={"#455A64"}>KOSPET TANK M1 Smartwatch</Heading>
            <Grid templateColumns='repeat(1, 1fr)' gap={0}>
            <div style={{marginLeft:"70%",backgroundColor:"#3cc101",width:"20%",borderRadius:"50px",color:"white" }}>4.8/5<StarIcon ml="5px" viewBox="0 2 24 24" /></div>
            </Grid>
            
            <hr width="90%"  />
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10' color='#008A00' >4,299</GridItem>
                <GridItem w='100%' h='10'color='#008A00' >flat 71% OFF</GridItem>
            </Grid>
            <hr width="90%"  />
          </div>
          <div>
          <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzMDI3L0JsYWNrX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19" />
            <Heading size="xs" color={"#455A64"}>Hollow Mechanical Watch</Heading>
            <Grid templateColumns='repeat(1, 1fr)' gap={0}>
            <div style={{marginLeft:"70%",backgroundColor:"#3cc101",width:"20%",borderRadius:"50px",color:"white" }}>3.5/5<StarIcon ml="5px" viewBox="0 2 24 24" /></div>
                
            </Grid>
            <hr width="90%"  />

            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10' color='#008A00' >9,999</GridItem>
                <GridItem w='100%' h='10' color='#008A00' >flat 60% OFF</GridItem>
            </Grid>
            <hr width="90%"  />

          </div>
          <div>
          <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzODcwL0JsYWNrX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19" />
            <Heading size="xs" color={"#455A64"}>Retro Quartz Pocket Watch for Men</Heading>
            <Grid templateColumns='repeat(1, 1fr)' gap={0}>
            <div style={{marginLeft:"70%",backgroundColor:"#3cc101",width:"20%",borderRadius:"50px",color:"white" }}>3.5/5<StarIcon ml="5px" viewBox="0 2 24 24" /></div>
            </Grid>
            <hr width="90%"  />

            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10' color='#008A00' >1,299</GridItem>
                <GridItem w='100%' h='10' color='#008A00' >flat 74% OFF</GridItem>
            </Grid>
            <hr width="90%"  />

          </div>
          <div>
          <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzMTk4L0JsYWNrX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19" />
            <Heading size="xs" color={"#455A64"}>Luminous Seagull waterproof Watch</Heading>
            <Grid templateColumns='repeat(1, 1fr)' gap={0}>
            <div style={{marginLeft:"70%",backgroundColor:"#3cc101",width:"20%",borderRadius:"50px",color:"white" }}>4.5/5<StarIcon ml="5px" viewBox="0 2 24 24" /></div>
            </Grid>
            <hr width="90%" />
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10'  color='#008A00' >14,299</GridItem>
                <GridItem w='100%' h='10'  color='#008A00' >flat 63% OFF</GridItem>
            </Grid>
            <hr width="90%" />
          </div>
          <div>
          <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMjI1L1JlZF9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==" />
            <Heading size="xs" color={"#455A64"}>3D BENZ AMG WHEEL WATCH </Heading>
            <Grid templateColumns='repeat(1, 1fr)' gap={0}>
            <div style={{marginLeft:"70%",backgroundColor:"#3cc101",width:"20%",borderRadius:"50px",color:"white" }}>4.8/5<StarIcon ml="5px" viewBox="0 2 24 24" /></div>
            </Grid>
            <hr width="90%" />
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10' color='#008A00'  >8,999</GridItem>
                <GridItem w='100%' h='10'  color='#008A00'>flat 64% OFF</GridItem>
            </Grid>
            <hr width="90%" />
          </div>
          <div>
          <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzMDI4L0JsdWVfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=" />
            <Heading size="xs" color={"#455A64"}>Tourbillon Meachanical Watch</Heading>
            <Grid templateColumns='repeat(1, 1fr)' gap={0}>
            <div style={{marginLeft:"70%",backgroundColor:"#3cc101",width:"20%",borderRadius:"50px",color:"white" }}>4.8/5<StarIcon ml="5px" viewBox="0 2 24 24" /></div>
            </Grid>
            <hr width="90%" />
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10' color='#008A00' >1,299</GridItem>
                <GridItem w='100%' h='10' color='#008A00' >flat 74% OFF</GridItem>
            </Grid>
            <hr width="90%" />
          </div>
          <div>
          <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5ODQ2L0JsdWVfbl8xXzEuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19" />
            <Heading size="xs"color={"#455A64"}>CURREN Leangth Belt Watch</Heading>
            <Grid templateColumns='repeat(1, 1fr)' gap={0}>
            <div style={{marginLeft:"70%",backgroundColor:"#3cc101",width:"20%",borderRadius:"50px",color:"white" }}>2.8/5<StarIcon ml="5px" viewBox="0 2 24 24" /></div>
            </Grid>
            <hr width="90%" />
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10' color='#008A00' >2,499</GridItem>
                <GridItem w='100%' h='10'color='#008A00' >flat 75% OFF</GridItem>
            </Grid>
            <hr width="90%" />
          </div>
          <div>
          <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5ODUxL0JsYWNrX25fMV8xLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==" />
            <Heading size="xs"color={"#455A64"}>Military Fashion Watch</Heading>
            <Grid templateColumns='repeat(1, 1fr)' gap={0}>
            <div style={{marginLeft:"70%",backgroundColor:"#3cc101",width:"20%",borderRadius:"50px",color:"white" }}>1.9/5<StarIcon ml="5px" viewBox="0 2 24 24" /></div>
            </Grid>
            <hr width="90%" />
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10' color='#008A00' >3,499</GridItem>
                <GridItem w='100%' h='10' color='#008A00' >flat 61% OFF</GridItem>
            </Grid>
            <hr width="90%" />
          </div>
          <div>
          <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyOTY0L0JsYWNrX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19" />
            <Heading size="xs" color={"#455A64"}>Authentic Wrist Watch</Heading>
            <Grid templateColumns='repeat(1, 1fr)' gap={0}>
            <div style={{marginLeft:"70%",backgroundColor:"#3cc101",width:"20%",borderRadius:"50px",color:"white" }}>3.9/5<StarIcon ml="5px" viewBox="0 2 24 24" /></div>
            </Grid>
            <hr width="90%" />
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10' color='#008A00' >3,199</GridItem>
                <GridItem w='100%' h='10' color='#008A00' >flat 73% OFF</GridItem>
            </Grid>
            <hr width="90%" />
          </div>
          <div>
          <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzNTMxL0JsYWNrX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19" />
            <Heading size="xs" color={"#455A64"}>Mens Steering Wheel Quartz Watch</Heading>
            <Grid templateColumns='repeat(1, 1fr)' gap={0}>
            <div style={{marginLeft:"70%",backgroundColor:"#3cc101",width:"20%",borderRadius:"50px",color:"white" }}>4.9/5<StarIcon ml="5px" viewBox="0 2 24 24" /></div>
            </Grid>
            <hr width="90%" />
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10' color='#008A00' >3,999</GridItem>
                <GridItem w='100%' h='10' color='#008A00' >flat 69% OFF</GridItem>
            </Grid>
            <hr width="90%" />
          </div>
          <div>
          <Image src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzMDYwL0JsYWNrX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19" />
            <Heading size="xs" color={"#455A64"}>360 Pixel Ultra-Clear Smart Watch</Heading>
            <Grid templateColumns='repeat(1, 1fr)' gap={0}>
            <div style={{marginLeft:"70%",backgroundColor:"#3cc101",width:"20%",borderRadius:"50px",color:"white" }}>4.9/5<StarIcon ml="5px" viewBox="0 2 24 24" /></div>
            </Grid>
            <hr width="90%" />
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10'color='#008A00'  >8,199</GridItem>
                <GridItem w='100%' h='10'color='#008A00' >flat 64% OFF</GridItem>
            </Grid>
            <hr width="90%" />
          </div>

        </Slider>
      </div>
    );
  }
}