import { Download, Mail, Phone, MapPin, Calendar, User, BookOpen, Layers, Scan, Code, Server, CheckCircle2 } from 'lucide-react'
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
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -50])
  const yTitle = useTransform(scrollYProgress, [0, 1], [0, -30])
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 50])

  return (
    <motion.section 
      ref={ref}
      id="about" 
      className="bg-gray-50 dark:bg-secondary-dark relative overflow-hidden"
      style={{ opacity }}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/5 dark:from-primary/10 dark:to-transparent"
        style={{ y: yBg }}
      />
      
      <div className="container-custom relative z-10">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ y: yTitle }}
        >
          Về Bản Thân
        </motion.h2>
        
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Personal Information Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ y }}
            className="lg:col-span-1"
          >
            <div className="card-glass p-8 sticky top-24">
              <motion.h3 
                className="text-xl font-bold mb-8 text-primary"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Thông Tin Cá Nhân
              </motion.h3>
              
              <div className="space-y-5">
                {[
                  { icon: User, label: "Họ Tên", value: "Trương Minh Hoàng" },
                  { icon: BookOpen, label: "Đại học", value: "Đại học Bách khoa Hà Nội" },
                  { icon: Layers, label: "Ngành học", value: "Toán - Tin (Năm 4)" },
                  { icon: MapPin, label: "Địa Chỉ", value: "Đống Đa, Hà Nội" },
                  { icon: Phone, label: "Điện Thoại", value: "0986 122 511" },
                  { icon: Mail, label: "Email", value: "hoangtruongminh22@gmail.com" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-4 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">{item.label}</span>
                      <p className="font-semibold text-sm md:text-base text-gray-800 dark:text-gray-200">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <motion.a 
                  href="/resume.pdf" 
                  className="btn btn-primary w-full flex items-center justify-center gap-2" 
                  download
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={20} />
                  Tải Xuống CV
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Main Content */}
          <motion.div 
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ y: yContent }}
          >
            <motion.h3 
              className="text-3xl md:text-4xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Phát triển các hệ thống <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Trí tuệ Nhân tạo</span> thông minh.
            </motion.h3>
            
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Là sinh viên năm 4 chuyên ngành Toán - Tin tại Đại học Bách khoa Hà Nội, tôi có định hướng và niềm đam mê mãnh liệt với vị trí AI Engineer. Mong muốn lớn nhất của tôi là được đào sâu vào kiến thức Deep Learning, đặc biệt ở lĩnh vực Computer Vision và Xử lý ngôn ngữ tự nhiên (LLM, RAG).
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Tôi có khả năng nghiên cứu, học hỏi và triển khai các bài toán thực tế như phân đoạn ảnh, nhận diện khuôn mặt, phân tích hành vi và chống giả mạo khuôn mặt. Ngoài ra, tôi cũng có kinh nghiệm xây dựng các hệ thống Backend, Web Application để tích hợp và hiện thực hóa các mô hình AI.
              </motion.p>
            </div>
            
            <motion.div 
              className="grid sm:grid-cols-2 gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              {[
                { 
                  icon: Scan, 
                  title: "Computer Vision", 
                  desc: "Nhận diện khuôn mặt, phân đoạn ảnh (Segmentation), theo dõi đối tượng với YOLOv8, OpenCV." 
                },
                { 
                  icon: CheckCircle2, 
                  title: "Deep Learning", 
                  desc: "Xây dựng và tối ưu mô hình học sâu, áp dụng PyTorch, triển khai hệ thống." 
                },
                { 
                  icon: Server, 
                  title: "Backend & Web", 
                  desc: "Phát triển web full-stack, APIs với Node.js, Spring Boot, React." 
                },
                { 
                  icon: Layers, 
                  title: "RAG & LLM", 
                  desc: "Phát triển các ứng dụng chatbot thông minh, tích hợp RAG và LangChain." 
                }
              ].map((skill, index) => (
                <motion.div 
                  key={index}
                  className="card-glass p-5 flex items-start gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-xl text-primary shrink-0">
                    <skill.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{skill.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{skill.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default About
