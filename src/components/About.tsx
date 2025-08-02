import { Code2, Globe, Cpu, Lightbulb } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="bg-gray-50 dark:bg-secondary-dark">
      <div className="container-custom">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80" 
                alt="Developer working" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary p-4 rounded-lg shadow-lg hidden md:block">
                <div className="text-white font-mono text-sm">
                  <div>const developer = {`{`}</div>
                  <div className="pl-4">passion: true,</div>
                  <div className="pl-4">coffee: true,</div>
                  <div className="pl-4">sleep: false</div>
                  <div>{`}`};</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              A passionate Web Developer based in <span className="text-primary">Ho Chi Minh City, Vietnam</span>
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300">
              I'm a full-stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Node.js, Express, MongoDB, HTML, CSS, and more.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300">
              My journey in web development started 5 years ago, and I've been continuously learning and improving my skills. I enjoy solving complex problems and turning ideas into reality through elegant and efficient code.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-2">
                <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-md text-primary">
                  <Code2 size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Web Development</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Full-stack expertise</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-md text-primary">
                  <Globe size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Responsive Design</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Mobile-first approach</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-md text-primary">
                  <Cpu size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">API Integration</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">RESTful & GraphQL</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-md text-primary">
                  <Lightbulb size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Problem Solving</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Analytical thinking</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <a href="/resume.pdf" className="btn btn-outline" download>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
