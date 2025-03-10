import React from "react";
import ContactForm from "../../Components/ContactForm";

const Contact = () => {
  return (
    <section className="py-16">
      <h2 className="text-ruby md:text-3xl text-2xl font-bold text-center mb-8">Get in Touch</h2>
      <div className="flex flex-wrap justify-center gap-10">
        <div className="space-y-4">
          <h3 className="md:text-lg text-md font-semibold">Contact Information</h3>
          <p>
            📍 Jl. Cisitu Indah VI No.255, Dago, Kecamatan Coblong, Kota Bandung, Jawa Barat 401351
            <br />
            📞 +62 859 3669 2189
            <br />
            ✉️ rubitalent@gmail.com
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
