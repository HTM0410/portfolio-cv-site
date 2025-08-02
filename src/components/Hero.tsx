import { Github, Linkedin, Mail } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Hero = () => {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <motion.section 
      ref={ref}
      id="home" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-gray-100 dark:from-dark-bg dark:to-secondary-dark relative overflow-hidden"
      style={{ opacity }}
    >
      {/* Background parallax effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
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
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
          >
            <div className="space-y-6">
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="h-1 w-12 bg-primary"></div>
                <p className="text-lg font-medium">Hello, I'm</p>
              </motion.div>
              
              <motion.h1 
                className="font-bold leading-tight"
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <span className="block">Truong Minh Hoang</span>
                <span className="text-primary">Web Developer</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                I build exceptional and accessible digital experiences for the web.
                Specialized in modern JavaScript frameworks and responsive design.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.a 
                  href="#contact" 
                  className="btn btn-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.a>
                <motion.a 
                  href="#projects" 
                  className="btn btn-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.a>
              </motion.div>
              
              <motion.div 
                className="flex gap-4 pt-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary hover:text-primary transition-colors" 
                  aria-label="GitHub"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} />
                </motion.a>
                <motion.a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary hover:text-primary transition-colors" 
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a 
                  href="mailto:hoangtruongminh22@gamil.com" 
                  className="p-2 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary hover:text-primary transition-colors" 
                  aria-label="Email"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={20} />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ 
              y: useTransform(scrollYProgress, [0, 1], [0, 50]),
              scale: useTransform(scrollYProgress, [0, 1], [1, 0.9])
            }}
          >
            <div className="relative">
              <motion.div 
                className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/10 dark:bg-primary/20 overflow-hidden border-4 border-primary/30"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/images/photo_id.jpg" 
                  alt="Truong Minh Hoang" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-white dark:bg-dark-card p-3 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0, x: 30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="text-primary font-bold text-xl">0+</div>
                <div className="text-sm">Years of<br />Experience</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Hero
