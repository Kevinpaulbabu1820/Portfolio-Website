import React, { useState, useMemo, memo } from 'react';

const TagButton = memo(function TagButton({ tag, active, onClick }) {
  return (
    <button
      key={tag}
      onClick={() => onClick(tag)}
      className={`text-sm px-3 py-1 rounded-full font-medium transition-colors duration-150 ${active ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-gray-200 hover:bg-gray-700'}`}
    >
      {tag}
    </button>
  );
});

const FilterPanel = ({ allTags, selectedTags, onToggleTag, matchAll, setMatchAll, sortOption, setSortOption }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Memoize filtered tags based on search query
  const filteredTags = useMemo(() => {
    return allTags.filter(tag => 
      tag.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [allTags, searchQuery]);

  // Optimize membership checks for selected tags
  const selectedTagSet = useMemo(() => new Set(selectedTags), [selectedTags]);

  // Determine if we need to show expand/collapse functionality
  const shouldCollapse = allTags.length > 4;
  
  // Get visible tags based on expand state
  const visibleTags = useMemo(() => {
    if (!shouldCollapse || isExpanded) return filteredTags;
    return filteredTags.slice(0, 4);
  }, [filteredTags, shouldCollapse, isExpanded]);

  return (
    <div className="max-w-6xl mx-auto my-6 flex flex-col gap-4">
      {shouldCollapse && (
        <div className="relative">
          <input
            type="text"
            placeholder="Search tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-64 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      )}
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {visibleTags.map((tag) => (
            <TagButton key={tag} tag={tag} active={selectedTagSet.has(tag)} onClick={onToggleTag} />
          ))}
          
          {shouldCollapse && filteredTags.length > 4 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-sm px-3 py-1 rounded-full font-medium bg-gray-700 text-gray-200 hover:bg-gray-600 transition-colors duration-150"
            >
              {isExpanded ? 'Show Less' : `+${filteredTags.length - 4} More`}
            </button>
          )}
        </div>

        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 text-sm text-gray-300">
            <input 
              type="checkbox" 
              checked={matchAll} 
              onChange={(e) => setMatchAll(e.target.checked)} 
              className="w-4 h-4" 
            />
            <span>Match all tags</span>
          </label>

          <select 
            value={sortOption} 
            onChange={(e) => setSortOption(e.target.value)} 
            className="bg-gray-800 border border-gray-700 text-gray-200 rounded-md py-2 px-3"
          >
            <option value="relevance">Relevance</option>
            <option value="alpha-asc">Title A→Z</option>
            <option value="alpha-desc">Title Z→A</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
