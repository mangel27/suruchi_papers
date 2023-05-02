import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const CustomLink = ({ to, isScrollLink, children }) => {
  <Link href={to} passHref={true} textDecor={"none"} legacyBehavior={true}>
    {children}
  </Link>;
};

export default CustomLink;
