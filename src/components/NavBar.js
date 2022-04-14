import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  HStack,
  IconButton,
  Input,
  Text,
} from "@chakra-ui/react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

import React, { useEffect, useState } from "react";

const NavBar = ({ handleSource, sources, isDark, toggleColorMode }) => {
  const [flag, setFlag] = useState(false);

  const handleChange = (e) => {
    if (e.target.value.length == 0) {
      setFlag(false);
    } else {
      setFlag(true);
    }
  };

  return (
    <HStack justifyContent="space-evenly" wrap="wrap" alignItems="center">
      <Breadcrumb fontWeight="medium" fontSize="md" marginY={5}>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink _hover={{ border: "", cursor: "default" }}>
            Top Headlines
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink _hover={{ border: "", cursor: "default" }}>
            India News
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink _hover={{ border: "", cursor: "default" }}>
            Entertainment News
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink _hover={{ border: "", cursor: "default" }}>
            Sports News
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink _hover={{ border: "", cursor: "default" }}>
            Politics News
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Box display="flex" alignItems="center" gap={6} marginTop={2}>
        <Input placeholder="Search articles..." onChange={handleChange} />
        <Text fontSize="md">
          {flag && "The api has no search functionality"}
        </Text>
        <IconButton
          icon={isDark ? <BsMoonFill /> : <BsSunFill />}
          onClick={toggleColorMode}
        />
      </Box>
    </HStack>
  );
};

export default NavBar;
