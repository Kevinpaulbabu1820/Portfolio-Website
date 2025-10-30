import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-black text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">Contact Me</h1>
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
          {/* Google Map */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-md h-80 rounded-lg overflow-hidden shadow-lg border border-gray-700">
              <iframe
                title="Google Map"
                className="w-full h-full border-0"
                frameBorder="0"
                src="https://www.google.com/maps/embed/v1/place?q=Valamkottil+Lane&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
            <form
              className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col gap-4 border border-gray-700"
              action="https://getform.io/f/dfa2886b-6ec7-438f-9284-75f30af1e06b"
              method="POST"
            >
              <input
                type="text"
                name="name"
                className="form-input px-4 py-2 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                className="form-input px-4 py-2 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Email"
                required
              />
              <input
                type="text"
                name="subject"
                className="form-input px-4 py-2 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Subject"
              />
              <textarea
                name="text"
                rows="5"
                className="form-textarea px-4 py-2 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Project Details"
                required
              ></textarea>
              <button
                type="submit"
                className="mt-2 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Contact Me
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
