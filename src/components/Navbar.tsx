import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X, Code } from 'lucide-react'

interface NavbarProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 dark:bg-dark-bg/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <nav className="container-custom py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 text-xl font-bold text-primary">
          <Code size={28} />
          <span>DevPortfolio</span>
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
