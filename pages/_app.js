import '@/styles/globals.css'
import '@/styles/globals.css';
import "@/styles/menu.css";
import "@/styles/dashboard.css";
import { nexa, quicksand } from '@/assets/fonts/fonts';
import { Center, ChakraProvider, Flex } from '@chakra-ui/react';
import Header from '@/components/layout/Header';
import { Provider } from 'react-redux';
import { store } from '@/state/store';
import SideBar from '@/components/layout/Sidebar';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <div className={`${nexa.variable} ${quicksand.variable} font-quicksand `}>
          <Flex w='full' minH={'100vh'} bgImage={'/imgs/Background.jpg'} bgSize={'cover'}>
            <Header />
            <SideBar />
            <Center marginLeft={'15vw'} w={'100%'}>
              <Component {...pageProps} />
            </Center>
          </Flex>
        </div>
      </Provider>
    </ChakraProvider>
  )
}
