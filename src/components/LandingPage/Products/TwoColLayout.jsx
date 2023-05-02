import { Box, Flex } from "@chakra-ui/react";
import React, { useRef, useState, useEffect } from "react";
import ImageSection from "./ImageSection";
import TextSection from "./TextSection";

const TwoColLayout = ({ Data, index }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box
      py="10"
      className={`fade-in ${isVisible ? "visible" : ""} ${
        isHovered ? "no-fade-out" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={ref}
    >
      <Flex
        h={"auto"}
        w="100%"
        direction={["column", "row"]}
        // p={["0vw", "2vw"]}
      >
        <ImageSection
          w={["100%", "50%"]}
          h={"auto"}
          order={[1, index % 2 === 0 ? 1 : 2]}
          imgSrc={Data.imageurl}
          py={[5, 0]}
          px={[0, 0, 0, 10]}
        />
        <TextSection
          w={["100%", "50%"]}
          order={[2, index % 2 === 0 ? 2 : 1]}
          {...Data}
          px={[5, 0, 0, 10]}
        />
      </Flex>
    </Box>
  );
};

export default TwoColLayout;
