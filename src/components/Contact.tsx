import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="bg-gray-50 dark:bg-secondary-dark">
      <div className="container-custom">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Let's Talk About Your Project</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              I'm interested in freelance opportunities – especially ambitious or large projects. However, if you have other requests or questions, don't hesitate to contact me using the form.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-dark-card rounded-lg shadow-md text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href="mailto:hoangtruongminh22@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                    hoangtruongminh22@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-dark-card rounded-lg shadow-md text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a href="tel:+84986122511" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                    +84 986 122 511
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-dark-card rounded-lg shadow-md text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Dong Da, Ha Noi, Vietnam
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-white dark:bg-dark-card rounded-lg shadow-md text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-white dark:bg-dark-card rounded-lg shadow-md text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-white dark:bg-dark-card rounded-lg shadow-md text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="card">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg">
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-lg">
                  There was an error sending your message. Please try again.
                </div>
              )}
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Your Name
                  </label>
                                     <input
                     type="text"
                     id="name"
                     name="name"
                     value={formData.name}
                     onChange={handleChange}
                     required
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-secondary focus:outline-none focus:ring-2 focus:ring-primary dark:bg-secondary-light dark:text-white"
                     placeholder="Truong Minh Hoang"
                   />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Your Email
                  </label>
                                     <input
                     type="email"
                     id="email"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                     required
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-secondary focus:outline-none focus:ring-2 focus:ring-primary dark:bg-secondary-light dark:text-white"
                     placeholder="hoangtruongminh22@gmail.com"
                   />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium">
                    Subject
                  </label>
                                     <input
                     type="text"
                     id="subject"
                     name="subject"
                     value={formData.subject}
                     onChange={handleChange}
                     required
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-secondary focus:outline-none focus:ring-2 focus:ring-primary dark:bg-secondary-light dark:text-white"
                     placeholder="Web Development Project"
                   />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Your Message
                  </label>
                                     <textarea
                     id="message"
                     name="message"
                     value={formData.message}
                     onChange={handleChange}
                     required
                     rows={5}
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-secondary focus:outline-none focus:ring-2 focus:ring-primary dark:bg-secondary-light dark:text-white resize-none"
                     placeholder="Hello Truong Minh Hoang, I'd like to discuss a web development project..."
                   ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full flex justify-center items-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={18} className="ml-1" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
