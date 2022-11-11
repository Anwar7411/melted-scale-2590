import {
  Box,
  HStack,
  VStack,
  Flex,
  Spacer,
  SimpleGrid,
  Container,
} from "@chakra-ui/react";

export const Electronics = () => {
  return (
    <Box w="100%" h="100vh" border="1px solid red" p={2}>
      <HStack>
        <Box w="20%" border="1px solid blue" h="100vh" p={2}>
          FILTER
        </Box>
        <Box w="80%" border="1px solid blue" h="100vh" p={2}>
          <VStack h="100%">
            <Box border="1px solid red" w="100%" h="12%" p={2}>
              <Flex>
                <Box border="1px solid green" p={2}>
                  Breadcrumb
                </Box>
                <Spacer />
                <Box border="1px solid green" p={2}>
                  Sorting
                </Box>
              </Flex>
            </Box>
            <Box border="1px solid red" w="100%" h="88%" p={2}>
              <Container border="1px solid blue" maxW="4xl">
                <SimpleGrid columns={3}>Grid</SimpleGrid>
              </Container>
            </Box>
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
};
