import { Github, Facebook, Mail, ScanFace, Eye, BrainCircuit } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const yText = useTransform(scrollYProgress, [0, 1], [0, -50])
  const yImage = useTransform(scrollYProgress, [0, 1], [0, 50])
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 0.9])

  return (
    <motion.section 
      ref={ref}
      id="home" 
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
      style={{ opacity }}
    >
      {/* High-tech dynamic backgrounds */}
      <div className="grid-pattern"></div>
      <div className="glow-effect top-1/4 left-1/4"></div>
      <div className="glow-effect bottom-1/4 right-1/4 bg-primary-light/10"></div>
      
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent dark:from-primary/10 dark:to-dark-bg -z-10"
        style={{ y }}
      />
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ y: yText }}
          >
            <div className="space-y-6">
              <motion.div 
                className="flex items-center gap-3 badge w-max px-4 py-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <BrainCircuit size={16} />
                <span className="text-sm font-semibold tracking-wider uppercase">{t('hero.greeting')}</span>
              </motion.div>
              
              <motion.h1 
                className="font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400"
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <span className="block text-4xl md:text-5xl lg:text-6xl mb-2">{t('hero.name')}</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400 text-5xl md:text-6xl lg:text-6xl drop-shadow-sm pb-2">
                  {t('hero.role')}
                </span>
                <span className="block text-3xl md:text-4xl lg:text-4xl text-gray-500 dark:text-gray-400 mt-2">
                  Computer Vision
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {t('hero.description')}
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.a 
                  href="#projects" 
                  className="btn btn-primary group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ScanFace size={20} className="group-hover:animate-pulse" />
                  {t('hero.cta')}
                </motion.a>
                <motion.a 
                  href="#contact" 
                  className="btn btn-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('hero.contact')}
                </motion.a>
              </motion.div>
              
              <motion.div 
                className="flex gap-5 pt-8 items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">Kết nối</span>
                <div className="h-px w-12 bg-gray-300 dark:bg-gray-700"></div>
                <div className="flex gap-4">
                  {[
                    { icon: Github, link: "https://github.com", label: "GitHub" },
                    { icon: Facebook, link: "https://www.facebook.com/hoang.truongminh.108", label: "Facebook" },
                    { icon: Mail, link: "mailto:hoangtruongminh22@gmail.com", label: "Email" }
                  ].map((social, i) => (
                    <motion.a 
                      key={i}
                      href={social.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2.5 rounded-full bg-white dark:bg-dark-card shadow-md hover:shadow-primary/30 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all" 
                      aria-label={social.label}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon size={22} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 flex justify-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ y: yImage, scale: scaleImage }}
          >
            <div className="relative z-10 animate-float">
              {/* Decorative elements behind image */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-blue-600 blur-2xl opacity-40 dark:opacity-60 scale-110 -z-10"></div>
              <div className="absolute -inset-4 rounded-full border border-primary/30 animate-[spin_10s_linear_infinite] border-dashed"></div>
              
              <motion.div 
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-dark-card overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Simulated scanning effect line */}
                <motion.div 
                  className="absolute left-0 right-0 h-1 bg-primary/80 shadow-[0_0_10px_rgba(14,165,233,0.8)] z-20"
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                />
                
                <img 
                  src="/images/photo_id.png" 
                  alt="Truong Minh Hoang" 
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 card-glass px-6 py-4 flex items-center gap-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <div className="p-3 bg-primary/20 rounded-xl text-primary">
                  <Eye size={24} />
                </div>
                <div>
                  <div className="text-2xl font-black text-gray-800 dark:text-white">GPA</div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">3.85 / 4.0<br/>ĐH Bách Khoa</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Hero
