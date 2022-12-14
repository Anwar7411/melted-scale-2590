import {
     Drawer,
     Button,
     DrawerOverlay,
     DrawerContent,
     useDisclosure,
     DrawerCloseButton,
     DrawerHeader,
     DrawerBody,
     Stack,
     Box,
     FormLabel,
     Heading,
     Flex,
} from "@chakra-ui/react";
import React from "react";
import "./BurgerMenu.css";
// import { Icon } from "@chakra-ui/react"
import { GiShoppingBag, GiHamburgerMenu } from "react-icons/gi";
import { BsArrowReturnLeft } from "react-icons/bs";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiFillProfile } from "react-icons/ai";
import { MdCheckBox } from "react-icons/md";
import { TbLetterB } from "react-icons/tb";
import { CgMenuGridO } from "react-icons/cg";
import { SiBlogger } from "react-icons/si";
import { TbLogout } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/authreducer/action";
import { Link, useNavigate } from "react-router-dom";

function BurgerMenu() {
     const dispatch = useDispatch();
     const emaillocal = useSelector(
          (store) => store.AuthReducer.userDetails.email
     );
     const isAuth=useSelector((store) => store.AuthReducer.isAuth)
     const name = useSelector((store) => store.AuthReducer.userDetails.name);
     const { isOpen, onOpen, onClose } = useDisclosure();
     const firstField = React.useRef();
     const navigate = useNavigate();
     const handleLogout = () => {
          dispatch(logOut());
          navigate("/login");
     };

     return (
          <>
               <div className="burgermenu">
                    <GiHamburgerMenu colorScheme="teal" onClick={onOpen} />
               </div>

               <Drawer
                    isOpen={isOpen}
                    placement="right"
                    initialFocusRef={firstField}
                    onClose={onClose}
               >
                    <DrawerOverlay />
                    <DrawerContent>
                         <DrawerCloseButton />
                         <DrawerHeader borderBottomWidth="1px">
                              {isAuth && name?name:"User Account"}
                         </DrawerHeader>

                         <DrawerBody>
                              <Stack spacing="24px">
                                   <Box>
                                        <FormLabel htmlFor="username">
                                             {isAuth && emaillocal}
                                        </FormLabel>
                                   </Box>

                                   <Flex alignItems="center" gap="5px">
                                        <GiShoppingBag color="red" />
                                        <Heading size="md">
                                             <Link to="/checkout">
                                                  {" "}
                                                  My Orders
                                             </Link>
                                        </Heading>
                                   </Flex>

                                   <Flex alignItems="center" gap="5px">
                                        <BsArrowReturnLeft color="red" />
                                        <Heading size="md">Returns</Heading>
                                   </Flex>
                                   <hr />

                                   <Box>
                                        <Flex alignItems="center" gap="5px">
                                             <BiMessageSquareDetail color="red" />
                                             <Heading size="md">
                                                  Support
                                             </Heading>
                                        </Flex>

                                        <Flex
                                             mt="5%"
                                             alignItems="center"
                                             gap="5px"
                                        >
                                             <AiFillProfile color="red" />
                                             <Heading size="md">
                                                  Terms of use
                                             </Heading>
                                        </Flex>

                                        <Flex
                                             mt="5%"
                                             alignItems="center"
                                             gap="5px"
                                        >
                                             <MdCheckBox color="red" />
                                             <Heading size="md">
                                                  Policies
                                             </Heading>
                                        </Flex>

                                        <Flex
                                             mt="5%"
                                             alignItems="center"
                                             gap="5px"
                                        >
                                             <TbLetterB color="red" />
                                             <Heading size="md">
                                                  About HappyKart
                                             </Heading>
                                        </Flex>
                                   </Box>
                                   <hr />
                                   <Flex mt="5%" alignItems="center" gap="5px">
                                        <CgMenuGridO color="red" />
                                        <Heading size="md">
                                             Trending items
                                        </Heading>
                                   </Flex>
                                   <hr />
                                   <Flex mt="5%" alignItems="center" gap="5px">
                                        <SiBlogger color="red" />
                                        <Heading size="md">Blog</Heading>
                                   </Flex>

                                   <hr />
                                   <Flex
                                        mt="5%"
                                        alignItems="center"
                                        gap="5px"
                                        onClick={handleLogout}
                                        cursor={"pointer"}
                                   >
                                        <TbLogout color="red" />
                                        <Heading size="md">Logout</Heading>
                                   </Flex>
                              </Stack>
                         </DrawerBody>
                    </DrawerContent>
               </Drawer>
          </>
     );
}
export { BurgerMenu };
