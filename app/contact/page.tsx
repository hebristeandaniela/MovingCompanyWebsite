import React from "react";
import HeaderContact from "./components/HeaderContact";
import Form from "./components/Form"; 

const Contact = () => {
  return (
    <div className="bg-white text-gray-800">
    {/* HEADER */}
    <HeaderContact />

    {/* MAP & CONTACT INFO */}
    <section className="py-16 px-6 md:px-20 flex flex-col lg:flex-row gap-12 items-start">
      {/* MAP */}
      <div className="w-full lg:w-1/2 h-80 rounded-xl shadow-md overflow-hidden">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d169.87130624121542!2d21.926745588316486!3d47.06100966096111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474647de469d1fb3%3A0xb7c16530cfd52e42!2sRO%20ET%20CO%20INTERNATIONAL%20S.A.!5e0!3m2!1sro!2sro!4v1744658993433!5m2!1sro!2sro" width="600" height="450"  loading="lazy" ></iframe>
      </div>

      {/* CONTACT INFO */}
      <div className="w-full lg:w-1/2 space-y-5">
        <h2 className="text-3xl font-bold">Cum ne găsești?</h2>
        <p className="text-gray-600">
          Suntem mereu bucuroși să discutăm! Vizitează-ne, sună-ne sau trimite-ne un mesaj.
        </p>
        <div className="space-y-2 text-lg">
          <p><strong>📍 Adresă:</strong> Strada Szigligeti Ede 1, Oradea 410008</p>
          <p><strong>📞 Telefon:</strong> ‪+40 745 123 456‬</p>
          <p><strong>✉ Email:</strong> contact@roeco.ro</p>
        </div>
      </div>
    </section>

    {/* CONTACT FORM */}
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-gray-50 p-10 rounded-2xl shadow-md">
       
        <Form />
      </div>
    </section>

 
  </div>
);
};

export default Contact;
