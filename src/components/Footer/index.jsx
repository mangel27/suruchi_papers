import React from "react";
import {
  Box,
  Container,
  Flex,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
const Footer = () => {
  return (
    <Box
      bg="primary_1"
      color="primary_4"
      px="5"
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "1fr 1fr 1fr " }}
          spacing={4}
        >
          <Flex alignItems={"center"}>
            <Image
              boxSize={50}
              src={
                "/assets/logo.png"
              }
            />
            <Text variant="footerHeadText" ml={2} >Suruchi Papers</Text>
          </Flex>
          <Stack align={"flex-start"}>
             <Text variant="footerHeadText" mb={0}>Email . Id</Text>
            <Text variant="footerText">purvamodani@suruchipapers.in</Text>
            <Text variant="footerHeadText" mb={2}>Tel: </Text>
            <Text variant="footerText">+ 91 96990 91877</Text>
            <Text variant="footerText">+91 96992 50120</Text>
          </Stack>
         
         
          <Stack align={"flex-start"}>
          <Text variant="footerHeadText" mb={2}>Contact us</Text>
            <Text variant="footerText">SURUCHI PAPERS PVT. LTD.</Text>
            <Text variant="footerText">
              B-302, Sanskruti apartment, Chikuwadi,
            </Text>
            <Text variant="footerText">
             New Link Road, Borivali
              west
            </Text >
            <Text variant="footerText">Mumbai- 400092 India</Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
