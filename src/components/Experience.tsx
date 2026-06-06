import { Briefcase, GraduationCap, Calendar, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Experience = () => {
  const { t } = useTranslation()
  const workExperience = [
    {
      id: 1,
      title: t('experience.work_items.vnpt_ai.title'),
      company: t('experience.work_items.vnpt_ai.company'),
      location: t('experience.location'),
      period: t('experience.work_items.vnpt_ai.date'),
      description: t('experience.work_items.vnpt_ai.desc'),
      skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'YOLOv8', 'LLM', 'RAG'],
    },
    {
      id: 2,
      title: t('experience.work_items.vnpt_net.title'),
      company: t('experience.work_items.vnpt_net.company'),
      location: t('experience.location'),
      period: t('experience.work_items.vnpt_net.date'),
      description: t('experience.work_items.vnpt_net.desc'),
      skills: ['Java', 'Spring Boot', 'Oracle Database', 'Testing', 'System Optimization'],
    },
  ]
  
  const education = [
    {
      id: 1,
      degree: t('experience.edu_items.hust.title'),
      institution: t('about.val_university'),
      location: t('experience.location'),
      period: t('experience.edu_items.hust.date'),
      description: t('experience.edu_items.hust.desc'),
    },
  ]
  
  const certifications = [
    {
      id: 1,
      name: t('experience.cert_items.dl.title'),
      issuer: 'Coursera - DeepLearning.AI',
      date: t('experience.cert_items.dl.date'),
      link: '#',
    },
    {
      id: 2,
      name: t('experience.cert_items.toeic.title'),
      issuer: 'IIG Vietnam',
      date: t('experience.cert_items.toeic.date'),
      link: '#',
    },
  ]

  const activities = [
    {
      id: 1,
      role: t('experience.act_items.debate.title'),
      organization: t('experience.act_items.debate.company'),
    }
  ]

  return (
    <section id="experience" className="bg-gray-50 dark:bg-dark-bg relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="container-custom">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {t('experience.title')}
        </motion.h2>
        
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div 
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold">{t('experience.work')}</h3>
            </motion.div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-primary/50 before:to-transparent">
              {workExperience.map((job, idx) => (
                <motion.div 
                  key={job.id} 
                  className="relative pl-12"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-0 top-1 w-10 h-10 bg-white dark:bg-dark-bg border-4 border-primary/30 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(14,165,233,0.3)]">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="card-glass p-6 group hover:border-primary/50 transition-colors">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">{job.title}</h4>
                      <div className="flex items-center gap-1 text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                        <Calendar size={14} />
                        <span>{job.period}</span>
                      </div>
                    </div>
                    
                    <div className="text-gray-600 dark:text-gray-400 font-medium mb-4 flex items-center gap-2">
                      <span>{job.company}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                      <span>{job.location}</span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {job.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <span 
                          key={index} 
                          className="text-xs font-medium px-2.5 py-1 bg-white/50 dark:bg-secondary-light/50 border border-gray-200 dark:border-gray-700 rounded text-gray-700 dark:text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="flex items-center gap-3 mt-16 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold">{t('experience.education')}</h3>
            </motion.div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/50 before:to-transparent">
              {education.map((edu) => (
                <motion.div 
                  key={edu.id} 
                  className="relative pl-12"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-0 top-1 w-10 h-10 bg-white dark:bg-dark-bg border-4 border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  </div>
                  
                  <div className="card-glass p-6">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                      <div className="flex items-center gap-1 text-sm bg-gray-100 dark:bg-secondary-light text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full">
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
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="card-glass p-8 sticky top-24">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <span className="w-8 h-1 bg-primary rounded-full"></span>
                {t('experience.certificate')}
              </h3>
              
              <div className="space-y-6">
                {certifications.map((cert) => (
                  <div key={cert.id} className="border-l-2 border-transparent hover:border-primary pl-4 transition-colors">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{cert.name}</h4>
                    <div className="text-sm text-gray-500 mb-2">
                      {cert.issuer}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-8 h-1 bg-primary rounded-full"></span>
                  {t('experience.activities')}
                </h3>
                <div className="space-y-4">
                  {activities.map((act) => (
                    <div key={act.id} className="flex gap-3 items-start">
                      <div className="mt-1 text-primary"><Award size={16} /></div>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">{act.role}</div>
                        <div className="text-sm text-gray-500">{act.organization}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience
