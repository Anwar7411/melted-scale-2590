import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

export const CartCheckoutDetailsCard = (cartArray) => {
  console.log(cartArray);
  return (
    <Box
      w="260px"
      boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
      margin="auto"
      mt="50px"
      pb="30px"
    >
      <Box backgroundColor="#f2f2f2">
        <Center h="60px">
          <Text as="b" color="#455a64">
            Checkout Details
          </Text>
        </Center>
      </Box>

      <Box mt="10px" w="100%" pl="10px">
        <VStack spacing={0} align="start">
          <HStack>
            <Text as="b" color="#455a64">
              Total Items:
            </Text>
            <Text as="b" color="#ac2529">
              {cartArray.cartArray.length}
            </Text>
          </HStack>
          <HStack>
            <Text as="b" color="#455a64">
              Sub Total:
            </Text>
            <Text as="b" color="#4570c2">
              {cartArray.cartArray.reduce((pv, cv) => pv + Number(cv.price), 0)}
            </Text>
          </HStack>
          <Text as="b" color="#0e9da8">
            Shipping: Free
          </Text>
        </VStack>
        <Divider pt="16px" />
        <VStack align="start" pt="16px">
          <Text as="b" color="#455a64">
            Cart Total:
          </Text>
          <Text color="gray" fontSize="16px">
            Or 3 interest free payments of
          </Text>
          <HStack pb="20px">
            <Text as="b">₹2999.00</Text>
            <Text color="gray" fontSize="16px">
              with
            </Text>
            <Box w="50px">
              <Image src="https://d64lkarmo2mrq.cloudfront.net/icons/89165818.png" />
            </Box>
          </HStack>
          <Button
            colorScheme="orange"
            variant="solid"
            borderRadius="3px"
            pl={14}
            pr={14}
            w="240px"
          >
            BUY NOW
          </Button>
        </VStack>
      </Box>
      <Box></Box>
    </Box>
  );
};
