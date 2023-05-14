import React from 'react';

const products = [
  { id: 1, name: 'PopIt', price: 10, image: "/produs1.jpg" },
  { id: 2, name: 'Proiector', price: 60, image: "/produs2.jpg" },
  { id: 3, name: 'Figurine AmongUs', price: 20, image: "/produs3.jpg" },
  { id: 4, name: 'Tractor de ferma', price: 25, image: "/produs4.jpg" },
  { id: 5, name: 'Figurina Thor', price: 30, image: "/produs5.jpg" },
  { id: 6, name: 'Controller Bebelusi', price: 35, image: "/produs6.jpg" },
  { id: 7, name: 'Masina Clasica', price: 50, image: "/produs7.jpg" },
  { id: 8, name: 'Figurina Spiderman', price: 35, image: "/produs8.jpg" },
  { id: 9, name: 'Masina cu telecomanda', price: 50, image: "/produs9.jpg" },
];

const ProductPage = () => {
    return (
      <div className="container mx-auto my-10 p-6 bg-gray-100 rounded-md shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Produse</h1>
        <div className="grid grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-md p-6 shadow-lg flex flex-col justify-between"
              style={{ aspectRatio: '1/1' }}
            >
              <div style={{ height: '75%' }}>
                <img
                  className="w-full h-full object-cover object-center mb-4"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div style={{ height: '25%' }}>
                <h2 className="text-lg font-medium mb-2">{product.name}</h2>
                <p className="text-gray-700 text-sm mb-4">Pret: {product.price} RON</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
                  Adauga in cos
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductPage;
