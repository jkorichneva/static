import React from "react";
import { useStarsStore } from "../../store/classStore";
import {
  Link,
  VStack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

export default function Menu({ isOpen, onClose, btnRef }) {
  const changeStar = useStarsStore((state) => state.changeStar);
  const starList = useStarsStore((state) => state.starList);

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Choose type</DrawerHeader>

        <DrawerBody>
          <VStack align="left">
            {starList.map((item) => (
              <Link key={item} onClick={() => changeStar(item)}>
                {item}
              </Link>
            ))}
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
