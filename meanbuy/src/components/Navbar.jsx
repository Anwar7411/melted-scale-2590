
import React from "react";
import { Link } from "react-router-dom";
import { BurgerMenu } from "./BurgerMenu";
import Recomandation from '../pages/Recomandation';
import {
     Grid,
     InputRightElement,
     Input,
     InputGroup,
     GridItem,
     Flex,
     Box,
     Divider,
     Text, 
     Popover,
} from "@chakra-ui/react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import { TbSearch } from "react-icons/tb";
import { useSelector } from "react-redux";



const Navbar = () => {
  const name = useSelector((store) => store.AuthReducer.userDetails.name);
     const isAuth=useSelector((store) => store.AuthReducer.isAuth)
  return (
    <div>
      <div className='main'>
      <Grid className='topnav' templateColumns="repeat(5,1fr)" justifyContent="space-between">
          <div ><Link to="/"><img className='logo' src={logo} alt="logo" /></Link></div>

          
               <div className="main">
                    <Grid
                         className="topnav"
                         templateColumns="repeat(6,1fr)"
                         justifyContent="space-between"
                    >
                         <div>
                              <Link to="/">
                                   <img
                                        className="logo"
                                        src={logo}
                                        alt="logo"
                                   />
                              </Link>
                         </div>
                         <div>
                              <InputGroup>
                                   <InputRightElement
                                        pointerEvents="none"
                                        children={<TbSearch color="gray.300" />}
                                   />
                                   <Input type="tel" placeholder="Search" />
                              </InputGroup>
                         </div>
                         <Flex gap={2} ml="400px" w="50px" mr="100px">
                              <Box fontSize="13px">
                                   <Link to="/vendorRegistrationForm">
                                        Seller's Corner
                                   </Link>
                              </Box>
                              <Divider
                                   height="22px"
                                   borderColor="red"
                                   orientation="vertical"
                              />
                              <Box fontSize="13px"><Link to="/FeedbackForm">Feedback</Link></Box>
                              <Divider
                                   height="22px"
                                   borderColor="red"
                                   orientation="vertical"
                              />
                              <Box fontSize="13px">Blog</Box>
                              <Divider
                                   height="22px"
                                   borderColor="red"
                                   orientation="vertical"
                              />
                              <Box fontSize="13px">Delivery Info</Box>
                         </Flex>

                         <Grid
                              // className='login'

                              templateRows="repeat(2, 1fr)"
                              w="150px"
                              ml="50%"
                         >
                              <Link to="/login">
                                   <GridItem colSpan={1} justifySelf="right">
                                        LOGIN /
                                   </GridItem>
                              </Link>
                              <Link to="/SignUp">
                                   <GridItem colSpan={1}>SIGN UP</GridItem>
                              </Link>
                              <GridItem colSpan={2} color="red.500">
                                 {isAuth && name?name:"Welcome Guest"}
                              </GridItem>
                         </Grid>
                         
                         <Flex>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20%"
                            height="20%"
                            fill="currentColor"
                            className="cart"
                            viewBox="0 0 16 16"
                            color="rgb(249,141,41)"
                            >
                          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                          </svg>
                        <Text className="cart1" fontSize="10px">0</Text>
                        </Flex>
                        <div style={{cursor:"pointer"}}>
                              <BurgerMenu />
                         </div>
                    </Grid>

                    <Grid className="botnav" templateColumns="repeat(5,100px)">
                         <Popover><Recomandation/></Popover>
                         <Link to="/Clothing">Clothing</Link>
                         <div>
                              <Link to="/home/electronics">Electronics</Link>
                         </div>
                         <div>
                              <Link to="/Watchpage">Watches</Link>
                         </div>
                         <div>
                              <Link to="/Trending">Trending</Link>
                         </div>
                    </Grid>
                    
               </div>
               </Grid>
               </div>
               
               </div>
               
          
     );
};

          


export default Navbar;
