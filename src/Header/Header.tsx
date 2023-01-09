import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton, Flex, Box, Heading } from "@chakra-ui/react";
import React from "react";

export default function Header({ btnRef, onOpen }) {
  return (
    <Flex h="100%" direction="row" justify="space-between" alignItems="center">
      <Box>
        <Heading>Classification</Heading>
      </Box>
      <Box>
        <IconButton
          ref={btnRef}
          colorScheme="teal"
          icon={<HamburgerIcon />}
          aria-label=""
          onClick={onOpen}
        ></IconButton>
      </Box>
    </Flex>
  );
}
