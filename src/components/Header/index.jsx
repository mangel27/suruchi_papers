import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Text,
  Image,
  useBreakpointValue,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";
import CustomLink from "./CustomLink";
import { useRouter } from "next/router";

const Links = [
  { id: "home", text: "Home", path: "/#home" },
  { id: "products", text: "Products", path: "/#products" },
  { id: "about", text: "About", path: "/#about" },
  { id: "privacy", text: "Privacy", path: "/privacy" },
];

const Header = () => {
  const router = useRouter();
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Box
        bg="primary_1"
        px={useBreakpointValue({ base: "5", md: "50", xl: "100" })}
        py={5}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Flex
            cursor={"pointer"}
            alignItems={"center"}
            onClick={() => {
              router.push("/");
            }}
          >
            <Image boxSize={50} src={"/assets/logo.png"} />
            <Flex>
              <Heading variant="logoColortext">Suruchi </Heading>
              <Heading variant="logotext"> Papers</Heading>
            </Flex>
          </Flex>
          {isDesktop ? (
            <HStack spacing={8} alignItems={"center"}>
              <HStack as={"nav"} spacing={10}>
                {Links.map((link) => {
                  return (
                    <Link
                      key={link.id}
                      href={link.path}
                      passHref={true}
                      textDecor={"none"}
                      legacyBehavior={true}
                    >
                      <Text py="1em" onClick={onClose} variant="navText">
                        {link.text}
                      </Text>
                    </Link>
                  );
                })}
              </HStack>
            </HStack>
          ) : (
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              onClick={isOpen ? onClose : onOpen}
              cursor="pointer"
            />
          )}
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton color="white" />

              <DrawerBody bg="primary_1" px="3em">
                <Flex
                  cursor={"pointer"}
                  alignItems={"center"}
                  my="1em"
                  onClick={() => {
                    router.push("/").then((rep) => onClose());
                  }}
                >
                  <Image boxSize={50} src={"/assets/logo.png"} />
                  <Flex>
                    <Heading variant="logoColortext">Suruchi </Heading>
                    <Heading variant="logotext"> Papers</Heading>
                  </Flex>
                </Flex>
                {Links.map((link) => {
                  return (
                    <Link
                      key={link.id}
                      href={link.path}
                      passHref={true}
                      textDecor={"none"}
                      legacyBehavior={true}
                    >
                      <Text py="1em" onClick={onClose} variant="navText">
                        {link.text}
                      </Text>
                    </Link>
                  );
                })}
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
