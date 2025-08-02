import { Code2, Globe, Cpu, Lightbulb, Download, Mail, Phone, MapPin, Calendar, User, Flag, Languages } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.section 
      ref={ref}
      id="about" 
      className="bg-gray-50 dark:bg-secondary-dark relative overflow-hidden"
      style={{ opacity }}
    >
      {/* Background parallax effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
      />
      
      <div className="container-custom relative z-10">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -30]) }}
        >
          About Me
        </motion.h2>
        
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Personal Information Card */}
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ y }}
            className="lg:col-span-1"
          >
            <div className="bg-white dark:bg-dark-card rounded-xl shadow-lg p-6 sticky top-24">
              <motion.h3 
                className="text-xl font-bold mb-6 text-primary"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                Personal Information
              </motion.h3>
              
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <User size={20} className="text-primary" />
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Name</span>
                    <p className="font-medium">Truong Minh Hoang</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <Calendar size={20} className="text-primary" />
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Birthday</span>
                    <p className="font-medium">04/10/2004</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <User size={20} className="text-primary" />
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Gender</span>
                    <p className="font-medium">Male</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <Flag size={20} className="text-primary" />
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Nationality</span>
                    <p className="font-medium">Viet Nam</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <MapPin size={20} className="text-primary" />
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Address</span>
                    <p className="font-medium">Dong Da, Ha Noi</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <Phone size={20} className="text-primary" />
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Phone</span>
                    <p className="font-medium">0986122511</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <Mail size={20} className="text-primary" />
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Email</span>
                    <p className="font-medium">hoangtruongminh22@gmail.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <Languages size={20} className="text-primary" />
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Languages</span>
                    <p className="font-medium">Vietnamese, English</p>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.a 
                  href="/resume.pdf" 
                  className="btn btn-primary w-full flex items-center justify-center gap-2" 
                  download
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={20} />
                  Download CV
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Main Content */}
          <motion.div 
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
          >
            <motion.h3 
              className="text-2xl font-bold"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              A passionate Web Developer based in <span className="text-primary">Ha Noi, Vietnam</span>
            </motion.h3>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              I'm a full-stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Node.js, Express, MongoDB, HTML, CSS, and more.
            </motion.p>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              My journey in web development started 5 years ago, and I've been continuously learning and improving my skills. I enjoy solving complex problems and turning ideas into reality through elegant and efficient code.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 gap-4 pt-4"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div 
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ scale: 1.05, x: 5 }}
              >
                <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-md text-primary">
                  <Code2 size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Web Development</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Full-stack expertise</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ scale: 1.05, x: 5 }}
              >
                <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-md text-primary">
                  <Globe size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Responsive Design</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Mobile-first approach</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ scale: 1.05, x: 5 }}
              >
                <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-md text-primary">
                  <Cpu size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">API Integration</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">RESTful & GraphQL</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ scale: 1.05, x: 5 }}
              >
                <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-md text-primary">
                  <Lightbulb size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Problem Solving</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Analytical thinking</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default About
