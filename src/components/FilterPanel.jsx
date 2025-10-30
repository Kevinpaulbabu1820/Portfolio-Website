import React from 'react'

const FilterPanel = ({ allTags, selectedTags, onToggleTag, matchAll, setMatchAll, sortOption, setSortOption }) => {
  return (
    <div className="max-w-6xl mx-auto my-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div className="flex flex-wrap gap-2">
        {allTags.map((tag) => {
          const active = selectedTags.includes(tag)
          return (
            <button
              key={tag}
              onClick={() => onToggleTag(tag)}
              className={`text-sm px-3 py-1 rounded-full font-medium transition-colors duration-150 ${active ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-gray-200 hover:bg-gray-700'}`}
            >
              {tag}
            </button>
          )
        })}
      </div>

      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2 text-sm text-gray-300">
          <input type="checkbox" checked={matchAll} onChange={(e) => setMatchAll(e.target.checked)} className="w-4 h-4" />
          <span>Match all tags</span>
        </label>

        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="bg-gray-800 border border-gray-700 text-gray-200 rounded-md py-2 px-3">
          <option value="relevance">Relevance</option>
          <option value="alpha-asc">Title A→Z</option>
          <option value="alpha-desc">Title Z→A</option>
        </select>
      </div>
    </div>
  )
}

export default FilterPanel
