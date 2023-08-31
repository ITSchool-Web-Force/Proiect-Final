import React from "react";
import Image from "next/image";
import { AnimalData, CarsData, WorkData } from "./data/WorkData";

const Horizontal = () => {
  return <hr className="w-[90vw] my-2 mx-auto" />;
};

const WorkImage = () => {
  return (
    <div className="w-[90vw] mx-auto">
      <p className="text-2xl font-bold">Buildings</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 pb-3">
        {WorkData.map((work, index) => {
          return (
            <div key={index}>
              <Image
                src={work.image}
                width={300}
                height={100}
                alt="/"
              />
            </div>
          );
        })}
      </div>
      <Horizontal />
      <p className="text-2xl font-bold">Animals</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 pb-3">
        {AnimalData.map((animal, index) => {
          return (
            <div key={index}>
              <Image
                src={animal.image}
                width={300}
                height={100}
                alt="/"
              />
            </div>
          );
        })}
      </div>
      <Horizontal />
      <div className="flex justify-center">
        <div>
          {" "}
          <p className="text-2xl font-bold">Cars</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 pb-3">
            {CarsData.map((cars, index) => {
              return (
                <div key={index}>
                  <Image
                    src={cars.image}
                    width={300}
                    height={100}
                    alt="/"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Horizontal />
    </div>
  );
};

export default WorkImage;
