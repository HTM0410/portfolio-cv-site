import { Briefcase, GraduationCap, Calendar } from 'lucide-react'

const Experience = () => {
  const workExperience = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      location: 'Ho Chi Minh City',
      period: 'Jan 2021 - Present',
      description: 'Lead the frontend development team in building modern web applications using React and TypeScript. Implemented responsive designs, optimized performance, and mentored junior developers.',
      skills: ['React', 'TypeScript', 'Redux', 'Next.js', 'Tailwind CSS'],
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      location: 'Remote',
      period: 'Mar 2019 - Dec 2020',
      description: 'Developed and maintained full-stack web applications using the MERN stack. Collaborated with designers and product managers to deliver high-quality software solutions.',
      skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'RESTful APIs'],
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'WebCraft Agency',
      location: 'Ho Chi Minh City',
      period: 'Jun 2017 - Feb 2019',
      description: 'Created responsive and interactive user interfaces for various client projects. Worked with design teams to implement pixel-perfect designs and ensure cross-browser compatibility.',
      skills: ['JavaScript', 'HTML5', 'CSS3/SCSS', 'jQuery', 'Bootstrap'],
    },
  ]
  
  const education = [
    {
      id: 1,
      degree: 'Master of Computer Science',
      institution: 'Vietnam National University',
      location: 'Ho Chi Minh City',
      period: '2015 - 2017',
      description: 'Specialized in Web Technologies and Software Engineering. Graduated with honors.',
    },
    {
      id: 2,
      degree: 'Bachelor of Computer Science',
      institution: 'Ho Chi Minh City University of Technology',
      location: 'Ho Chi Minh City',
      period: '2011 - 2015',
      description: 'Focused on Software Development and Database Management. Participated in various coding competitions.',
    },
  ]
  
  const certifications = [
    {
      id: 1,
      name: 'AWS Certified Developer - Associate',
      issuer: 'Amazon Web Services',
      date: 'Dec 2022',
      link: 'https://aws.amazon.com/certification/',
    },
    {
      id: 2,
      name: 'Professional Frontend Developer',
      issuer: 'Meta (formerly Facebook)',
      date: 'Aug 2021',
      link: 'https://www.coursera.org/professional-certificates/meta-front-end-developer',
    },
    {
      id: 3,
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: 'Mar 2020',
      link: 'https://university.mongodb.com/certification',
    },
  ]

  return (
    <section id="experience" className="bg-white dark:bg-dark-bg">
      <div className="container-custom">
        <h2 className="section-title">Experience</h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Briefcase size={24} className="text-primary" />
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gray-200 dark:before:bg-secondary-light">
              {workExperience.map((job) => (
                <div key={job.id} className="relative pl-12">
                  <div className="absolute left-0 top-1 w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center">
                    <div className="w-5 h-5 bg-primary rounded-full"></div>
                  </div>
                  
                  <div className="card">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h4 className="text-xl font-bold">{job.title}</h4>
                      <div className="flex items-center gap-1 text-sm bg-gray-100 dark:bg-secondary-light px-3 py-1 rounded-full">
                        <Calendar size={14} />
                        <span>{job.period}</span>
                      </div>
                    </div>
                    
                    <div className="text-primary font-medium mb-4">
                      {job.company} • {job.location}
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {job.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <span 
                          key={index} 
                          className="text-xs px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex items-center gap-2 mt-12 mb-6">
              <GraduationCap size={24} className="text-primary" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gray-200 dark:before:bg-secondary-light">
              {education.map((edu) => (
                <div key={edu.id} className="relative pl-12">
                  <div className="absolute left-0 top-1 w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center">
                    <div className="w-5 h-5 bg-primary rounded-full"></div>
                  </div>
                  
                  <div className="card">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h4 className="text-xl font-bold">{edu.degree}</h4>
                      <div className="flex items-center gap-1 text-sm bg-gray-100 dark:bg-secondary-light px-3 py-1 rounded-full">
                        <Calendar size={14} />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    
                    <div className="text-primary font-medium mb-4">
                      {edu.institution} • {edu.location}
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="card sticky top-24">
              <h3 className="text-xl font-bold mb-6">Certifications</h3>
              
              <div className="space-y-6">
                {certifications.map((cert) => (
                  <div key={cert.id} className="border-b border-gray-100 dark:border-secondary-light pb-4 last:border-0">
                    <h4 className="font-semibold mb-1">{cert.name}</h4>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      {cert.issuer} • {cert.date}
                    </div>
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      View Certificate
                    </a>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Languages</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>English</span>
                      <span className="text-primary">Professional</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-secondary rounded-full h-1.5">
                      <div className="bg-primary h-1.5 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Vietnamese</span>
                      <span className="text-primary">Native</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-secondary rounded-full h-1.5">
                      <div className="bg-primary h-1.5 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {['Web Development', 'UI/UX Design', 'Open Source', 'Tech Blogging', 'Photography', 'Hiking'].map((interest, index) => (
                    <span 
                      key={index} 
                      className="text-sm px-3 py-1 bg-gray-100 dark:bg-secondary-light rounded-full"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
