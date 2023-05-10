import Head from 'next/head'
import Header from '../componente/Header'
import Destinatii from '@/componente/Destinatii'

export default function Home() {
  return (
    <div>
      <Head>
      <title>Travel the WORLD</title>
      </Head>
      <Header/>
      <Destinatii />
    </div>
  )
}
