import { Box, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";

const TextSection = (props) => {
  const { title, description } = props;
  return (
    <Box w="50%" {...props}>
      <Heading variant="productHead">{title}</Heading>
      <UnorderedList fontSize={["14px", "18px"]} mx="auto">
        {description &&
          description.map((item, index) => (
            <ListItem
              fontFamily={"sansSerif"}
              fontSize={["md", "md", "xl"]}
              color="gray.600"
              lineHeight={1.5}
              paddingTop={["0.5em", "1em"]}
              mb="0.5em"
              key={index + "li_" + item}
            >
              {item}
            </ListItem>
          ))}
      </UnorderedList>
    </Box>
  );
};

export default TextSection;
