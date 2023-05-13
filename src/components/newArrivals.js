import React from "react";

const newArrivals = () => {
    
    return (
      <div className="my-8 mx-auto w-10/12 md:w-9/12 lg:w-7/12 xl:w-6/12">
        <h2 className="text-center text-2xl font-bold mb-4">Noutati</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border border-gray-300 p-2">
            <img
              src="/poza1.jpg"
              alt="Product Image"
              className="rounded-lg mx-auto"
            />
          </div>
          <div className="border border-gray-300 p-2">
            <img
              src="/poza2.jpg"
              alt="Product Image"
              className="rounded-lg mx-auto"
            />
          </div>
          <div className="border border-gray-300 p-2">
            <img
              src="/poza3.jpg"
              alt="Product Image"
              className="rounded-lg mx-auto"
            />
          </div>
          <div className="border border-gray-300 p-2">
            <img
              src="/poza4.jpg"
              alt="Product Image"
              className="rounded-lg mx-auto"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default newArrivals;
  