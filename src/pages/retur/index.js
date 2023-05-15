import React from "react";
import Nav from "../../components/nav"
import ReturnForm from "../../components/ReturnForm.js"

export default function Retur() {
  return (
    <div>
      <Nav />
      <div className="my-8 mx-auto w-10/12 md:w-9/12 lg:w-7/12 xl:w-6/12 border-none">
        <h1 className="text-center text-2xl font-bold my-4">
          Politica de retur
        </h1>
        <p className="text-center text-lg mb-8">
          Daca nu sunteti multumiti de achizitia dumneavoastra, va rugam sa ne contactati in <strong>maxim 30 de zile</strong> de la data achizitiei.
        </p>
        <ReturnForm />
      </div>
    </div>
  );
}
