import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
  <footer className="bg-linear-to-r from-gray-900 via-neutral-900 to-indigo-900 text-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-3 items-start">
          {/* Left: branding */}
          <div className="space-y-3">
            <a href="#" className="inline-flex items-center gap-3 text-2xl font-bold text-white hover:opacity-90">
              <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white text-sm font-semibold">KP</span>
              <span>Kevin Paul Babu</span>
            </a>
            <p className="text-sm text-gray-300">Frontend developer focused on building accessible, performant web experiences.</p>
            <a href="mailto:kevinpaulbabu1820@gmail.com" className="text-sm text-indigo-200 hover:underline">kevinpaulbabu1820@gmail.com</a>
          </div>

       
          {/* Right: social icons */}
          <div className="flex md:justify-end items-center gap-3">
            <a href="https://github.com/Kevinpaulbabu1820" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition transform hover:-translate-y-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M12 .5C5.73.5.75 5.48.75 11.77c0 4.93 3.19 9.1 7.61 10.57.56.1.76-.24.76-.54 0-.27-.01-1.16-.02-2.1-3.09.67-3.74-1.49-3.74-1.49-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.07-.67.07-.67 1.09.08 1.67 1.12 1.67 1.12.97 1.66 2.55 1.18 3.17.9.1-.7.38-1.18.69-1.45-2.47-.28-5.06-1.24-5.06-5.5 0-1.21.43-2.2 1.12-2.98-.11-.28-.49-1.42.11-2.96 0 0 .92-.29 3.02 1.13a10.44 10.44 0 012.75-.37c.93.01 1.87.13 2.75.37 2.09-1.42 3.01-1.13 3.01-1.13.61 1.54.23 2.68.12 2.96.7.78 1.12 1.77 1.12 2.98 0 4.27-2.6 5.22-5.07 5.5.39.34.73 1.01.73 2.03 0 1.46-.01 2.64-.01 3C19.06 20.86 22.25 16.7 22.25 11.77 22.25 5.48 17.27.5 12 .5z"/>
              </svg>
            </a>

            <a href="https://www.linkedin.com/in/kevin-paul-babu-737b28187/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition transform hover:-translate-y-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.849-3.037-1.85 0-2.133 1.444-2.133 2.94v5.666H9.355V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.369-1.849 3.602 0 4.268 2.37 4.268 5.455v6.285zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 010 4.124zM6.814 20.452H3.861V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
            </a>

            <a href="https://twitter.com/KevinPaulBabu1" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition transform hover:-translate-y-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.38 4.482A13.94 13.94 0 011.671 3.149a4.916 4.916 0 001.523 6.574A4.9 4.9 0 01.964 9.1v.062a4.916 4.916 0 003.946 4.814 4.996 4.996 0 01-2.212.084 4.918 4.918 0 004.588 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.057 0 14.01-7.506 14.01-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-gray-300">
          <p className="w-full text-center">© {year} Kevin Paul Babu. All rights reserved.</p>

        </div>
      </div>
    </footer>
  )
}

export default Footer