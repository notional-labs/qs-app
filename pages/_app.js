import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import '@/styles/globals.css';
import "@/styles/menu.css";
import "@/styles/dashboard.css";
import { nexa, quicksand } from '@/assets/fonts/fonts';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <div className={`${nexa.variable} ${quicksand.variable} font-quicksand `}>
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  )
}
