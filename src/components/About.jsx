import React from "react";

export const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-black py-20 px-6 md:px-16"
    >
      {/* Left Side: Profile Card */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full flex flex-col items-center mb-10 md:mb-0 md:mr-12">
        <img
          src="../assets/profile.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg mb-4 object-cover"
        />
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Kevin Paul Babu</h2>
        <h3 className="text-blue-600 text-lg mb-3">Software Engineer</h3>
      </div>

      {/* Right Side: About Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>

        <p className="text-gray-200 mb-6">
          Software Engineer with 2 years of experience in full-stack development,
          specializing in JavaScript (ES6+) and Python. Skilled in building responsive,
          high-quality applications, implementing REST APIs, and automating workflows.
          Experienced in Agile environments, Git/GitHub version control, and collaborative
          code reviews. Proven ability to improve system performance, reduce errors,
          and deliver solutions adopted by 100+ users. Passionate about continuous
          learning and applying emerging technologies to drive business efficiency.
        </p>

        <p className="text-gray-200 mb-6">
          With a strong foundation in both front-end and back-end development,
          I enjoy turning complex problems into simple, beautiful, and intuitive
          solutions. When I'm not coding, you can find me exploring new technologies
          and contributing to open-source projects.
        </p>
      </div>
    </section>
  );
};
