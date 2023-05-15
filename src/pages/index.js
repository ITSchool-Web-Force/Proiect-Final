import Layout from '../components/Layout';
import { Inter } from 'next/font/google';
import ProductItem from '../components/ProductItem';
import data from "../utils/data"
import Testimonial from '@/components/testimonials';
import Hero from '@/components/hero';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
     <Layout>
      <div> <Hero/></div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
        {data.products.map((product) => (
          <ProductItem product={product} key={product.slug}></ProductItem>
        ))}
      </div>

      <div><Testimonial/></div>
     </Layout>
     
     );
}