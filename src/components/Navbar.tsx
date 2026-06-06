import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X, Cpu, Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith('vi') ? 'en' : 'vi';
    i18n.changeLanguage(newLang);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { name: t('navbar.home'), href: '#home' },
    { name: t('navbar.about'), href: '#about' },
    { name: t('navbar.skills'), href: '#skills' },
    { name: t('navbar.projects'), href: '#projects' },
    { name: t('navbar.experience'), href: '#experience' },
    { name: t('navbar.contact'), href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 dark:bg-dark-bg/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <nav className="container-custom py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 text-xl font-bold text-primary">
          <Cpu size={28} />
          <span>AI Portfolio</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="font-medium hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-secondary-light hover:bg-gray-200 dark:hover:bg-secondary transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full font-bold bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
            aria-label="Toggle language"
          >
            <Globe size={18} />
            <span className="text-sm">{i18n.language?.startsWith('vi') ? 'EN' : 'VI'}</span>
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-secondary-light hover:bg-gray-200 dark:hover:bg-secondary transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button 
            onClick={toggleLanguage}
            className="p-2 rounded-full font-bold bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
            aria-label="Toggle language"
          >
            <span className="text-sm">{i18n.language?.startsWith('vi') ? 'EN' : 'VI'}</span>
          </button>
          
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-secondary-light transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white dark:bg-dark-bg shadow-lg transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'
      }`}>
        <ul className="container-custom flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="block py-2 font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navbar
