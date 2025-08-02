import { Code, Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="bg-secondary dark:bg-secondary-dark text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 text-xl font-bold mb-4 md:mb-0">
            <Code size={24} className="text-primary" />
            <span>DevPortfolio</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="p-3 bg-primary rounded-full hover:bg-primary-dark transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Truong Minh Hoang. All rights reserved.
          </p>
          
          <p className="flex items-center gap-1 text-gray-400">
            Made with <Heart size={16} className="text-primary" /> in Vietnam
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
