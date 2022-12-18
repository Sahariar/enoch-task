import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import { extendTheme } from '@chakra-ui/react'
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

export default function App({ Component, pageProps }) {
  return  <ChakraProvider theme={theme}>
  <Component {...pageProps} />
</ChakraProvider>
}

