import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
const Header = () => {
  return (
    <div>
      <header className="bg-blue-500 p-4 text-white text-center flex justify-between items-center">
        <div>
          <Link href="/">
            <Image
              src="/favicon.ico" // Caminho da imagem na pasta "public"
              alt="Logo"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-3xl font-bold ">Previsão do Tempo</h1>
        </div>
        <div className="text-blue-500  ">
          <p></p>
        </div>
      </header>
    </div>
  )
}

export default Header


// import React from 'react';

// const Header = () => {
//   return (
//     <header className="bg-gray-800 text-white py-4">
//       <div className="flex items-center justify-between mx-auto max-w-4xl px-4">
//         <div>
//           <img
//             src="/logo.png"  // Substitua pelo caminho da sua imagem
//             alt="Logo"
//             className="w-10 h-10"
//           />
//         </div>
//         <div className="text-center">
//           <h1 className="text-2xl font-semibold">Bem-vindo ao Meu Site</h1>
//         </div>
//         <div></div> {/* Para adicionar elementos adicionais, se necessário */}
//       </div>
//     </header>
//   );
// };

// export default Header;
