import { useState } from 'react'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ui', label: 'UI/UX' },
  ]
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product management, cart, and payment integration.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      demoLink: 'https://example.com',
      githubLink: 'https://github.com',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      category: 'web',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      demoLink: 'https://example.com',
      githubLink: 'https://github.com',
      featured: true,
    },
    {
      id: 3,
      title: 'Fitness Tracker Mobile App',
      description: 'A mobile application for tracking workouts, nutrition, and fitness progress.',
      image: 'https://images.unsplash.com/photo-1526502280058-b9e89df52747?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      category: 'mobile',
      technologies: ['React Native', 'Redux', 'Firebase'],
      demoLink: 'https://example.com',
      githubLink: 'https://github.com',
      featured: false,
    },
    {
      id: 4,
      title: 'Portfolio Website Design',
      description: 'A modern portfolio website design for a professional photographer.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1755&q=80',
      category: 'ui',
      technologies: ['Figma', 'Adobe XD', 'Photoshop'],
      demoLink: 'https://example.com',
      githubLink: null,
      featured: false,
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays current and forecasted weather data for multiple locations.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1765&q=80',
      category: 'web',
      technologies: ['JavaScript', 'OpenWeather API', 'Chart.js'],
      demoLink: 'https://example.com',
      githubLink: 'https://github.com',
      featured: false,
    },
    {
      id: 6,
      title: 'Restaurant Booking App',
      description: 'A mobile app for booking restaurant tables and ordering food in advance.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80',
      category: 'mobile',
      technologies: ['Flutter', 'Firebase', 'Google Maps API'],
      demoLink: 'https://example.com',
      githubLink: 'https://github.com',
      featured: false,
    },
  ]
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="bg-gray-50 dark:bg-secondary-dark">
      <div className="container-custom">
        <h2 className="section-title">My Projects</h2>
        
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === category.id
                  ? 'bg-primary text-white'
                  : 'bg-white dark:bg-dark-card hover:bg-gray-100 dark:hover:bg-secondary'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className={`card group overflow-hidden ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full flex justify-between items-center">
                    <div className="flex gap-2">
                      {project.githubLink && (
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                          aria-label="GitHub repository"
                        >
                          <Github size={18} className="text-white" />
                        </a>
                      )}
                      
                      {project.demoLink && (
                        <a 
                          href={project.demoLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                          aria-label="Live demo"
                        >
                          <ExternalLink size={18} className="text-white" />
                        </a>
                      )}
                    </div>
                    
                    <span className="text-sm text-white bg-primary px-3 py-1 rounded-full">
                      {project.category === 'web' ? 'Web App' : 
                       project.category === 'mobile' ? 'Mobile App' : 'UI/UX'}
                    </span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="text-xs px-3 py-1 bg-gray-100 dark:bg-secondary-light rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all"
              >
                View Project <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            View All Projects on GitHub <Github size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
