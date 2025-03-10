import React from "react";

const ContactForm = () => {
  return (
    <form className="bg-white p-4 rounded-2xl shadow-md w-full max-w-md">
      <div className="space-y-2">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border rounded-md  ring-0 focus:ring-1"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded-md  ring-0 focus:ring-1"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full p-2 border rounded-md  ring-0 focus:ring-1"
        />
        <textarea
          placeholder="Message"
          rows={4}
          className="w-full p-2 border rounded-md  ring-0 focus:ring-1"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-ruby text-white py-2 rounded-md"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
