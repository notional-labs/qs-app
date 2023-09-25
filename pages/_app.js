import '@/styles/globals.css';
import "@/styles/menu.css";
import "@/styles/defi.css";
import "@/styles/dashboard.css";
import {nexa, quicksand} from '@/assets/fonts/fonts';

export default function App({ Component, pageProps }) {
  return (
    <div className={`${nexa.variable} ${quicksand.variable} font-quicksand `}>
      <Component {...pageProps} />
    </div>
  )
}
