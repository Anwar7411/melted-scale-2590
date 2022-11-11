import {
  Badge,
  Box,
  Center,
  Divider,
  Flex,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { BiRupee } from "react-icons/bi";

export const ProductCard = () => {
  return (
    <Box
      margin="auto"
      marginTop="20px"
      border="1px solid red"
      w="300px"
      // h="500px"
    >
      <Box w="100%">
        <Image
          w="100%"
          src="https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjM0MjY1XC9QaW5rX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19"
        />
      </Box>
      <Box h="20px" w="100%" mt="5px">
        <Text align="center">350ml Electric Portable Juicing Cup</Text>
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
            4.4/5
            <StarIcon ml="5px" viewBox="0 2 24 24" />
          </Badge>
        </Flex>
      </Box>
      <Divider mt="5px" />
      <Box mt="8px">
        <Flex alignItems="center">
          <Box>
            <Text color="orange.500">
              <Icon as={BiRupee} viewBox="0 -10 24 24" />
              4,999
            </Text>
          </Box>
          <Spacer />
          <Box>
            <Text color="green.500">UP TO 67% OFF</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
