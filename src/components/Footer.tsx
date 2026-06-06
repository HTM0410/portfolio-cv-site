import { Cpu, Heart, ArrowUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()
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
            <Cpu size={24} className="text-primary" />
            <span>AI Portfolio</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            <a href="#home" className="hover:text-primary transition-colors">{t('navbar.home')}</a>
            <a href="#about" className="hover:text-primary transition-colors">{t('navbar.about')}</a>
            <a href="#skills" className="hover:text-primary transition-colors">{t('navbar.skills')}</a>
            <a href="#projects" className="hover:text-primary transition-colors">{t('navbar.projects')}</a>
            <a href="#experience" className="hover:text-primary transition-colors">{t('navbar.experience')}</a>
            <a href="#contact" className="hover:text-primary transition-colors">{t('navbar.contact')}</a>
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
            &copy; {new Date().getFullYear()} Trương Minh Hoàng. All rights reserved.
          </p>
          
          <p className="flex items-center gap-1 text-gray-400">
            Phát triển với <Heart size={16} className="text-primary" /> tại Việt Nam
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
