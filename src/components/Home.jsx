import React from 'react'

const Home = () => {
	return (
		  <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white bg-clip-text  leading-right">
            Hi, I'm Kevin
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            A passionate Full-Stack Developer specializing in building
            exceptional digital experiences. Currently, I'm focused on
            developing responsive web applications. 
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-cyan-950 text-white py-3 px-6 rounded font-bold transition-all duration-200 overflow-hidden
             shadow-[0_0_20px_4px_rgba(34,211,238,0.7)] 
             hover:shadow-[0_0_40px_8px_rgba(34,211,238,1)]
             hover:-translate-y-0.5
             focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-white py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-cyan-500"
            >
              Contact Me
            </a>
          </div>
        </div>
    </section>
	)
}

export default Home
