import {
  Box,
  Container,
  Grid,
  GridItem,
  HStack,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  VStack,
  IconButton,
  Divider,
} from "@chakra-ui/react";
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";

export const CartDetailsCard = ({
  id,
  title,
  strikeOff,
  price,
  images,
  color,
}) => {
  return (
    <Container maxW="container.xl">
      <Box
        //   border="1px solid blue"
        w="74%"
        h="180px"
      >
        <Grid
          templateColumns="21% 50% 13% 13%"
          gap={2}
          // border="1px solid green"
        >
          <GridItem
            w="100%"
            //   h="10"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box w="100px">
              <Image src={images[0]} />
            </Box>
          </GridItem>
          <GridItem
            w="100%"
            //   h="10"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
          >
            <Text as="b" mt="5px">
              {title}
            </Text>
            <Text color="gray" mt="5px">
              COLOR: {color}
            </Text>
            <HStack>
              <Text color="gray" mt="5px">
                SELECT QUANTITY:
              </Text>
              <NumberInput
                size="xs"
                maxW={16}
                defaultValue={1}
                min={1}
                mt="5px"
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </HStack>
            <HStack>
              <Text as="b" fontSize="14px" color="#0e9da8" mt="5px">
                <CheckIcon /> FREE DELIVERY
              </Text>
            </HStack>
            <HStack>
              <Text as="b" color="#4570c2" fontSize="14px" mt="5px">
                DELIVERY DATE:{" "}
              </Text>
              <Text as="b" color="#455a64" fontSize="14px" mt="5px">
                DECEMBER 11, 2022
              </Text>
            </HStack>
            <DeleteIcon mt="8px" />
            {/* <IconButton
            aria-label="Delete cart item"
            icon={<DeleteIcon />}
            pl="0"
            pr="0"
          /> */}
          </GridItem>
          <GridItem
            w="100%"
            //   h="10"
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Text as="s" color="#6d7272 ">
              ₹{strikeOff}
            </Text>
          </GridItem>
          <GridItem
            w="100%"
            //   h="10"
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Text color="#006400  ">₹{price}</Text>
          </GridItem>
        </Grid>
      </Box>
      <Divider mt="16px" />
    </Container>
  );
};

// return <Box pl="80px" pr="80px" pt="20px" border="1px solid red"></Box>;
