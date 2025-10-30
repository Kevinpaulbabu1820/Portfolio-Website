import React from 'react'

const SearchBar = ({ value, onChange, placeholder = 'Search projects...' }) => {
  return (
    <div className="max-w-3xl mx-auto w-full">
      <label className="relative block">
        <span className="sr-only">Search</span>
        <input
          className="placeholder-gray-400/70 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-full py-3 pl-10 pr-4 text-white"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          type="search"
        />
        <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 absolute left-3 top-3 text-gray-300 pointer-events-none" aria-hidden>
          <path d="M8.5 15a6.5 6.5 0 1 1 4.6-11.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13.5 13.5L18 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </label>
    </div>
  )
}

export default SearchBar
