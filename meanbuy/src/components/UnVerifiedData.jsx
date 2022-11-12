import {
     Box,
     Button,
     Input,
     Select,
     Table,
     TableContainer,
     Tbody,
     Td,
     Text,
     Th,
     Thead,
     Tr,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
     getProductFailure,
     getProductRequest,
     getProductSuccess,
} from "../redux/dashboardReducer/action";

const UnVerifiedData = () => {
     const { products } = useSelector((state) => state.DashReducer);
     console.log("products:", products);
     const dispatch = useDispatch();
     const getData = () => {
          dispatch(getProductRequest());
          axios.get("https://json-mooker-server-abc.herokuapp.com/dashboard")
               .then((res) => {
                    console.log("res:", res.data);
                    dispatch(getProductSuccess(res.data));
               })
               .catch((e) => dispatch(getProductFailure(e)));
     };

     useEffect(() => {
          getData();
     }, []);
     return (
          <Box
               p={10}
               display="flex"
               flexDirection={"column"}
               alignItems={"flex-start"}
               backgroundColor="#F7F7F7"
          >
               <Box width={"100%"}>
                    <Text
                         borderBottom={"1px solid #ccc "}
                         fontSize={30}
                         textAlign={"left"}
                         color={"#F48127"}
                    >
                         (Un)verified Products
                    </Text>
                    <Text mt={10} fontSize="xl" textAlign={"left"}>
                         The products below still need to be verified by the
                         HappyCart.in staff.
                    </Text>
               </Box>
               <Box
                    display={"flex"}
                    alignItems="center"
                    justifyContent="space-between"
                    w={"100%"}
                    h={"50px"}
                    mt={10}
               >
                    <Box h={"50px"}>
                         <Box
                              w={"200px"}
                              display={"flex"}
                              justifyContent="space-around"
                         >
                              <Text textAlign={"center"}>Show</Text>
                              {/* <Input w={"100px"} h={"30px"} /> */}
                              <Box width={"200px"}>
                                   <Select
                                        border={"1px solid #ccc"}
                                        borderRadius={"none"}
                                        width={"100px"}
                                        h={30}
                                   >
                                        <option value="100">100</option>
                                        <option value="Shipping Only">
                                             25
                                        </option>
                                        <option value="In store pickup only">
                                             50
                                        </option>
                                        <option value="10">10</option>
                                   </Select>
                              </Box>
                              <Text>entries</Text>
                         </Box>
                    </Box>
                    <Box
                         w={"200px"}
                         display={"flex"}
                         justifyContent="space-around"
                    >
                         <Text>Search:</Text>
                         <Input
                              border={"1px solid #ccc"}
                              borderRadius={"none"}
                         />
                    </Box>
               </Box>

               <Box
                    color={"#73879C"}
                    width={"100%"}
                    boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                    alignItems={"center"}
                    padding="10px"
                    backgroundColor={"#FFFFFF"}
               >
                    <TableContainer>
                         <Table variant="simple">
                              <Thead>
                                   <Tr height="70px" border={"1px solid #ccc"}>
                                        <Th
                                             display={"flex"}
                                             flexDirection={"column"}
                                        >
                                             Product ID <span>mb</span>
                                        </Th>
                                        <Th border={"1px solid #ccc"}>SKU</Th>
                                        <Th border={"1px solid #ccc"}>Title</Th>
                                        <Th border={"1px solid #ccc"}>
                                             Listing Date
                                        </Th>
                                        <Th border={"1px solid #ccc"}></Th>
                                        <Th border={"1px solid #ccc"}>Color</Th>
                                        <Th border={"1px solid #ccc"}>Size</Th>
                                        <Th border={"1px solid #ccc"}>
                                             Stock Qty
                                        </Th>
                                   </Tr>
                              </Thead>
                              <Tbody backgroundColor={"#F9F9F9"}>
                                   {products?.map((item) => {
                                        return (
                                             <Tr key={item.id}>
                                                  <Td border={"1px solid #ccc"}>
                                                       {item.id}
                                                  </Td>
                                                  <Td border={"1px solid #ccc"}>
                                                       {item.sku}
                                                  </Td>
                                                  <Td border={"1px solid #ccc"}>
                                                       {item.title}
                                                  </Td>
                                                  <Td border={"1px solid #ccc"}>
                                                       {item.date}
                                                  </Td>
                                                  <Td
                                                       border={"1px solid #ccc"}
                                                  ></Td>
                                                  <Td border={"1px solid #ccc"}>
                                                       {item.color}
                                                  </Td>
                                                  <Td border={"1px solid #ccc"}>
                                                       {item.size}
                                                  </Td>
                                                  <Td border={"1px solid #ccc"}>
                                                       {item.stock}
                                                  </Td>
                                             </Tr>
                                        );
                                   })}
                              </Tbody>
                         </Table>
                    </TableContainer>
                    <Box
                         display={"flex"}
                         justifyContent="space-between"
                         mt={"5"}
                    >
                         <Box>
                              <Text>Showing 1 to 1 of 1 entries</Text>
                         </Box>
                         <Box>
                              <Button borderRadius={"none"}>Previous</Button>
                              <Button borderRadius={"none"}>1</Button>
                              <Button borderRadius={"none"}>Next</Button>
                         </Box>
                    </Box>
                    <Text
                         mt={10}
                         color={"black"}
                         fontSize="18px"
                         fontWeight={"medium"}
                         textAlign={"left"}
                    >
                         You currently don't have any products in line to be
                         listed on MeanBuy.in.
                    </Text>
               </Box>

               <Box mt={5}>All rights reserved © HappyCart.in</Box>
          </Box>
     );
};

export default UnVerifiedData;
{
     /* <Box
     
     display={"flex"}
     justifyContent="space-between"
     h="50px"
>
     <Box mt={20} display={"flex"}>
          <Box>Show</Box>
          <Box>
               <Input h={"40px"} />
          </Box>
          <Box>entries</Box>
     </Box>
     <Box display={"flex"}>
          <Text>Search:</Text>
          <Input />
     </Box>
</Box>; */
}
