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
            📍 123 Talent Street, New York, NY 10001
            <br />
            📞 +1 (555) 123-4567
            <br />
            ✉️ contact@talentcore.com
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
