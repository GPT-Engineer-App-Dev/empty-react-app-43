import { Container, Text, VStack } from "@chakra-ui/react";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Private = () => {
  const { session } = useSupabaseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!session) {
      navigate("/login");
    }
  }, [session, navigate]);

  if (!session) {
    return null;
  }

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4} mt={10}>
        <Text fontSize="2xl">Private Page</Text>
        <Text>This page is protected and only accessible to authenticated users.</Text>
      </VStack>
    </Container>
  );
};

export default Private;