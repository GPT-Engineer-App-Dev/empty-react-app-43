import { Container, Text, VStack, Box, Flex, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.100" p={4} borderRadius="md" boxShadow="md">
        <Box p="2">
          <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        </Box>
        <Spacer />
        <Box>
          <Button as={Link} to="/" variant="ghost" mr={4}>Home</Button>
          <Button as={Link} to="/about" variant="ghost">About</Button>
        </Box>
      </Flex>
      <VStack spacing={4} mt={10}>
        <Text fontSize="2xl">Welcome to MyApp</Text>
        <Text>This is a clean and minimalistic React application using Chakra UI.</Text>
      </VStack>
    </Container>
  );
};

export default Index;