import React from 'react';

export default function BannerImage() {
  return (
    <div className="my-20 mx-auto w-11/12 md:w-10/12 lg:w-8/12 xl:w-7/12 border border-black rounded-lg overflow-hidden">
      <img
        src="/banner1.jpg"
        alt="Product Image"
        className="w-full"
      />
    </div>
  );
}
