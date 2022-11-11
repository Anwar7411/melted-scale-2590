import {
  Box,
  HStack,
  VStack,
  Flex,
  Spacer,
  SimpleGrid,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { useLocation, useParams } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getElectronicsProduct } from "../redux/appreducer/action";
import { ChevronRightIcon } from "@chakra-ui/icons";

export const Electronics = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.AppReducer.electronicsProduct);
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    dispatch(getElectronicsProduct());
  }, []);

  return (
    <Box w="100%" border="1px solid red" p={2}>
      <HStack alignItems="flex-start">
        <Box w="20%" border="1px solid blue" p={2}>
          FILTER
        </Box>
        <Box w="80%" border="1px solid blue" p={2}>
          <VStack h="100%">
            <Box border="1px solid red" w="100%" h="12%" p={2}>
              <Flex>
                <Box border="1px solid green" p={2} color="#455a64">
                  <Breadcrumb
                    spacing="8px"
                    separator={<ChevronRightIcon color="gray.500" />}
                  >
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                      <BreadcrumbLink
                        href="#"
                        _hover={{ textDecoration: "none", cursor: "auto" }}
                      >
                        Electronics
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </Breadcrumb>
                </Box>
                <Spacer />
                <Box border="1px solid green" p={2}>
                  Sorting
                </Box>
              </Flex>
            </Box>
            <Box border="1px solid red" w="100%" p={2}>
              <Container border="1px solid blue" maxW="container.xl">
                <SimpleGrid minChildWidth="300px">
                  {/* {products.map((product) => {
                    return <ProductCard key={product.id} {...product} />;
                  })} */}
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </SimpleGrid>
              </Container>
            </Box>
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
};
