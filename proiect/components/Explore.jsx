import React from "react";
import Link from "next/link";
import { ExploreData } from "./data/ExploreData";
import Image from "next/image";

const Explore = () => {
  return (
    <div className="flex flex-col items-center py-24">
      <p className="text-2xl font-bold">Urmarestema pe Instagram</p>
      <p className="pb-4">@nikholas1</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {ExploreData.map((explore, index) => {
          return (
            <div key={index}>
              <Image
                src={explore.image}
                width={300}
                height={100}
                alt="/"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Explore;
