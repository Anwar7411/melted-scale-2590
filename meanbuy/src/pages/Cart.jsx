import {
  Box,
  Container,
  Divider,
  Grid,
  GridItem,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { CartCheckoutDetailsCard } from "../components/CartCheckoutDetailsCard";
import { CartDetailsCard } from "../components/CartDetailsCard";

export const Cart = () => {
  const [cartPageData, setCartPageData] = useState([]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("user_cart_items")) || [];
    setCartPageData(data);
    // console.log(data);
  }, []);

  return (
    <Box pl="80px" pr="80px" pt="20px" mt="150px" mb="40px">
      <Container  maxW="container.xl">
        <HStack spacing={4}>
          <Box
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            w="75%"
          
          >
            <Box backgroundColor="#f2f2f2" pt="10px" pb="10px">
              <Grid templateColumns="21% 50% 13% 13%" gap={2}>
                <GridItem w="100%" h="10"></GridItem>
                <GridItem
                  w="100%"
                  h="10"
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Text as="b" color="#455a64">
                    Product Details
                  </Text>
                </GridItem>
                <GridItem
                  w="100%"
                  h="10"
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Text as="b" color="#455a64">
                    Our Price
                  </Text>
                </GridItem>
                <GridItem
                  w="100%"
                  h="10"
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Text as="b" color="#455a64">
                    Your Price
                  </Text>
                </GridItem>
              </Grid>
            </Box>
            {cartPageData &&
              cartPageData?.map((item) => {
                return <CartDetailsCard {...item} />;
              })}
            {/* <Divider mt="16px" /> */}
          </Box>
          <Box w="25%" h="100vh">
            <CartCheckoutDetailsCard cartArray={cartPageData} />
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};
