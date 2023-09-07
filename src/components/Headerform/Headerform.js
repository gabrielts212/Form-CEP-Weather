import React from "react";
import Image from "next/image";
import Link from "next/link";
const Headerform = () => {
  return (
    <div>
      <header className="bg-blue-500 p-4 text-white text-center flex justify-between items-center">
        <div>
          <Link href="/">
            <Image src="/favicon.ico" alt="Logo" width={50} height={50} />
          </Link>
        </div>
        <div>
        <Link href="/contact"> <h1 className="text-2xl font-semibold text-3xl font-bold ">
            Formulário
          </h1>
          </Link>
         
        </div>
        <div className="text-blue-500  ">
          <p></p>
        </div>
      </header>
    </div>
  );
};

export default Headerform;
