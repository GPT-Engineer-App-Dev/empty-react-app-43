import { Container, Text, VStack, Box, Flex, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Index = () => {
  const { session, logout } = useSupabaseAuth();

  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.100" p={4} borderRadius="md" boxShadow="md">
        <Box p="2">
          <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        </Box>
        <Spacer />
        <Box>
          <Button as={Link} to="/" variant="ghost" mr={4}>Home</Button>
          <Button as={Link} to="/about" variant="ghost" mr={4}>About</Button>
          <Button as={Link} to="/private" variant="ghost" mr={4}>Private</Button>
          {session ? (
            <Button variant="ghost" onClick={logout}>Logout</Button>
          ) : (
            <Button as={Link} to="/login" variant="ghost">Login</Button>
          )}
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