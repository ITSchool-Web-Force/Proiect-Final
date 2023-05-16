import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function ProductItem({ product, addToCart })
 {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="rounded shadow object-cover h-64 w-full"
        />
      </Link>
    <div className="flex flex-col items-center justify-center p-5">
      <Link href={`/product/${product.slug}`}>
        <h2 className="text-lg">{product.name}</h2>
      </Link>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
      <Link href={`/product/${product.slug}`}>
        Find more!
      </Link>
    </div>
  </div>
  );
}