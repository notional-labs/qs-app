import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import '@/styles/globals.css';
import "@/styles/menu.css";
import "@/styles/dashboard.css";
import { nexa, quicksand } from '@/assets/fonts/fonts';
<<<<<<< HEAD
import { ChakraProvider } from '@chakra-ui/react';
import Header from '@/components/layout/Header';
import { Provider } from 'react-redux';
import { store } from '@/state/store';
=======
>>>>>>> 9888fba6a456545d5afacf6f881ba51710ca910c

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
<<<<<<< HEAD
      <Provider store={store}>
        <Header />
        <div className={`${nexa.variable} ${quicksand.variable} font-quicksand `}>
          <Component {...pageProps} />
        </div>
      </Provider>
=======
      <div className={`${nexa.variable} ${quicksand.variable} font-quicksand `}>
        <Component {...pageProps} />
      </div>
>>>>>>> 9888fba6a456545d5afacf6f881ba51710ca910c
    </ChakraProvider>
  )
}
