import React from "react";
import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Heading,
} from "@chakra-ui/react";
const Hero = () => {
  return (
    <Flex id='home'
      w={"100%"}
      h={"500px"}
      
      backgroundImage={
        "url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack  align={"center"} mb="10" px="2">
          <Heading variant="herotext">Suruchi Papers</Heading>
          <Text variant="heroDescription">
            specializes in supply of variety of paper & Boards
          </Text>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Hero;
