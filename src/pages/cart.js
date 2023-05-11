import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import Layout from '../components/Layout';
import { Store } from '../utils/Store';
import { useRouter } from 'next/router';



export default function CartScreen () {
    const router = useRouter();
    const { state, dispatch } = useContext(Store); 
    const {
        cart: { cartItems },
    } = state; 

    return (
        <Layout title = " Shopping Cart"> 
            < h1 className = " mb-4 text-xl" > Shopping Cart</h1>
            {cartItems.lenght === 0 ? (
             <div>
                Cart is empty. <Link href = "/ Continue shopping" ></Link>
                </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <table className="min-w-full ">
              <thead className="border-b">
                <tr>
                  <th className="p-5 text-left">Item</th>
                  <th className="p-5 text-right">Quantity</th>
                  <th className="p-5 text-right">Price</th>
                  </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.slug} className="border-b">
                    <td>
                      <Link
                        href={`/product/${item.slug}`}
                        className="flex items-center"
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={50}
                          height={50}
                          style={{
                            maxWidth: '100%',
                            height: 'auto',
                          }}
                        ></Image>
                        {item.name}
                      </Link>
                    </td>
                    <td className="p-5 text-right">{item.quantity}</td>
                    <td className="p-5 text-right">${item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card p-5">
            <ul>
              <li>
                <div className="pb-3 text-xl">
                  Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}) : $
                  {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                </div>
              </li>
              
            </ul>
          </div>
        </div>
      )}
    </Layout>
  );
}
