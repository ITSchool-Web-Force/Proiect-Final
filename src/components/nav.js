import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export default function Nav() {
  return (
    <nav className="flex items-center justify-between flex-wrap gradient-bg-nav p-3 lg:p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-luminari-custom font-semibold text-2xl tracking-tight text-purple-600" style={{ fontSize: "2.5rem" }}>Liliacul</span>
      </div>
      <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:justify-center">
        <div className="text-sm lg:flex-grow lg:flex lg:justify-center">
          <Link href="/" legacyBehavior>
            <a className="block mt-2 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mx-2 lg:mx-4 text-lg text-gray-800">
              Acasa
            </a>
          </Link>
          <Link href="/jucarii" legacyBehavior>
            <a className="block mt-2 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mx-2 lg:mx-4 text-lg text-gray-800">
              Jucarii
            </a>
          </Link>
          <Link href="/cadouri" legacyBehavior>
            <a className="block mt-2 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mx-2 lg:mx-4 text-lg text-gray-800">
              Cadouri
            </a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="block mt-2 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mx-2 lg:mx-4 text-lg text-gray-800">
              Contact
            </a>
          </Link>
        </div>
        <div className="flex items-center">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </div>
      </div>
    </nav>
  );
}
