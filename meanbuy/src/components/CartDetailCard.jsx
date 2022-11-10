import {
     Box,
     Grid,
     Text,
     GridItem,
     Input,
     Button,
     Image,
} from "@chakra-ui/react";
import React from "react";

const CartDetailCard = () => {
     return (
          <Box textAlign="left" padding="10px 50px">
               <Grid templateColumns="repeat(2, 1fr)" gap={2} w="full">
                    <Text fontSize={"20px"} as={"b"}>
                         Delivery Address
                    </Text>

                    <GridItem pl="10px" mt={10} colSpan="2">
                         <Text fontSize="15" as="b">
                              1 x Military Fashion Watch - Black
                         </Text>
                         <Text mt="5px"> Dilivery Date: December 7, 2022</Text>
                         <Text mt="5px">Price: Rs-3,499.00 </Text>
                    </GridItem>
                    <GridItem mt="3" colSpan={{ base: 2, md: 1 }}>
                         <Box borderBottom={"1px solid black"} w="550px">
                              <Text textAlign={"left"}>Edit Cart</Text>
                         </Box>
                    </GridItem>
               </Grid>
               <Box
                    borderRadius={"15px"}
                    h={"55px"}
                    alignItems="center"
                    mt={"10"}
                    bg="#FFF7F2"
               >
                    <Text textAlign="center" color="Tomato">
                         <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                              Congratulations!
                         </span>{" "}
                         You have saved Rs:5,500.00
                    </Text>
               </Box>
               <Box>
                    <Box display="flex" justifyContent="space-between">
                         <Text w="50">Sub Total </Text>:
                         <Text w="50" alignItems="flex-start">
                              {" "}
                              {"Rs-3,499.00"}
                         </Text>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                         <Text>Shipping Fees </Text>:<Text>Shipping Free</Text>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                         <Text>Custom/Import Duties, Taxes</Text>:
                         <Text color="tomato">Not Applicable!</Text>
                    </Box>

                    <Box display="flex" justifyContent="space-between">
                         <Text>COD Fee</Text>:<Text>: Rs-0</Text>
                    </Box>
                    <br />
                    <Text>Got a Promotional Code? Use below:</Text>
                    <Box display="flex">
                         <Input w="sm" placeholder="Promotional Code" />
                         <Button bg="#F7941D">Apply Code</Button>
                    </Box>
               </Box>
               <Box mt={"20px"} borderTop={"1px solid black"}>
                    <Box
                         color={"#FF6B00"}
                         display="flex"
                         justifyContent="space-between"
                         fontWeight={"bold"}
                         fontSize="15px"
                    >
                         <Text>Grand Total</Text>:
                         <Text>Rs-3,499.00/- (Inclusive of All Taxes)</Text>
                    </Box>

                    <Box display="flex">
                         <Text color={"brown"}>
                              {" "}
                              Or 3 interest free payments of{" "}
                              <span color="black">Rs-1166.34</span> with{" "}
                         </Text>
                         <Image
                              w="50px"
                              src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2020-03/simpl.jpg"
                              alt="Simpl Pay"
                         />
                    </Box>

                    <Box display="flex" justifyContent="space-around">
                         <Text fontSize={"13px"}>
                              Get up to Rs-500.00 OFF on your First Time Prepaid
                              Order (COD Excluded) with coupon{" "}
                         </Text>
                         <Text color="#F7941D">PREPAID</Text>
                    </Box>
                    <Box>
                         <Image src="imglg.jpg" />
                         <Text></Text>
                    </Box>
               </Box>
          </Box>
     );
};

export default CartDetailCard;
