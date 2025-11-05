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
  title: "Saint Charles Borromeo",
  description: "A responsive website dedicated to Saint Charles Borromeo",
  tags: ["HTML", "CSS", "Javascript", "Vercel"],
  github: "https://github.com/Kevinpaulbabu1820/saint-charles-borromeo-website",
  demo: "https://saint-charles-borromeo-website.vercel.app/",
  image: "data:image/jpeg;base64,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"
},
 {
  title: "Login/Sign Up Form",
  description: "A login/sign up form built using Next.js and Typescript with form validation",
  tags: ["NextJS", "TailwindCSS", "TypeScript", "Vercel"],
  github: "https://github.com/Kevinpaulbabu1820/Login-Signup-Form",
  demo: "https://login-signup-form-np3q.vercel.app/",
  image: "https://images.unsplash.com/photo-1762330472502-83efbe1d4478?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9naW4lMjBmb3JtfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
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
                <div className="overflow-hidden rounded-t-xl">
                  <img src={project.image} alt={project.title} className="block w-full h-48 object-cover" />
                </div>
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