import { ArrowDown, Github, Linkedin, Twitter, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-gray-100 dark:from-dark-bg dark:to-secondary-dark">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-primary"></div>
                <p className="text-lg font-medium">Hello, I'm</p>
              </div>
              
              <h1 className="font-bold leading-tight">
                <span className="block">John Doe</span>
                <span className="text-primary">Web Developer</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg">
                I build exceptional and accessible digital experiences for the web.
                Specialized in modern JavaScript frameworks and responsive design.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="btn btn-primary">
                  Contact Me
                </a>
                <a href="#projects" className="btn btn-outline">
                  View Projects
                </a>
              </div>
              
              <div className="flex gap-4 pt-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary hover:text-primary transition-colors" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary hover:text-primary transition-colors" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary hover:text-primary transition-colors" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="mailto:contact@example.com" className="p-2 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary hover:text-primary transition-colors" aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/10 dark:bg-primary/20 overflow-hidden border-4 border-primary/30">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="John Doe" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-dark-card p-3 rounded-lg shadow-lg">
                <div className="text-primary font-bold text-xl">5+</div>
                <div className="text-sm">Years of<br />Experience</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
          <a 
            href="#about" 
            className="animate-bounce-slow p-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
