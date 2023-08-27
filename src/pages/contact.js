import React from "react";
import Footer from "@/components/Footer/Footer";
import Form from "@/components/Form/Form";
import Headerform from "@/components/Headerform/Headerform";
const contact = () => {
  return (
    <div>
      <Headerform />
      <div className="space-y-10 p-7 bg-[rgb(27,27,27)]">
        <Form />
      </div>
      <Footer />
    </div>
  );
};

export default contact;
