import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Button, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authgetData } from "../redux/utilies/authLocalData";

let newDate = new Date();
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
let currentDate = date + "/" + month + "/" + year;
let orderNumber = Math.random();
const DeliveryDetails = () => {
     const [priceDetails, setPriceDetails] = useState(null);
     const [address, setAddress] = useState(null);
     const [cardNumber, setCardNumber] = useState(null);
     const navigate = useNavigate();
     useEffect(() => {
          let temp1 = authgetData("finalPrice");
          setPriceDetails(temp1);
          let temp2 = authgetData("address");
          setAddress(temp2);
          let temp3 = authgetData("cardNumber");
          setCardNumber(temp3);
     }, []);
     const handleClick = () => {
          navigate("/thankyou");
     };
     return (
          <Box
               p={2}
               display={"flex"}
               justifyContent="space-between"
               width={"60%"}
               margin="auto"
               mt="150px"
          >
               <Box
                    mt={10}
                    w={"350px"}
                    h={"600px"}
                    p={5}
                    boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
               >
                    <Box p={5} borderBottom={"1px solid #ccc"}>
                         {" "}
                         Overview
                    </Box>

                    <Box p={5} borderBottom={"1px solid #ccc"}>
                         <Text height={"25px"} textAlign={"left"} color="#ccc">
                              {" "}
                              ORDERS
                         </Text>
                         <Box
                              display={"flex"}
                              flexDirection={"column"}
                              alignItems="flex-start"
                         >
                              <Text
                                   height={"55px"}
                                   textAlign={"left"}
                                   color={"teal.400"}
                                   fontWeight={"semibold"}
                              >
                                   {" "}
                                   Orders & Returns
                              </Text>{" "}
                         </Box>
                    </Box>

                    <Box p={5} borderBottom={"1px solid #ccc"}>
                         <Text height={"25px"} textAlign={"left"} color="#ccc">
                              {" "}
                              CREDITS
                         </Text>
                         <Box
                              display={"flex"}
                              flexDirection={"column"}
                              alignItems="flex-start"
                         >
                              <Text>Coupons</Text>
                              <Text>HappyCart Cards</Text>
                              <Text>HappyCash</Text>
                         </Box>
                    </Box>
                    <Box p={5} borderBottom={"1px solid #ccc"} mt={10}>
                         <Text height={"25px"} textAlign={"left"} color="#ccc">
                              {" "}
                              ACCOUNT
                         </Text>
                         <Box
                              mt={3}
                              display={"flex"}
                              flexDirection={"column"}
                              alignItems="flex-start"
                         >
                              <Text>Profile</Text>
                              <Text>Saved Cards</Text>
                              <Text>Addresses</Text>
                              <Text>HappyCart Insider</Text>
                         </Box>
                    </Box>
               </Box>
               <Box
                    mt={10}
                    p={2}
                    border={"1px solid green"}
                    w={"100%"}
                    h={"600px"}
                    display="flex"
                    flexDirection={"column"}
               >
                    <Box p={5} borderBottom={"1px solid #ccc"}>
                         <Text height={"25px"} textAlign={"left"} color="#ccc">
                              {" "}
                              Placed On: {currentDate}
                         </Text>
                         <Box
                              display={"flex"}
                              flexDirection={"column"}
                              alignItems="flex-start"
                         >
                              <Text>Order No: {orderNumber}</Text>
                              <Text>Price Details: ₹ {priceDetails}</Text>
                         </Box>
                    </Box>
                    <Box p={5} borderBottom={"1px solid #ccc"}>
                         <Text height={"25px"} textAlign={"left"} color="#ccc">
                              {" "}
                              Update sent to:{""}
                         </Text>
                         <Box
                              display={"flex"}
                              flexDirection={"column"}
                              alignItems="flex-start"
                         >
                              <Text>
                                   <PhoneIcon /> {address?.phone}
                              </Text>
                              <Text>
                                   <EmailIcon /> {address?.email}
                              </Text>
                         </Box>
                    </Box>
                    <Box p={5} borderBottom={"1px solid #ccc"}>
                         <Text height={"25px"} textAlign={"left"} color="#ccc">
                              {" "}
                              Shipping Address:
                         </Text>
                         <Box
                              display={"flex"}
                              flexDirection={"column"}
                              alignItems="flex-start"
                         >
                              <Text>{address?.fullname}</Text>
                              <Text>
                                   {address?.address1} {address?.city}
                              </Text>

                              <Text>
                                   {address?.state}, {""}
                                   {address?.pincode}
                              </Text>
                         </Box>
                    </Box>
                    <Box p={5} borderBottom={"1px solid #ccc"}>
                         <Text height={"25px"} textAlign={"left"} color="#ccc">
                              {" "}
                              Payment Mode:
                         </Text>
                         <Box
                              display={"flex"}
                              flexDirection={"column"}
                              alignItems="flex-start"
                         >
                              <Text>By Card: {cardNumber}</Text>
                         </Box>
                    </Box>
                    <Box
                         display={"flex"}
                         flexDirection={"column"}
                         alignItems="flex-start"
                    >
                         <Button mt={10} ml={100} onClick={handleClick}>
                              Continue Shopping
                         </Button>
                    </Box>
               </Box>
          </Box>
     );
};

export default DeliveryDetails;
