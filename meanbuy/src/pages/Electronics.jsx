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
} from "@chakra-ui/react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getElectronicsProduct } from "../redux/appreducer/action";
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";

export const Electronics = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.AppReducer.electronicsProduct);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || "");

  // console.log(location);

  useEffect(() => {
    const params = {};
    sortBy && (params.sortBy = sortBy);
    setSearchParams(params);
  }, [searchParams, sortBy]);

  useEffect(() => {
    if (location || products.length === 0) {
      const queryParams = {
        params: {
          _sort: searchParams.get("sortBy") && "actual_price",
          _order: searchParams.get("sortBy"),
        },
      };
      dispatch(getElectronicsProduct(queryParams));
    }
  }, [location.search]);

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
                <Box p={2} mr="16px">
                  <Menu>
                    <MenuButton px={4} border="1px solid #ccc" color="#455a64">
                      WHAT'S NEW
                      <ChevronDownIcon boxSize="32px" ml="12px" />
                    </MenuButton>
                    <MenuList
                      border="1px solid #ccc"
                      borderRadius="none"
                      pos="relative"
                      right="-50px"
                    >
                      <MenuItem color="#455a64">What's New</MenuItem>
                      <MenuItem color="#455a64">Featured Items</MenuItem>
                      <MenuItem color="#455a64">Trending Items</MenuItem>
                      <MenuItem color="#455a64">Price</MenuItem>
                      <MenuItem
                        color="#455a64"
                        pl="32px"
                        onClick={() => setSortBy("desc")}
                      >
                        High To Low
                      </MenuItem>
                      <MenuItem
                        color="#455a64"
                        pl="32px"
                        onClick={() => setSortBy("asc")}
                      >
                        Low To High
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
              </Flex>
            </Box>
            <Box border="1px solid red" w="100%" p={2}>
              <Container border="1px solid blue" maxW="container.xl">
                <SimpleGrid minChildWidth="300px">
                  {products.map((product) => {
                    return <ProductCard key={product.id} {...product} />;
                  })}
                  {/* <ProductCard />
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
                  <ProductCard /> */}
                </SimpleGrid>
              </Container>
            </Box>
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
};
