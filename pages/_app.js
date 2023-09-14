import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <div className={`${nexa.variable} ${quicksand.variable} font-quicksand `}>
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  )
}