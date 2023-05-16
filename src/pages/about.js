import Layout from "@/components/Layout"
import React from "react" ;
import Image from "next/image"
const stats = [
    { id: 1, name: 'Pleased customers', value: '+ 10k' },
    { id: 2, name: 'Products', value: '55' },
    { id: 3, name: 'Coffee Shops', value: '11' },
  ]

export default function About() {
  return (
    <Layout>
      <section className="bg-gray-50">
        <div
          className="mx-auto max-w-screen-xl px-4 py-20 lg:flex lg:h-screen lg:items-center"
        >
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl  sm:text-5xl">
              Who we are?
              <strong className=" text-red-700 sm:block">
                The Story Begins in 1995
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Java Jive is a specialty coffee pioneer, rising from humble Chicago roots to a company driven by curiosity, empowerment, and the never-ending quest for the most extraordinary coffee in the world.
            </p>
            <p className="mt-4 sm:text-m/relaxed">
              Doug Zell and Emily Mange just wanted freshly roasted coffee. It was really that simple. After moving from San Francisco to Chicago, they found that great tasting coffee in their new city was surprisingly elusive.
            </p>
          </div>
        </div>

        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
  
        <div className="space-y-4">
          <details className="group border-s-4 border-red-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden" open >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-lg font-medium text-gray-900">
                Who we are today? 
              </h2>
            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
              </svg>
            </span>
          </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
              Fast forward to today, and Intelligentsia still holds these original values close, though at a scale that brings extraordinary coffee to tens of thousands of customers daily.
              Through coffeebars, training labs, and Roasting Works in Chicago and Los Angeles, Intelligentsia has a unique and growing presence in five American cities—Austin, Boston, 
              Chicago, Los Angeles, and New York—with more to be announced in the future.
              In Season coffee subscriptions and national grocery distribution brings Intelligentsia’s rotating selection of single-origin coffees and blends to customers around the world, 
              while many of the world’s finest restaurants, hotels, and cafés proudly call Intelligentsia their house coffee.   
            </p>
          </details>

          <details className="group border-s-4 border-red-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              Our Mission?
            </h2>

          <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
            Our purpose is to make extraordinary coffee an agent of change. We deliver the world’s best coffee. Farmers, employees' and customers are collaborators in our effort to create a memorable and enriching coffee experience.
            We are not afraid to ask questions, to try new things and to admit that we are constantly learning. We strive for innovation and improvement. We know that extraordinary coffee is not the result of chance, but the product of hard work, skill, curiosity and an unyielding commitment to quality.
            We work each day to change the way the world understands and experiences coffee, elevating a daily ritual into a culinary experience. We celebrate coffee’s agricultural origins and the dedicated professionals who devote their lives to coffee.
            We embrace our responsibility to create positive change in the world. We use extraordinary coffee as our tool. We challenge traditional beliefs to create economic opportunity. We are stewards of the earth and advocates for our values of diversity, inclusion and equality.
            </p>
          </details>
        </div>
      </section>
      
    </Layout>
  )
}