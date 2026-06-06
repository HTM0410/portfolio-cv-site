import { Download, Mail, Phone, MapPin, Calendar, User, BookOpen, Layers, Scan, Code, Server, CheckCircle2 } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -50])
  const yTitle = useTransform(scrollYProgress, [0, 1], [0, -30])
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 50])

  return (
    <motion.section 
      ref={ref}
      id="about" 
      className="bg-gray-50 dark:bg-secondary-dark relative overflow-hidden"
      style={{ opacity }}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/5 dark:from-primary/10 dark:to-transparent"
        style={{ y: yBg }}
      />
      
      <div className="container-custom relative z-10">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ y: yTitle }}
        >
          {t('about.title')}
        </motion.h2>
        
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Personal Information Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ y }}
            className="lg:col-span-1"
          >
            <div className="card-glass p-8 sticky top-24">
              <motion.h3 
                className="text-xl font-bold mb-8 text-primary"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {t('about.personal_info')}
              </motion.h3>
              
              <div className="space-y-5">
                {[
                  { icon: User, label: t('about.fullname'), value: "Trương Minh Hoàng" },
                  { icon: BookOpen, label: t('about.university'), value: t('about.val_university') },
                  { icon: Layers, label: t('about.major'), value: t('about.val_major') },
                  { icon: MapPin, label: t('about.address'), value: t('about.val_address') },
                  { icon: Phone, label: t('about.phone'), value: "0986 122 511" },
                  { icon: Mail, label: t('about.email'), value: "hoangtruongminh22@gmail.com" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-4 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">{item.label}</span>
                      <p className="font-semibold text-sm md:text-base text-gray-800 dark:text-gray-200">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <motion.a 
                  href="/CV_TRƯƠNG MINH HOÀNG.pdf" 
                  className="btn btn-primary w-full flex items-center justify-center gap-2" 
                  download="CV_TRƯƠNG MINH HOÀNG.pdf"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={20} />
                  {t('about.download_cv')}
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Main Content */}
          <motion.div 
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ y: yContent }}
          >
            <motion.h3 
              className="text-3xl md:text-4xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {t('about.headline')}
            </motion.h3>
            
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                {t('about.paragraph1')}
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {t('about.paragraph2')}
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                {t('about.paragraph3')}
              </motion.p>
            </div>
            
            <motion.div 
              className="grid sm:grid-cols-2 gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              {[
                { 
                  icon: Scan, 
                  title: t('about.skills.cv.title'), 
                  desc: t('about.skills.cv.desc') 
                },
                { 
                  icon: CheckCircle2, 
                  title: t('about.skills.dl.title'), 
                  desc: t('about.skills.dl.desc') 
                },
                { 
                  icon: Server, 
                  title: t('about.skills.backend.title'), 
                  desc: t('about.skills.backend.desc') 
                },
                { 
                  icon: Layers, 
                  title: t('about.skills.rag.title'), 
                  desc: t('about.skills.rag.desc') 
                }
              ].map((skill, index) => (
                <motion.div 
                  key={index}
                  className="card-glass p-5 flex items-start gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-xl text-primary shrink-0">
                    <skill.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{skill.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{skill.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default About
