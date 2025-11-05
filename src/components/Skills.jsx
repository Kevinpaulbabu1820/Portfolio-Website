
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGithub, FaDatabase, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiPostman, SiExpress, SiBootstrap, SiTypescript, SiNextdotjs, SiCursor, SiGithubcopilot } from 'react-icons/si';

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML5', icon: FaHtml5, proficiency: 90, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3Alt, proficiency: 85, color: '#1572B6' },
        { name: 'JavaScript (ES6+)', icon: FaJs, proficiency: 85, color: '#F7DF1E' },
        { name: 'TypeScript', icon: SiTypescript, proficiency: 80, color: '#3178C6' },
        { name: 'React', icon: FaReact, proficiency: 80, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, proficiency: 75, color: '#000000' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, proficiency: 85, color: '#06B6D4' },
        { name: 'Bootstrap', icon: SiBootstrap, proficiency: 80, color: '#7952B3' },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Python', icon: FaPython, proficiency: 64, color: '#3776AB' },
        { name: 'Node.js', icon: FaNode, proficiency: 75, color: '#339933' },
        { name: 'Express.js', icon: SiExpress, proficiency: 75, color: '#FFFFFF' },
        { name: 'MongoDB', icon: SiMongodb, proficiency: 70, color: '#47A248' },
        { name: 'REST APIs', icon: FaDatabase, proficiency: 80, color: '#2196F3' },
      ],
    },
    {
      title: 'Tools & Version Control',
      skills: [
        { name: 'Git & GitHub', icon: FaGithub, proficiency: 85, color: '#FFFFFF' },
        { name: 'Postman', icon: SiPostman, proficiency: 80, color: '#FF6C37' },
        { name: 'GitHub Copilot', icon: SiGithubcopilot, proficiency: 85, color: '#000000' },
        { name: 'Cursor', icon: SiCursor, proficiency: 80, color: '#00FF00' },
      ],
    },
  ];

  return (
    <section id='skills' className="skills-container p-8 bg-black rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Skills</h2>
      <div className="space-y-12">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-category">
            <h3 className="text-xl font-semibold mb-6 text-gray-300">{category.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.skills.map((skill, skillIdx) => (
                <div
                  key={skillIdx}
                  className="skill-card p-4 bg-black rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-800 hover:border-gray-700"
                  style={{
                    boxShadow: `0 4px 14px 0 rgba(${skill.color ? parseInt(skill.color.slice(1, 3), 16) : 0}, ${
                      skill.color ? parseInt(skill.color.slice(3, 5), 16) : 0
                    }, ${skill.color ? parseInt(skill.color.slice(5, 7), 16) : 0}, 0.1)`,
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <skill.icon className="text-2xl" style={{ color: skill.color }} />
                    <h4 className="font-medium text-gray-200">{skill.name}</h4>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div
                      className="h-2.5 rounded-full transition-all duration-500 ease-out"
                      style={{
                        width: `${skill.proficiency}%`,
                        backgroundColor: skill.color,
                        boxShadow: `0 0 10px ${skill.color}40`,
                      }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-400 mt-2 inline-block">
                    {skill.proficiency}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
