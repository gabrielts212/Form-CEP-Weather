import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Gabriel Nascimento. Todos os direitos reservados.
      
        </p>
      </div>
    </footer>
  );
};

export default Footer;
