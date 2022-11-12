import React from "react";
import { Link } from "react-router-dom";
import { BurgerMenu } from "./BurgerMenu";
import {
     Grid,
     InputRightElement,
     Input,
     InputGroup,
     GridItem,
     Flex,
     Box,
     Divider,
} from "@chakra-ui/react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import { TbSearch } from "react-icons/tb";
import { useSelector } from "react-redux";
const Navbar = () => {
     const name = useSelector((store) => store.AuthReducer.userDetails.name)
     return (
          <div>
               <div className="main">
                    <Grid
                         className="topnav"
                         templateColumns="repeat(5,1fr)"
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
                              <Box fontSize="13px">Feedback</Box>
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
                                 {name && name?name:"Welcome Guest"}
                              </GridItem>
                         </Grid>
                         <div style={{cursor:"pointer"}}>
                              <BurgerMenu />
                         </div>
                    </Grid>

                    <Grid className="botnav" templateColumns="repeat(5,100px)">
                         {/* <div>Categories</div> */}
                         <Link to="/Clothing">Clothing</Link>
                         <div>
                              <Link to="/home/electronics">Electronics</Link>
                         </div>
                         <div>
                              <Link to="/Shop">Shop by Brand</Link>
                         </div>
                         <div>
                              <Link to="/Trending">Trending</Link>
                         </div>
                    </Grid>
               </div>
          </div>
     );
};

export default Navbar;
