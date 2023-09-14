import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import '@/styles/globals.css';
import "@/styles/menu.css";
import "@/styles/dashboard.css";
import { nexa, quicksand } from '@/assets/fonts/fonts';
import { ChakraProvider } from '@chakra-ui/react';
import Header from '@/components/layout/Header';
import { Provider } from 'react-redux';
import { store } from '@/state/store';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Header />
        <div className={`${nexa.variable} ${quicksand.variable} font-quicksand `}>
          <Component {...pageProps} />
        </div>
      </Provider>
    </ChakraProvider>
  )
}
