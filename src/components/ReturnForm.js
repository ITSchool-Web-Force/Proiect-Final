import React from 'react';

const ReturnPage = () => {
  return (
    <div>
      <div className="container mx-auto my-10 p-6 bg-gray-100 rounded-md shadow-lg">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-center mb-4">Returnare produs</h1>

          <p className="text-gray-600 mb-4">Conditiile pentru retur sunt urmatoarele:</p>

          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Produsul trebuie să fie în starea originală, cu etichetele intacte.</li>
            <li>Returnarea trebuie să fie făcută în termen de 30 de zile de la data achiziționării.</li>
            <li>Clientul trebuie să suporte costurile de returnare, cu excepția cazurilor în care produsul este defect sau greșit livrat.</li>
          </ul>

          <p className="text-gray-600">Vă rugăm să completați formularul de mai jos pentru a ne anunța ca doriti sa faceti un retur</p>
        </div>

        <form name="retur" method="POST" netlify>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Nume:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              placeholder="Nume si Prenume"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="Adresa de e-mail"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
              Telefon:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              name="phone"
              placeholder="Numar de telefon"
            />
          </div>

          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              Trimite
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReturnPage;
