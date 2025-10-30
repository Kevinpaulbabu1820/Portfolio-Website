import React from 'react'

export const Navbar = () => {
  return (
    <header className="fixed w-full top-4 z-50">
      <div className="max-w-6xl mx-auto px-4">
  <nav className="bg-black/60 backdrop-blur-sm rounded-full px-6 py-3 flex items-center justify-between shadow-lg">
          {/* Name / logo on the left */}
          <a href="#home" className="flex items-center gap-2 text-white font-bold text-lg hover:opacity-90">
            <span className="rounded-full w-10 h-10 bg-blue-400 flex items-center justify-center text-black font-black">K</span>
            <span>Kevin Paul</span>
          </a>

          {/* Navigation on the right (hidden on small screens) */}
          <div className="hidden sm:flex items-center space-x-6">
            
            <a href="#about" className="text-gray-300 hover:text-white transition-all duration-150">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-all duration-150">Projects</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-all duration-150">Skills</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-all duration-150">Contact</a>
          </div>

               </nav>
      </div>
    </header>
  )
}
