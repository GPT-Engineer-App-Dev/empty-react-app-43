import { Container, Box, Heading, VStack, Button } from "@chakra-ui/react";
import { SupabaseAuthUI } from "../integrations/supabase/auth.jsx";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { session } = useSupabaseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      navigate("/");
    }
  }, [session, navigate]);

  return (
    <Container maxW="container.sm" p={4}>
      <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md">
        <Heading as="h2" size="lg" textAlign="center" mb={6}>
          Login
        </Heading>
        <VStack spacing={4}>
          <SupabaseAuthUI />
        </VStack>
      </Box>
    </Container>
  );
};

export default Login;