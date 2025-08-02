import { useState } from 'react'

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend')
  
  const tabs = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools & Others' },
  ]
  
  const skills = {
    frontend: [
      { name: 'HTML5', level: 95, icon: '🌐' },
      { name: 'CSS3/SCSS', level: 90, icon: '🎨' },
      { name: 'JavaScript', level: 92, icon: '📜' },
      { name: 'TypeScript', level: 85, icon: '📘' },
      { name: 'React', level: 90, icon: '⚛️' },
      { name: 'Vue.js', level: 80, icon: '🟢' },
      { name: 'Redux', level: 85, icon: '🔄' },
      { name: 'Tailwind CSS', level: 88, icon: '🌊' },
      { name: 'Next.js', level: 82, icon: '▲' },
    ],
    backend: [
      { name: 'Node.js', level: 88, icon: '🟩' },
      { name: 'Express', level: 85, icon: '🚂' },
      { name: 'MongoDB', level: 80, icon: '🍃' },
      { name: 'PostgreSQL', level: 75, icon: '🐘' },
      { name: 'Firebase', level: 82, icon: '🔥' },
      { name: 'GraphQL', level: 78, icon: '⬢' },
      { name: 'REST API', level: 90, icon: '🔌' },
    ],
    tools: [
      { name: 'Git/GitHub', level: 90, icon: '🐙' },
      { name: 'Docker', level: 75, icon: '🐳' },
      { name: 'Jest', level: 80, icon: '🃏' },
      { name: 'Webpack', level: 78, icon: '📦' },
      { name: 'VS Code', level: 95, icon: '💻' },
      { name: 'Figma', level: 85, icon: '🎨' },
      { name: 'CI/CD', level: 75, icon: '🔄' },
      { name: 'AWS', level: 70, icon: '☁️' },
    ],
  }

  return (
    <section id="skills" className="bg-white dark:bg-dark-bg">
      <div className="container-custom">
        <h2 className="section-title">My Skills</h2>
        
        <div className="mb-8 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === tab.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-secondary-light hover:bg-gray-200 dark:hover:bg-secondary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills[activeTab as keyof typeof skills].map((skill) => (
            <div key={skill.name} className="card hover:border-l-4 hover:border-primary">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="font-semibold">{skill.name}</h3>
                </div>
                <span className="text-primary font-bold">{skill.level}%</span>
              </div>
              
              <div className="w-full bg-gray-200 dark:bg-secondary-light rounded-full h-2.5">
                <div 
                  className="bg-primary h-2.5 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-6 bg-gray-50 dark:bg-secondary-light rounded-xl">
          <h3 className="text-xl font-bold mb-4">Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">English</span>
                <span>Professional</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-secondary rounded-full h-2.5">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">Vietnamese</span>
                <span>Native</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-secondary rounded-full h-2.5">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">Japanese</span>
                <span>Basic</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-secondary rounded-full h-2.5">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
