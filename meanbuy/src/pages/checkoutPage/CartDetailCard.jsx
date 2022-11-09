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
          <Box border="3px solid black" textAlign="left" padding="10px 50px">
               <Grid templateColumns="repeat(2, 1fr)" gap={2} w="full">
                    {/* <Text as={"b"}>Delivery Address</Text> */}

                    <GridItem
                         pl="10px"
                         mt={10}
                         border="1px solid red"
                         colSpan="2"
                    >
                         {/* <Box w="550px" mt={"50px"} border="1px solid #ccc"> */}
                         {/* <Box style={{ textAlign: "left" }}> */}
                         <Text fontSize="15" as="b">
                              1 x Military Fashion Watch - Black
                         </Text>
                         <Text mt="5px"> Dilivery Date: December 7, 2022</Text>
                         <Text mt="5px">Price: Rs-3,499.00 </Text>
                         {/* </Box> */}
                         {/* </Box> */}
                    </GridItem>
                    <GridItem mt="3" colSpan={{ base: 2, md: 1 }}>
                         <Box borderBottom={"1px solid black"} w="550px">
                              <Text textAlign={"left"}>Edit Cart</Text>
                         </Box>
                    </GridItem>
               </Grid>
               <Box
                    border-radius={"10px"}
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
                    <Box></Box>
                    <Text>Shipping Fees : {"Shipping Free"}</Text>
                    <Text>
                         Custom/Import Duties, Taxes :{" "}
                         {<span color="tomato">Not Applicable!</span>}
                    </Text>
                    <Text>COD Fee: {"Rs-0"}</Text>
                    <Text>Got a Promotional Code? Use below:</Text>
                    <Box display="flex">
                         <Input w="sm" placeholder="Promotional Code" />
                         <Button bg="#F7941D">Apply Code</Button>
                    </Box>
               </Box>
               <Box mt={"50px"}>
                    <Text>
                         Grand Total{"      "}
                         <span>:Rs-3,499.00/- (Inclusive of All Taxes)</span>
                    </Text>
                    <Text>
                         {" "}
                         Or 3 interest free payments of Rs-1166.34 with{" "}
                         <Image
                              w="50px"
                              src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2020-03/simpl.jpg"
                              alt="Simpl Pay"
                         />
                    </Text>
                    <Text>
                         Get up to Rs-500.00 OFF on your First Time Prepaid
                         Order (COD Excluded) with coupon{" "}
                         <span color="#F7941D">PREPAID</span>
                    </Text>
               </Box>
          </Box>
     );
};

export default CartDetailCard;
