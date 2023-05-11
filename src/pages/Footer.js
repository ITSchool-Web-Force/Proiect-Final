import Image from "next/image";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer aria-label="Site Footer" className="bg-white lg:grid lg:grid-cols-5">
  <div className="relative block h-32 lg:col-span-2 lg:h-full">
  <Image src="/image/banner.jpeg" alt="best coffee" href="./"
                    width={1000}
                    height={500}></Image>
  </div>

  <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div>
        <p>
          <span className="text-xs tracking-wide text-gray-500 uppercase">
            Call us
          </span>

          <Link
            href="#"
            className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl"
          >
            0123456789
          </Link>
        </p>

        <ul className="mt-8 space-y-1 text-sm text-gray-700">
          <li>Monday to Friday: 10am - 8pm</li>
          <li>Weekend: 10am - 10pm</li>
        </ul>

        <ul className="flex gap-6 mt-8">
          <li>
            <Link
              href="/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75"
            >
              <span className="sr-only">Facebook</span>

              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                
              </svg>
            </Link>
          </li>

          <li>
            <Link
              href="/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75"
            >
              <span className="sr-only">Instagram</span>

              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                
              </svg>
            </Link>
          </li>

          <li>
            <Link
              href="/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75"
            >
              <span className="sr-only">Twitter</span>

              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                />
              </svg>
            </Link>
          </li>

      
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className="font-medium text-gray-900">Services</p>

          <nav aria-label="Footer Navigation - Services" className="mt-6">
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="#" className="text-gray-700 transition hover:opacity-75">
                  1on1 Coaching
                </Link>
              </li>

              <li>
                <Link href="#" className="text-gray-700 transition hover:opacity-75">
                  Company Review
                </Link>
              </li>

              <li>
                <Link href="#" className="text-gray-700 transition hover:opacity-75">
                  Accounts Review
                </Link>
              </li>

              <li>
                <Link href="#" className="text-gray-700 transition hover:opacity-75">
                  HR Consulting
                </Link>
              </li>

              <li>
                <Link href="#" className="text-gray-700 transition hover:opacity-75">
                  SEO Optimisation
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <p className="font-medium text-gray-900">Company</p>

          <nav aria-label="Footer Navigation - Company" className="mt-6">
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="#" className="text-gray-700 transition hover:opacity-75">
                  About
                </Link>
              </li>

              <li>
                <Link href="#" className="text-gray-700 transition hover:opacity-75">
                  Meet the Team
                </Link>
              </li>

              <li>
                <Link href="#" className="text-gray-700 transition hover:opacity-75">
                  Accounts Review
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <div className="pt-12 mt-12 border-t border-gray-100">
      <div className="sm:flex sm:items-center sm:justify-between">
        <nav aria-label="Footer Navigation - Support">
          <ul className="flex flex-wrap gap-4 text-xs">
            <li>
              <Link href="#" className="text-gray-500 transition hover:opacity-75">
                Terms & Conditions
              </Link>
            </li>

            <li>
              <Link href="#" className="text-gray-500 transition hover:opacity-75">
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link href="#" className="text-gray-500 transition hover:opacity-75">
                Cookies
              </Link>
            </li>
          </ul>
        </nav>

        <p className="mt-8 text-xs text-gray-500 sm:mt-0">
          &copy; 2022. Company Name. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>
  );
}