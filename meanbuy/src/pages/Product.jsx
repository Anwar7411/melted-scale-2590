import { Icon, StarIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Spacer,
  Text,
  VStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { SliderSlick } from "../components/SliderSlick";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSnapchat } from "react-icons/fa";
import { BiRupee } from "react-icons/bi";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { authgetData, saveCartData } from "../redux/utilies/authLocalData";

export const Product = () => {
  const location = useLocation();
  // const dispatch = useDispatch();
  const [prodData, setProdData] = useState({});

  const { pathname } = location;

  const { id } = useParams();

  const getData = () => {
    axios
      .get(`http://localhost:8080${pathname}`)
      .then((res) => {
        setProdData(res.data);
        // console.log(prodData);
      })
      .catch((e) => {
        console.log("Error: ", e);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleAddCart = () => {
    saveCartData("user_cart_items", prodData);
  };

  return (
    <Container maxW="container.xl" mb="80px">
      <Flex
        gap="50px"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
      >
        <Box w="37%" mt="40px">
          <SliderSlick images={prodData.images} />
        </Box>
        <Box w="60%" mt="40px">
          <VStack align="start">
            <Box>
              <Heading as="h3" size="lg" noOfLines={1} color="#455a64">
                {prodData.title}
              </Heading>
            </Box>
            <Box>
              <Flex alignItems="center">
                <Badge
                  variant="solid"
                  backgroundColor="#3cc101"
                  paddingLeft="12px"
                  paddingRight="12px"
                  borderRadius="5px"
                  mr="100px"
                >
                  {prodData.rating}
                  <StarIcon ml="5px" viewBox="0 2 24 24" />
                </Badge>
                <Link _hover={{ textDecoration: "none" }} mr="50px">
                  <Text
                    textDecoration="underline"
                    color="#f98d29"
                    fontSize={10}
                    fontWeight="bold"
                  >
                    WRITE A REVIEW
                  </Text>
                </Link>
                <Box display="flex" gap="8px">
                  <Box>
                    <Icon as={FaFacebookF} color="#3b5998 " w={3} h={3} />
                  </Box>
                  <Box>
                    <Icon as={AiOutlineTwitter} color="#1da1f2 " w={3} h={3} />
                  </Box>
                  <Box>
                    <Icon as={FaLinkedinIn} color="#4a7ea8  " w={3} h={3} />
                  </Box>
                  <Box>
                    <Icon as={IoLogoWhatsapp} color="#25d366 " w={3} h={3} />
                  </Box>
                  <Box>
                    <Icon as={FaSnapchat} color="#fffc00  " w={3} h={3} />
                  </Box>
                </Box>
              </Flex>
            </Box>
            <Box>
              <HStack spacing="80px">
                <Box>
                  <Text color="#f98d29" fontSize="32px" fontWeight="bold">
                    {/* <Icon as={BiRupee} viewBox="0 0 24 24" /> */}₹
                    {prodData.price}
                  </Text>
                </Box>
                <Box>
                  <Text
                    as="s"
                    ml="-50px"
                    color="gray"
                    fontWeight="semibold"
                  ></Text>
                </Box>
                <Box>
                  <Text color="#008a00" fontSize="14px">
                    UP TO 68% OFF
                  </Text>
                </Box>
              </HStack>
              <HStack spacing="2px">
                <Text
                  color="#008a00"
                  as="b"
                  textDecoration="underline"
                  fontSize="12px"
                >
                  CASH ON DELIVERY
                </Text>
                <Text color="#008a00" as="u">
                  available on orders between
                </Text>
                <Text color="#008a00" as="u">
                  ₹999 and ₹10,000
                </Text>
              </HStack>
              <HStack spacing="3px" mt="8px">
                <Text fontSize="14px">Get up to ₹500 OFF with coupon code</Text>
                <Text as="b" fontSize="12px" textDecoration="underline">
                  PREPAID
                </Text>
              </HStack>
              <HStack spacing="3px" mt="8px">
                <Text fontSize="14px">3 interest free payments with</Text>
                <Box w="50px">
                  <Image src="https://d64lkarmo2mrq.cloudfront.net/icons/89165818.png" />
                </Box>
              </HStack>
              <HStack spacing="3px" mt="8px">
                <Text>Availability:</Text>
                <Text color="#008a00">In Stock</Text>
              </HStack>
            </Box>
            <Divider border="2px solid " borderColor="#f3921f" />
            <Box>
              <Text color="#f3921f" as="u">
                Wait & save
              </Text>
            </Box>
            <Box>
              <Text fontSize="14px">
                Choose from any of the Delivery dates below and Save Big! In
                general, a later
              </Text>
              <Text fontSize="14px">Delivery date means greater Savings!</Text>
            </Box>
            <Box>
              <Text color="#f3921f" fontWeight="bold">
                1. Please choose your preferences
              </Text>
            </Box>
            <HStack spacing="50px" marginBottom="50px">
              <Text as="b" color="#455a64">
                Select Quantity:
              </Text>
              <NumberInput size="sm" maxW={24} defaultValue={1} min={1}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </HStack>
            <HStack pt="30px">
              <Button
                colorScheme="orange"
                variant="outline"
                borderRadius="4px"
                pl={14}
                pr={14}
                onClick={handleAddCart}
              >
                ADD TO CART
              </Button>
              <Button
                colorScheme="orange"
                variant="solid"
                borderRadius="4px"
                pl={14}
                pr={14}
              >
                BUY NOW
              </Button>
            </HStack>
            <HStack pt="14px">
              <Text color="#455a64">Or 3 interest free payments of</Text>
              <Text as="b">₹{prodData.simplpay_amount}</Text>
              <Text>with</Text>
              <Box w="50px">
                <Image src="https://d64lkarmo2mrq.cloudfront.net/icons/89165818.png" />
              </Box>
            </HStack>
            <Divider border="2px solid " borderColor="#f3921f" />
            <Box>
              <Tabs variant="soft-rounded" colorScheme="orange">
                <TabList>
                  <Tab>Product Description</Tab>
                  <Tab>Product Features</Tab>
                  <Tab>Shipping & Return Details</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <Text color="#455a64" as="b" fontSize="14px">
                      Product Summary
                    </Text>
                    <Text
                      color="#455a64"
                      mt="10px"
                      fontSize="2xl"
                      fontWeight="semibold"
                      mb="16px"
                    >
                      {prodData.title}
                    </Text>
                    <Text color="#455a64" as="b" fontSize="14px">
                      Product Description:
                    </Text>
                    {prodData.description &&
                      prodData.description?.map((desc) => {
                        return (
                          <Text
                            wordBreak="break-all"
                            mt="10px"
                            color="#455a64"
                            fontSize="14px"
                          >
                            {desc}
                          </Text>
                        );
                      })}
                    {/* <Text
                      wordBreak="break-all"
                      mt="10px"
                      color="#455a64"
                      fontSize="14px"
                    >
                      lskgfjgfjgfjgfjgfjg
                      fjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjg
                      fjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfj
                      gfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfjgfj
                    </Text> */}
                  </TabPanel>
                  <TabPanel>
                    <UnorderedList color="#455a64">
                      {prodData.features &&
                        prodData.features?.map((feature) => {
                          return <ListItem>{feature}</ListItem>;
                        })}
                      {/* <ListItem>Lorem ipsum dolor sit amet</ListItem>
                      <ListItem>Consectetur adipiscing elit</ListItem>
                      <ListItem>Integer molestie lorem at massa</ListItem>
                      <ListItem>Facilisis in pretium nisl aliquet</ListItem> */}
                    </UnorderedList>
                  </TabPanel>
                  <TabPanel>
                    <Text as="b" color="#455a64">
                      Wait & Save
                    </Text>
                    <Text mt="10px" color="#455a64" mb="10px">
                      Select the best price & delivery date and save the most.
                      Have the best price all year round. No need to wait for
                      sale and discount season. Get the best price and delivery
                      directly from the factory. In general, a later Delivery
                      Date means greater Savings!
                    </Text>
                    <Text as="b" color="#455a64">
                      Returns & Exchanges
                    </Text>
                    <Text color="#455a64" mt="10px">
                      Because we offer the lowest prices we cannot accept
                      returns from Buyer's Remorse. If you're returning because
                      of a faulty product, we'll get to work to get you a
                      replacement product asap or a refund when out of stock.
                    </Text>
                    <Text color="#455a64" mt="10px">
                      * Disclaimer: Although we work very hard to get your order
                      delivered on time, sometimes things happen that are
                      outside of our control so your shipment might get delayed.
                      When this happens you will be informed as soon as
                      possible.
                    </Text>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};
