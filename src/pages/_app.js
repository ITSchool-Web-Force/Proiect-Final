import '@/styles/globals.css'
import { StoreProvider } from '@/utils/Store'
import { Roboto } from 'next/font/google'

const roboto = Roboto( 
  {
    subsets: ['latin'],
    weight: ['400', '500', '300'],
    style: ['italic', 'normal']
  }
)

export default function App({ Component, pageProps }) {
  return (
  <StoreProvider>
     <main className={roboto.className}></main>
    <Component {...pageProps} />
  </StoreProvider>
  );
}
