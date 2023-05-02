import { Privacyfeatures } from "@/dataIndex/Productlayoutdata";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Privacy = () => {
  return (
    <Box p={5} id="privacy">
      <Container maxW={"6xl"}>
        <Heading variant="productHead">Privacy Policy</Heading>

        {Privacyfeatures.map((feature) => (
          <Box key={feature.id}>
            <Heading variant="privacyHead" my="10">
              {feature.title}
            </Heading>

            {feature.description.map((desc, index) => (
              <Text key={index} variant="sectionDesc">
                {desc}
              </Text>
            ))}
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Privacy;
