import '@/styles/nav.css'
import 'tailwindcss/tailwind.css'

import Layout from '../components/nav';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;