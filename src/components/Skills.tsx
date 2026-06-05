import { motion } from 'framer-motion'
import { Brain, Code, Cpu, Eye, Layers, Server, Activity, Target, Zap, Maximize } from 'lucide-react'

const Skills = () => {
  const coreCompetencies = [
    { 
      name: 'Computer Vision', 
      description: 'YOLOv8, OpenCV, Image Segmentation, Object Detection',
      icon: <Eye className="text-cyan-400" size={24} />
    },
    { 
      name: 'Machine Learning & Deep Learning', 
      description: 'PyTorch, Scikit-learn, xây dựng mô hình CNN',
      icon: <Brain className="text-purple-400" size={24} />
    },
    { 
      name: 'Generative AI & LLM', 
      description: 'LangChain, Retrieval-Augmented Generation (RAG)',
      icon: <Layers className="text-emerald-400" size={24} />
    },
    { 
      name: 'Web Development', 
      description: 'Phát triển Full-stack với React, Node.js, Spring Boot',
      icon: <Server className="text-yellow-400" size={24} />
    },
  ]

  const techCategories = [
    {
      id: 'ai-ml',
      title: 'AI / Machine Learning',
      icon: <Brain size={20} />,
      color: 'from-purple-500/20 to-fuchsia-500/20',
      borderColor: 'group-hover:border-purple-400/50',
      skills: ['PyTorch', 'Scikit-learn', 'YOLOv8', 'OpenCV', 'Computer Vision', 'RAG', 'LangChain'],
    },
    {
      id: 'languages',
      title: 'Ngôn ngữ / Công cụ',
      icon: <Code size={20} />,
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'group-hover:border-blue-400/50',
      skills: ['Python', 'Java', 'SQL', 'Git', 'Docker'],
    },
    {
      id: 'backend',
      title: 'Backend & Cơ sở dữ liệu',
      icon: <Server size={20} />,
      color: 'from-emerald-500/20 to-teal-500/20',
      borderColor: 'group-hover:border-emerald-400/50',
      skills: ['Node.js', 'Express.js', 'Spring Boot', 'PostgreSQL', 'Redis'],
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <Target size={20} />,
      color: 'from-orange-500/20 to-red-500/20',
      borderColor: 'group-hover:border-orange-400/50',
      skills: ['React', 'TypeScript', 'Vite'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } },
  }

  return (
    <section id="skills" className="relative bg-[#050814] dark:bg-[#050814] py-24 overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      
      {/* Dynamic Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10"></div>
      
      <div className="container-custom">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-medium text-sm mb-6"
          >
            <Activity size={16} />
            <span>Kho vũ khí công nghệ</span>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold mb-6 text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Năng Lực <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Chuyên Môn</span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, delay: 0.2 }}
          >
            Cấu trúc công nghệ bao quát từ việc xây dựng các mô hình AI/Computer Vision chuyên sâu đến phát triển và tích hợp hệ thống Web hoàn chỉnh.
          </motion.p>
        </div>
        
        {/* Bento Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Cột trái: Core Competencies (Bento Style) */}
          <motion.div 
            className="lg:col-span-4 flex flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[50px] group-hover:bg-cyan-500/20 transition-colors duration-500"></div>
              
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Brain className="text-cyan-400" /> Cốt Lõi
              </h3>
              
              <div className="space-y-6 relative z-10">
                {coreCompetencies.map((comp, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={itemVariants}
                    className="flex gap-4 group/item"
                  >
                    <div className="mt-1 p-2 bg-white/5 rounded-xl border border-white/5 group-hover/item:border-cyan-500/30 group-hover/item:bg-cyan-500/10 transition-all duration-300">
                      {comp.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-200 group-hover/item:text-cyan-400 transition-colors">{comp.name}</h4>
                      <p className="text-sm text-gray-400 mt-1">{comp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Cột phải: Tech Stack (Bento Style) */}
          <motion.div 
            className="lg:col-span-8 grid sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {techCategories.map((category) => (
              <motion.div 
                key={category.id} 
                variants={itemVariants}
                className={`bg-gradient-to-br ${category.color} bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] ${category.borderColor}`}
              >
                <div className="flex items-center gap-3 mb-6 text-white">
                  <div className="p-2 bg-white/10 rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h4 className="font-bold text-xl">{category.title}</h4>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1.5 text-sm font-medium bg-black/40 border border-white/10 text-gray-300 rounded-xl shadow-sm group-hover:border-white/20 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}

export default Skills
