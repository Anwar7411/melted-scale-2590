import {
    Badge,
    Box,
    Center,
    Divider,
    Flex,
    Image,
    Spacer,
    Text,
    GridItem
  } from "@chakra-ui/react";
  import { StarIcon } from "@chakra-ui/icons";
  import { Icon } from "@chakra-ui/react";
  import { BiRupee } from "react-icons/bi";
import React from 'react'

const ClothProduct = ({item}) => {
  return (
    <GridItem boxShadow='xl'>
         <Box w="100%">
        <Image
          w="200px"
          h="280px"
          src={item.images[0]}
          m="auto"
        />
      </Box>
      <Box h="20px" w="100%" mt="5px">
        <Text align="center">{item.title}</Text>
      </Box>
      <Box mt="5px">
        <Flex justifyContent="flex-end">
          <Badge
            variant="solid"
            colorScheme="green"
            paddingLeft="12px"
            paddingRight="12px"
             borderRadius="5px"
          >
            {item.rating}
            <StarIcon ml="5px" viewBox="0 2 24 24" />
          </Badge>
        </Flex>
      </Box>
      <Divider mt="5px" />
      <Box mt="8px">
        <Flex alignItems="center">
          <Flex gap={4} >
            <Text color="orange.500" fontSize="20px">
              <Icon as={BiRupee} viewBox="0 -10 24 24" />
              {item.price}
            </Text>
            <Text as="s" color="gray.500" fontSize="18px">
            <Icon as={BiRupee} viewBox="0 -10 24 24" />
              {item.strikeOff}
            </Text>
          </Flex>
          <Spacer />
          <Box>
            <Text color="green.500">UP TO 67% OFF</Text>
          </Box>
        </Flex>
      </Box>
    </GridItem>
    
  )
}

export default ClothProduct