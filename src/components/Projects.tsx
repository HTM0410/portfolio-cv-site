import { useState } from 'react'
import { ExternalLink, Github, Activity } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  
  const categories = [
    { id: 'all', label: 'Tất cả Dự án' },
    { id: 'ai', label: 'AI & Computer Vision' },
    { id: 'web', label: 'Web Development' },
  ]
  
  const projects = [
    {
      id: 1,
      title: 'Hệ Thống Re-Identification Cầu Thủ Bóng Đá',
      description: 'Xây dựng pipeline Detection → Tracking → ReID để theo dõi và duy trì định danh cầu thủ. Sử dụng YOLOv8 phát hiện cầu thủ, BoT-SORT theo dõi đối tượng, mô hình ReID giảm hiện tượng đổi ID (ID Switch) khi bị che khuất.',
      image: '/images/football.png',
      category: 'ai',
      technologies: ['Python', 'YOLOv8', 'BoT-SORT', 'PyTorch', 'OpenCV'],
      demoLink: '#',
      githubLink: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Hệ Thống Nhận Diện Nguyên Liệu Từ Hình Ảnh',
      description: 'Hệ thống nhận diện 65 loại nguyên liệu thực phẩm đạt mAP@50 > 80% (tốc độ suy luận < 100ms) phục vụ gợi ý công thức nấu ăn tự động, được tích hợp vào ứng dụng CookSmart.',
      image: '/images/food.png',
      category: 'ai',
      technologies: ['Python', 'YOLOv8', 'PyTorch', 'OpenCV'],
      demoLink: '#',
      githubLink: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Chatbot AI Hỗ Trợ Nấu Ăn Sử Dụng RAG',
      description: 'Chatbot AI hỗ trợ tra cứu công thức, tư vấn nguyên liệu và hướng dẫn chế biến. Tích hợp pipeline RAG (Intent Detection, Retrieval, Response Gen) giúp giảm hiện tượng hallucination.',
      image: '/images/chatbot.png',
      category: 'ai',
      technologies: ['LangChain', 'RAG', 'Vector Database', 'LLM', 'FastAPI'],
      demoLink: '#',
      githubLink: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'CookSmart – Website Gợi ý Công Thức Nấu Ăn',
      description: 'Ứng dụng web full-stack gợi ý công thức nấu ăn dựa trên nguyên liệu. Cung cấp API tài liệu hóa qua Swagger, áp dụng rate limiting, bảo mật JWT và realtime qua Socket.IO.',
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80',
      category: 'web',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Socket.IO'],
      demoLink: '#',
      githubLink: '#',
      featured: false,
    },
  ]
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="bg-white dark:bg-dark-bg relative">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="container-custom">
        <motion.div 
          className="flex justify-between items-end mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="section-title mb-4">Các Dự Án Tiêu Biểu</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl">Tuyển tập những dự án nổi bật nhất của tôi từ lĩnh vực nhận diện hình ảnh chuyên sâu, Chatbot thông minh cho đến các ứng dụng Web toàn diện.</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="mb-10 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full transition-all border ${
                filter === category.id
                  ? 'bg-primary text-white border-primary shadow-[0_0_15px_rgba(14,165,233,0.3)]'
                  : 'bg-transparent text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-primary/50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>
        
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id} 
                className="card-glass group overflow-hidden flex flex-col h-full"
              >
                <div className="relative overflow-hidden rounded-t-xl -mx-6 -mt-6 mb-6 h-64 shrink-0">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <a href={project.githubLink} className="p-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors" aria-label="GitHub">
                        <Github size={20} />
                      </a>
                      <a href={project.demoLink} className="p-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors" aria-label="Live Demo">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="badge shadow-lg bg-white/90 dark:bg-dark-card/90">
                      {project.category === 'ai' ? 'AI & Vision' : 'Web Dev'}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs font-medium px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded border border-gray-200 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline group">
            Xem Toàn Bộ Trên GitHub <Activity size={18} className="group-hover:animate-pulse" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
