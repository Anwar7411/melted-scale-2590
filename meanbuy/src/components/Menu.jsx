import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import { ImCopy } from "react-icons/im";
import { GoGraph } from "react-icons/go";
import { MdSettingsOverscan } from "react-icons/md";
import {
     Accordion,
     AccordionItem,
     AccordionButton,
     AccordionPanel,
     AccordionIcon,
     Text,
} from "@chakra-ui/react";
import { WarningTwoIcon } from "@chakra-ui/icons";
import logo from "../Assets/logo.png";

const Menu = () => {
     return (
          <Box
               style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "250px",
                    backgroundColor: "#2A3F54",
                    height: "300vh",
               }}
          >
               <Box>
                    <img style={{ width: "250px",height:"100px"}} src={logo} alt="" />
               </Box>
               <Box
                    style={{
                         display: "flex",
                         marginTop: "10px",
                         alignItems: "center",
                         justifyContent: "space-between",
                    }}
               >
                    <Box>
                         <img
                              style={{ width: "50px", borderRadius: "50%" }}
                              src="https://merchant.meanbuy.in/assets/Merchant/images/profiles/india.jpg"
                              alt="Welcom Admin"
                         />
                    </Box>
                    <Box>
                         <Text marginRight={"50px"} color="white">
                              Welcome
                         </Text>
                         <Text color="white">Admin</Text>
                    </Box>
               </Box>
               <Box>
                    <Accordion defaultIndex={[0]} allowMultiple>
                         <AccordionItem>
                              <h2>
                                   <AccordionButton
                                        backgroundColor={"#2A3F54"}
                                        color={"tomato"}
                                   >
                                        <Box flex="1" textAlign="left">
                                             <WarningTwoIcon /> Importent
                                             Information
                                        </Box>
                                        <AccordionIcon />
                                   </AccordionButton>
                              </h2>
                              <AccordionPanel
                                   pb={4}
                                   textAlign="left"
                                   color={"white"}
                                   display={"flex"}
                                   flexDirection={"column"}
                              >
                                   <Link
                                        textDecoration="none"
                                        color={"white"}
                                        href="#"
                                   >
                                        Additional Information
                                   </Link>
                                   <Link
                                        textDecoration="none"
                                        color={"white"}
                                        href="#"
                                   >
                                        Package Pickup Details
                                   </Link>
                                   <Link
                                        textDecoration="none"
                                        color={"white"}
                                        href="#"
                                   >
                                        Shipping Configuration
                                   </Link>
                              </AccordionPanel>
                         </AccordionItem>

                         <AccordionItem>
                              <h2>
                                   <AccordionButton
                                        backgroundColor={"#2A3F54"}
                                        color={"white"}
                                   >
                                        <Box flex="1" textAlign="left">
                                             <WarningTwoIcon /> Product Online
                                             Status
                                        </Box>
                                        <AccordionIcon />
                                   </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                   <Link
                                        textDecoration="none"
                                        color={"white"}
                                        href="#"
                                   >
                                        View/Edit Product Online Status
                                   </Link>
                              </AccordionPanel>
                         </AccordionItem>
                         <Text color={"white"} textAlign="left">
                              General
                         </Text>
                         <AccordionItem>
                              <h2>
                                   <AccordionButton
                                        backgroundColor={"#2A3F54"}
                                        color={"white"}
                                   >
                                        <Box flex="1" textAlign="left">
                                             Orders
                                        </Box>
                                        <AccordionIcon />
                                   </AccordionButton>
                              </h2>
                              <AccordionPanel
                                   pb={4}
                                   display={"flex"}
                                   flexDirection={"column"}
                                   alignItems="flex-start"
                              >
                                   <Link
                                        textDecoration="none"
                                        color={"white"}
                                        href="#"
                                   >
                                        Grocery Orders
                                   </Link>
                                   <Link
                                        textDecoration="none"
                                        color={"white"}
                                        href="#"
                                   >
                                        Shipping Orders
                                   </Link>
                                   <Link
                                        textDecoration="none"
                                        color={"white"}
                                        href="#"
                                   >
                                        In Store Pickup Orders
                                   </Link>
                                   <Link
                                        textDecoration="none"
                                        color={"white"}
                                        href="#"
                                   >
                                        Return Orders
                                   </Link>
                              </AccordionPanel>
                         </AccordionItem>
                         <AccordionItem>
                              <h2>
                                   <AccordionButton
                                        backgroundColor={"#2A3F54"}
                                        color={"white"}
                                   >
                                        <Box
                                             w="100%"
                                             display={"flex"}
                                             alignItems={"center"}
                                             justifyContent={"space-around"}
                                        >
                                             <ImCopy /> Management Tools
                                        </Box>
                                        <AccordionIcon />
                                   </AccordionButton>
                              </h2>
                              <AccordionPanel
                                   pb={4}
                                   color={"white"}
                                   display={"flex"}
                                   flexDirection={"column"}
                                   textAlign={"left"}
                              >
                                   <Link
                                        textDecoration="none"
                                        color={"white"}
                                        href="#"
                                   >
                                        Product Management (.CSV File)
                                   </Link>
                                   <Link
                                        textDecoration="none"
                                        color={"white"}
                                        to="/productUploadForm"
                                   >
                                        Product Upload (Online Form) (.CSV File)
                                   </Link>
                                   <Link
                                        textDecoration="none"
                                        color={"white"}
                                        href="#"
                                   >
                                        Inventory Management
                                   </Link>
                                   <Link
                                        textDecoration="none"
                                        color={"white"}
                                        href="#"
                                   >
                                        In Store Picup - Store Locations
                                   </Link>
                                   <Link
                                        textDecoration="none"
                                        color={"white"}
                                        href="#"
                                   >
                                        In Store Pickup- Product Management
                                   </Link>
                                   <Link
                                        textDecoration="none"
                                        color={"white"}
                                        href="#"
                                   >
                                        Scheduled Delivery -Product Management
                                   </Link>
                                   <Link
                                        textDecoration="none"
                                        color={"white"}
                                        to="/admindashboard"
                                   >
                                        View (Un)verified Products
                                   </Link>
                              </AccordionPanel>
                         </AccordionItem>
                         <AccordionItem>
                              <h2>
                                   <AccordionButton
                                        backgroundColor={"#2A3F54"}
                                        color={"white"}
                                   >
                                        <Box
                                             w="100%"
                                             display={"flex"}
                                             alignItems={"center"}
                                             justifyContent={"space-evenly"}
                                        >
                                             <GoGraph /> Data
                                        </Box>
                                        <AccordionIcon />
                                   </AccordionButton>
                              </h2>
                              <AccordionPanel
                                   pb={4}
                                   color={"white"}
                                   display={"flex"}
                                   flexDirection={"column"}
                                   textAlign={"left"}
                              >
                                   <Link
                                        textDecoration="none"
                                        color={"white"}
                                        href="#"
                                   >
                                        Dashboard
                                   </Link>
                                   <Link
                                        textDecoration="none"
                                        color={"white"}
                                        href="#"
                                   >
                                        Sales Statistics
                                   </Link>
                                   <Link
                                        textDecoration="none"
                                        color={"white"}
                                        href="#"
                                   >
                                        View Earnings
                                   </Link>
                              </AccordionPanel>
                         </AccordionItem>
                         <Text color={"white"} textAlign="left">
                              ADDITIONAL PAGES
                         </Text>
                         <AccordionItem>
                              <h2>
                                   <AccordionButton
                                        backgroundColor={"#2A3F54"}
                                        color={"white"}
                                   >
                                        <Box
                                             w="100%"
                                             display={"flex"}
                                             alignItems={"center"}
                                             justifyContent={"space-around"}
                                        >
                                             <MdSettingsOverscan /> General
                                             Information
                                        </Box>
                                        <AccordionIcon />
                                   </AccordionButton>
                              </h2>
                              <AccordionPanel
                                   pb={4}
                                   color={"white"}
                                   display={"flex"}
                                   flexDirection={"column"}
                                   textAlign={"left"}
                              >
                                   <Link
                                        textDecoration="none"
                                        color={"white"}
                                        href="#"
                                   >
                                        Fee Calculator
                                   </Link>
                                   <Link
                                        textDecoration="none"
                                        color={"white"}
                                        href="#"
                                   >
                                        Contract
                                   </Link>
                              </AccordionPanel>
                         </AccordionItem>
                    </Accordion>
               </Box>
          </Box>
     );
};

export default Menu;
