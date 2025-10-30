import React, { useEffect, useMemo, useState } from 'react'
import SearchBar from './SearchBar'
import FilterPanel from './FilterPanel'


const projects = [
  {
    title: "Recipe Book",
    description: "A Recipe Book built with React and Tailwind CSS.",
    tags: ["React", "TailwindCSS","API"],
    github: "https://github.com/Kevinpaulbabu1820/Recipe-book",
    demo: "https://recipe-book-b6e7tvt4w-kevinpaulbabu1820s-projects.vercel.app/",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580"
  },
  {
    title: "Weather App",
    description: "A weather forecast app using OpenWeatherMap API.",
    tags: ["React", "API", "Weather"],
    github: "https://github.com/Kevinpaulbabu1820/WeatherApi",
    demo: "https://kevinpaulbabu1820.github.io/WeatherApi/",
    image: "https://plus.unsplash.com/premium_photo-1669809948017-518b5d800d73?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
  },
   {
    title: "Todo List App",
    description: "A Todo List App with Material UI and Reactjs",
    tags: ["React", "Material UI", "Todo"],
    github: "https://github.com/Kevinpaulbabu1820/TodoReact-App",
    demo: "https://todo-react-app-eight-beige.vercel.app/",
    image: "https://plus.unsplash.com/premium_photo-1683309556192-d024cd55a9ee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9kbyUyMGxpc3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
  },
   {
    title: "Top 3 Historical Places",
    description: "My Favorite historical places in India.",
    tags: ["HTML", "CSS"],
    github: "https://github.com/Kevinpaulbabu1820/historical-india.github.io",
    demo: "https://kevinpaulbabu1820.github.io/historical-india.github.io/",
    image: "https://plus.unsplash.com/premium_photo-1661885523029-fc960a2bb4f3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
  },
   {
    title: "Car Parking System",
    description: "A Simple car parking system using HTML ,CSS and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript","Bootstrap"],
    github: "https://github.com/Kevinpaulbabu1820/CarParking-JS",
    demo: "https://car-parking-js.vercel.app/",
    image: "https://plus.unsplash.com/premium_photo-1661902046698-40bba703f396?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwcGFya2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
  },
   {
    title: "More projects coming soon",
    description: " ",
    tags: [""],
    github: "https://github.com",
    demo: "https://google.com",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
  }
  // Add more projects as needed
];

const Projects = () => {
  const [search, setSearch] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [selectedTags, setSelectedTags] = useState([])
  const [matchAll, setMatchAll] = useState(false)
  const [sortOption, setSortOption] = useState('relevance')

  // debounce search input
  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(search.trim()), 300)
    return () => clearTimeout(t)
  }, [search])

  const allTags = useMemo(() => {
    const s = new Set()
    projects.forEach((p) => p.tags.forEach((t) => s.add(t)))
    return Array.from(s)
  }, [])

  const onToggleTag = (tag) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  const filtered = useMemo(() => {
    const q = debouncedSearch.toLowerCase()

    const matchesSearch = (p) => {
      if (!q) return true
      return (p.title + ' ' + p.description + ' ' + (p.tags || []).join(' ')).toLowerCase().includes(q)
    }

    const matchesTags = (p) => {
      if (!selectedTags || selectedTags.length === 0) return true
      const has = selectedTags.map((t) => p.tags.includes(t))
      return matchAll ? has.every(Boolean) : has.some(Boolean)
    }

    let out = projects.filter((p) => matchesSearch(p) && matchesTags(p))

    if (sortOption === 'alpha-asc') out = out.slice().sort((a, b) => a.title.localeCompare(b.title))
    if (sortOption === 'alpha-desc') out = out.slice().sort((a, b) => b.title.localeCompare(a.title))

    return out
  }, [debouncedSearch, selectedTags, matchAll, sortOption])

  return (
    <section id='projects' className="py-12 px-4 bg-black  min-h-screen">
      <h2 className="text-4xl font-bold mb-6 text-center">Projects</h2>

      <div className="space-y-4 max-w-6xl mx-auto">
        <SearchBar value={search} onChange={setSearch} placeholder="Search by title, description or tag..." />

        <FilterPanel
          allTags={allTags}
          selectedTags={selectedTags}
          onToggleTag={onToggleTag}
          matchAll={matchAll}
          setMatchAll={setMatchAll}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />

        <div className="text-sm text-gray-300">Showing <span className="font-semibold text-white">{filtered.length}</span> of {projects.length} projects</div>

        {filtered.length === 0 && (
          <div className="bg-gray-850 border border-gray-700 rounded-lg p-6 text-center text-gray-300">No projects match your filters.</div>
        )}

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, idx) => (
            <div key={idx} className="group perspective">
              <div className="relative bg-gray-900 rounded-xl shadow-xl transform transition-transform duration-500 group-hover:rotate-y-12 group-hover:-rotate-x-6 group-hover:scale-105" style={{ perspective: '1200px' }}>
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-xl" />
                <div className="p-6 flex flex-col h-56">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bg-linear-to-r from-indigo-500 to-purple-500 text-xs px-2 py-1 rounded text-white font-semibold shadow">{tag}</span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-5">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-lg text-center font-bold transition-colors duration-200 shadow">
                      Code
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded-lg text-center font-bold transition-colors duration-200 shadow">
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects