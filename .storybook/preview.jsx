import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { GlobalStyle } from "@chakra-ui/react";
import theme from "../src/theme/theme";

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <GlobalStyle />
      <Story />
    </ChakraProvider>
  ),
];
