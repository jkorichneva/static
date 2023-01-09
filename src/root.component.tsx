import {
  ChakraProvider,
  Grid,
  GridItem,
  useDisclosure,
} from "@chakra-ui/react";
import Menu from "./Menu/Menu";
import Page from "./Page/Page";
import React from "react";
import Header from "./Header/Header";
export default function Root(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <ChakraProvider>
      <Grid
        templateAreas={`"header"
                  "main"
                  "footer"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"1fr"}
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="teal.300" area={"header"} p="0 10px">
          <Header btnRef={btnRef} onOpen={onOpen} />
        </GridItem>
        <Menu isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
        <GridItem pl="2" area={"main"} p="0 10px">
          <Page />
        </GridItem>
        <GridItem pl="2" bg="gray.300" area={"footer"} p="0 10px">
          Footer
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}
