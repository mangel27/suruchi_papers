import React from "react";
import Header from "../Header";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Products from "./Products";
import Footer from "../Footer";
import { Box } from "@chakra-ui/react";

const LandingPage = () => {
  return (
    <Box maxWidth="100%">
      <Box position="relative" w="100%">
        <Hero id="home" />
        <AboutUs id="about" />
        <Products id="products" />
      </Box>
      {/* <Footer/> */}
    </Box>
  );
};

export default LandingPage;
