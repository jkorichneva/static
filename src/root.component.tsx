import { ChakraProvider } from "@chakra-ui/react";
import Menu from "./Menu/Menu";
import Page from "./Page/Page";
export default function Root(props) {
  return (
    <ChakraProvider>
      <Menu />
      <Page />
    </ChakraProvider>
  );
}
