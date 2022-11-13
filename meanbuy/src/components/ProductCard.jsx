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
import { Link } from "react-router-dom";

export const ProductCard = ({
  id,
  top_image,
  title,
  rating,
  price,
  pathname,
}) => {
  return (
    <Link to={`/electronics/${id}`}>
      <Box
        margin="auto"
        marginTop="20px"
        w="300px"
        // h="500px"
      >
        <Box w="100%">
          <Image w="100%" src={top_image} />
        </Box>
        <Box h="20px" w="100%" mt="5px">
          <Text color="#455a64" align="center">
            {title}
          </Text>
        </Box>
        <Box mt="5px">
          <Flex justifyContent="flex-end">
            <Badge
              variant="solid"
              backgroundColor="#3cc101"
              paddingLeft="12px"
              paddingRight="12px"
              borderRadius="5px"
            >
              {`${rating}`}
              <StarIcon ml="5px" viewBox="0 2 24 24" />
            </Badge>
          </Flex>
        </Box>
        <Divider mt="5px" />
        <Box mt="5px">
          <Flex alignItems="center">
            <Box ml="12px">
              <Text color="#f98d29" fontSize="20px">
                <Icon as={BiRupee} viewBox="0 -8 24 24" />
                {price}
              </Text>
            </Box>
            <Spacer />
            <Box>
              <Text color="#008a00">UP TO 68% OFF</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Link>
  );
};
