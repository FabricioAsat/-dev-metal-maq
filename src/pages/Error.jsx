import React from "react";
import { Body } from "../components/body/Body";
import { Link } from "wouter";

export const Error = () => {
  return (
    <Body>
      <div className="flex flex-col items-center justify-center h-full gap-y-5 py-10">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-red-500">Error 404</h2>
          <p className="italic text-2xl">La ruta a la que accedió no existe</p>
        </div>
        <Link
          href="/"
          className="outline-none text-sm lg:text-base font-bold bg-neutral-800 border-2 text-white border-neutral-800 hover:bg-neutral-700 hover:border-neutral-700 px-3 py-1.5 lg:py-2 lg:px-4 rounded-xl transition-all duration-300 ease-in-out hover:shadow-md hover:shadow-neutral-700/50"
        >
          Volver al home
        </Link>
      </div>
    </Body>
  );
};
