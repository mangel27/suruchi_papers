import React from "react";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { Aboutfeatures } from "@/dataIndex/Productlayoutdata";

const AboutUs = () => {
  return (
    <Box mt="3em" p={5} id="about">
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading variant="sectionsHead">AboutUs</Heading>
      </Stack>

      <Container maxW={"6xl"}>
        {Aboutfeatures.map((feature) => (
          <HStack key={feature.id}>
            <Text variant="sectionDesc">{feature.text}</Text>
          </HStack>
        ))}
      </Container>
    </Box>
  );
};

export default AboutUs;
