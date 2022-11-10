import React from 'react'
import {Link} from "react-router-dom"
import { BurgerMenu } from './BurgerMenu';
import { Grid,InputRightElement ,Input,InputGroup ,GridItem} from "@chakra-ui/react"; 
import "./Navbar.css"
import myLogo from "../Assets/logo.jpeg"
import {TbSearch} from "react-icons/tb"
const Navbar = () => {
  return (
    <div>
      <div className='main'>
      <Grid className='topnav' templateColumns="repeat(4,1fr)" justifyContent="space-between">
          <div className='logo'><img src={myLogo}  alt="logo" /></div>
          <div>
          <InputGroup >
            <InputRightElement pointerEvents='none' children={<TbSearch color='gray.300' />}/>
              <Input type='tel' placeholder='Phone number' />
            </InputGroup>
          </div>

          <Grid
             templateRows='repeat(2, 1fr)'
             w="150px" ml="50%"
              >
              <GridItem colSpan={1} justifySelf="right" >LOGIN /</GridItem>
                 <GridItem colSpan={1} >SIGN UP</GridItem>
               <GridItem colSpan={2} >Welcome Guest</GridItem>

            </Grid>
            <div><BurgerMenu/></div>
      </Grid>
      
        <Grid className='botnav' templateColumns="repeat(5,100px)">
          <div>Categories</div>
          <Link to="/FlashSale" >Flash Sale</Link>
          <div>Best Deal</div>
          <div>Shop by Brand</div>
          <div>Trending</div>
        </Grid>
        
      </div>
    </div>
  )
}

export default Navbar