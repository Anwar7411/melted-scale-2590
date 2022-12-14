import { StarIcon } from '@chakra-ui/icons';
import {Image, Box, Grid, GridItem, Heading } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getwatch } from '../redux/appreducer/action';
import "./Navbar.css"

const Watches = () => {
  const dispatch=useDispatch();
  const [searchParams] = useSearchParams();
  const Watchdata=useSelector((state)=>state.AppReducer.Watch)
  const location=useLocation();
 
 
  useEffect(()=>{
    if(location.search || Watchdata.length===0){
      const genre=searchParams.getAll("genre");
      const queryParams={
        params:{
          genre:genre,
          _sort:searchParams.get("sortBy") && "price",
          _order:searchParams.get("sortBy"),
        },
      }
      dispatch(getwatch(queryParams))
    }
  },[location.search])
  console.log(Watchdata)
  return (
    <Box>
      <Box>
      <Image mt={"5%"}  w={"100%"} src="https://d64lkarmo2mrq.cloudfront.net/img/cat_pages/design-watches-2.webp" alt="wtach"/>
      </Box> 
    <Grid className='data' templateColumns='repeat(4, 1fr)' gap={6}>
      {Watchdata.length>0 ? Watchdata.map((el)=>{
        return(
       <Link to={`/Watches/${el.id}`}><div key={el.id}  >
            <div><img src={el.image} alt="img"/></div>
            <Heading size="xs" color={"#455A64"}>{el.title}</Heading>
            <div style={{marginLeft:"70%",backgroundColor:"#3cc101",width:"20%",borderRadius:"50px",color:"white" }}>{el.rating}/5<StarIcon ml="5px" viewBox="0 2 24 24" /></div>

            <hr/>
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem pl="4%" w='100px' h='10'  color='#008A00'fontSize={"18"} >{el.price}</GridItem>
                <GridItem w='150px' h='10'  color='#008A00' fontSize={"18"} >{el.off}</GridItem>
            </Grid>
            

          </div></Link> 

        )
      }):<Heading mt="10%"  ml="50%" textAlign={"center"} size="lg" color={"red"}>Not Found</Heading>}
    </Grid>
    
    </Box>
    

  )
}

export default Watches