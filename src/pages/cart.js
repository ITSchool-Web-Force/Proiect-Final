import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import Layout from '../components/Layout';
import { Store } from '../utils/Store';
import { useRouter } from 'next/router';


export default function CartScreen () {
  const router = useRouter();
  const { state, dispatch } = useContext(Store); 
  const {
    cart: { cartItems },
  } = state; 
  const [submitterName, setSubmitterName] = useState("");

  const confirmationScreenVisible =
  router.query?.success && router.query.success === "true";
  const formVisible = !confirmationScreenVisible;


  return (
    <Layout title = " Shopping Cart"> 
      < h1 className = " mb-4 text-xl" > Shopping Cart</h1>
        {cartItems.lenght === 0 ? (
          <div>
          Cart is empty. <Link href = "/ Continue shopping" ></Link>
          </div>
      ) : (
        <div className="grid md:grid-cols-3 md:gap-4 mb-20">
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
          <div className="card p-8">
            <ul>
              <li>
                <div className="pb-5 text-xl">
                  Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}) : $
                  {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                </div>
                <div class="w-full max-w-xs">
                  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    className="container"
                    method="POST"
                    name="order-form"
                    action="shipping/?success=true"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                <div className="mb-4">
                <input type="hidden"
                      name="subject"
                      value={`You've got mail from ${submitterName}`}
                />
                <input type="hidden" name="form-name" value="order-form" />
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Full Name</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                       id="name"
                       name="name"
                       required
                       onChange={(e) => setSubmitterName(e.target.value)}
                       type="text"
                />
                <label htmlFor="phone">Phone number </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" name="phone" required type="text" />
                <label htmlFor="email">E-mail Address </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"id="email" type="email" name="email" required />
                <label htmlFor="message">Message </label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"id="message" name="message" required />
                <button> Submit </button>
                </div>
                  </form>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </Layout>
  );
}
