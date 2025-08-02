import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Skill {
  name: string
  level: number
  icon: string
}

interface SkillsData {
  [key: string]: Skill[]
}

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend')
  
  const tabs = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools & Others' },
  ]
  
  const skills: SkillsData = {
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
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === tab.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-secondary-light hover:bg-gray-200 dark:hover:bg-secondary'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {skills[activeTab]?.map((skill, index) => (
              <motion.div 
                key={skill.name} 
                className="card hover:border-l-4 hover:border-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className="font-semibold">{skill.name}</h3>
                  </div>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-gray-200 dark:bg-secondary-light rounded-full h-2.5">
                  <motion.div 
                    className="bg-primary h-2.5 rounded-full" 
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Skills
