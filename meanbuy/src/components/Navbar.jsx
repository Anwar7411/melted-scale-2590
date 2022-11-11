import React from 'react'
import {Link} from "react-router-dom"
import { BurgerMenu } from './BurgerMenu';
import { Grid,InputRightElement ,Input,InputGroup ,GridItem} from "@chakra-ui/react"; 
import "./Navbar.css"
import logo from "../Assets/logo.png"
import {TbSearch} from "react-icons/tb"
const Navbar = () => {
  return (
    <div>
      <div className='main'>
      <Grid className='topnav' templateColumns="repeat(4,1fr)" justifyContent="space-between">
          <div ><Link to="/"><img className='logo' src={logo} alt="logo" /></Link></div>
          <div>
          <InputGroup >
            <InputRightElement pointerEvents='none' children={<TbSearch color='gray.300' />}/>
              <Input type='tel' placeholder='Search' />
            </InputGroup>
          </div>

          <Grid
          // className='login'
          
             templateRows='repeat(2, 1fr)'
             w="150px" ml="50%"
              >
              <GridItem colSpan={1} justifySelf="right" >LOGIN /</GridItem>
                 <GridItem colSpan={1} >SIGN UP</GridItem>
               <GridItem colSpan={2} color="red.500" >Welcome Guest</GridItem>

            </Grid>
            <div><BurgerMenu/></div>
      </Grid>
      
        <Grid className='botnav' templateColumns="repeat(5,100px)">
          <div>Categories</div>
          <Link to="/FlashSale" >Flash Sale</Link>
          <div><Link to="/BestDeal">Best Deal</Link></div>
          <div><Link to="/Shop">Shop by Brand</Link></div>
          <div><Link to="/Trending">Trending</Link></div>
        </Grid>
        
      </div>
    </div>
  )
}

export default Navbar