import type { Language } from '../types/language'

export const siteContent = {
  vi: {
    navbar: {
      brand: 'AI Portfolio',
      links: [
        { name: 'Trang chủ', href: '#home' },
        { name: 'Về tôi', href: '#about' },
        { name: 'Kỹ năng', href: '#skills' },
        { name: 'Dự án', href: '#projects' },
        { name: 'Kinh nghiệm', href: '#experience' },
        { name: 'Liên hệ', href: '#contact' },
      ],
      toggleDarkMode: 'Bật/tắt chế độ tối',
      toggleMenu: 'Bật/tắt menu',
      languageToggle: 'Chuyển ngôn ngữ',
    },
    hero: {
      badge: 'Sinh viên Đại học Bách khoa Hà Nội',
      name: 'Trương Minh Hoàng',
      role: 'AI Engineer Intern',
      focus: 'Computer Vision',
      description:
        'Đam mê đào sâu kiến thức về Deep Learning và Computer Vision. Mục tiêu là phát triển các hệ thống phân đoạn ảnh, nhận diện và phân tích hành vi trong môi trường thực tế.',
      primaryCta: 'Xem Các Dự Án',
      secondaryCta: 'Liên Hệ Ngay',
      connect: 'Kết nối',
      gpaLabel: 'GPA',
      gpaSubtext: '3.85 / 4.0',
      gpaSchool: 'ĐH Bách Khoa',
    },
    about: {
      sectionTitle: 'Về Bản Thân',
      cardTitle: 'Thông Tin Cá Nhân',
      info: [
        { label: 'Họ Tên', value: 'Trương Minh Hoàng' },
        { label: 'Đại học', value: 'Đại học Bách khoa Hà Nội' },
        { label: 'Ngành học', value: 'Toán - Tin (Năm 4)' },
        { label: 'Địa Chỉ', value: 'Đống Đa, Hà Nội' },
        { label: 'Điện Thoại', value: '0986 122 511' },
        { label: 'Email', value: 'hoangtruongminh22@gmail.com' },
      ],
      downloadLabel: 'Tải Xuống CV',
      downloadFileName: 'CV_TRƯƠNG MINH HOÀNG.pdf',
      headingPrefix: 'Phát triển các hệ thống',
      headingHighlight: 'Trí tuệ Nhân tạo',
      headingSuffix: 'thông minh.',
      paragraphs: [
        'Là sinh viên năm cuối chuyên ngành Toán – Tin tại Đại học Bách khoa Hà Nội, tôi định hướng phát triển sự nghiệp trong lĩnh vực Trí tuệ nhân tạo với trọng tâm là Computer Vision và Generative AI.',
        'Tôi có kinh nghiệm nghiên cứu và triển khai các bài toán AI như phân loại ảnh (Image Classification), phát hiện đối tượng (Object Detection), theo dõi đa đối tượng (Multi-Object Tracking), Re-Identification (ReID) và chatbot sử dụng Retrieval-Augmented Generation (RAG). Đồng thời, tôi có khả năng xây dựng Backend và Web Application để tích hợp, triển khai và vận hành các hệ thống AI trong môi trường thực tế.',
        'Mục tiêu của tôi là trở thành AI Engineer, tham gia phát triển các sản phẩm AI có khả năng giải quyết những bài toán thực tiễn và tạo ra giá trị cho người dùng.',
      ],
      highlights: [
        {
          title: 'Computer Vision',
          desc: 'Phân loại ảnh, phát hiện đối tượng, theo dõi đa đối tượng và Re-Identification bằng YOLOv8, ByteTrack, OpenCV.',
        },
        {
          title: 'Deep Learning',
          desc: 'Xây dựng, huấn luyện và tối ưu mô hình Deep Learning với PyTorch, CNN và Transfer Learning.',
        },
        {
          title: 'Backend & Deployment',
          desc: 'Phát triển API, Backend và tích hợp mô hình AI bằng Node.js, Spring Boot, FastAPI.',
        },
        {
          title: 'RAG & LLM',
          desc: 'Xây dựng chatbot AI sử dụng RAG, Vector Database, LangChain và LLM.',
        },
      ],
    },
    skills: {
      badge: 'Kho vũ khí công nghệ',
      titlePrefix: 'Năng Lực',
      titleHighlight: 'Chuyên Môn',
      description:
        'Cấu trúc công nghệ bao quát từ việc xây dựng các mô hình AI/Computer Vision chuyên sâu đến phát triển và tích hợp hệ thống Web hoàn chỉnh.',
      coreTitle: 'Cốt Lõi',
      coreCompetencies: [
        {
          name: 'Computer Vision',
          description: 'YOLOv8, OpenCV, Image Segmentation, Object Detection',
        },
        {
          name: 'Machine Learning & Deep Learning',
          description: 'PyTorch, Scikit-learn, xây dựng mô hình CNN',
        },
        {
          name: 'Generative AI & LLM',
          description: 'LangChain, Retrieval-Augmented Generation (RAG)',
        },
        {
          name: 'Web Development',
          description: 'Phát triển Full-stack với React, Node.js, Spring Boot',
        },
      ],
      categories: [
        {
          id: 'ai-ml',
          title: 'AI / Machine Learning',
          skills: ['PyTorch', 'Scikit-learn', 'YOLOv8', 'OpenCV', 'Computer Vision', 'RAG', 'LangChain'],
        },
        {
          id: 'languages',
          title: 'Ngôn ngữ / Công cụ',
          skills: ['Python', 'Java', 'SQL', 'Git', 'Docker'],
        },
        {
          id: 'backend',
          title: 'Backend & Cơ sở dữ liệu',
          skills: ['Node.js', 'Express.js', 'Spring Boot', 'PostgreSQL', 'Redis'],
        },
        {
          id: 'frontend',
          title: 'Frontend Development',
          skills: ['React', 'TypeScript', 'Vite'],
        },
      ],
    },
    projects: {
      sectionTitle: 'Các Dự Án Tiêu Biểu',
      sectionDescription:
        'Tuyển tập những dự án nổi bật nhất của tôi từ lĩnh vực nhận diện hình ảnh chuyên sâu, chatbot thông minh cho đến các ứng dụng web toàn diện.',
      categories: [
        { id: 'all', label: 'Tất cả Dự án' },
        { id: 'vision', label: 'Computer Vision' },
        { id: 'genai', label: 'Generative AI' },
        { id: 'web', label: 'Web Development' },
      ],
      badgeLabels: {
        vision: 'Computer Vision',
        genai: 'Generative AI',
        web: 'Web Dev',
      },
      projects: [
        {
          id: 1,
          title: 'Hệ Thống Re-Identification Cầu Thủ Bóng Đá',
          description:
            'Xây dựng pipeline Detection → Tracking → ReID để theo dõi và duy trì định danh cầu thủ. Sử dụng YOLOv8 phát hiện cầu thủ, BoT-SORT theo dõi đối tượng, mô hình ReID giảm hiện tượng đổi ID khi bị che khuất.',
        },
        {
          id: 2,
          title: 'Hệ Thống Nhận Diện Nguyên Liệu Từ Hình Ảnh',
          description:
            'Hệ thống nhận diện 65 loại nguyên liệu thực phẩm đạt mAP@50 > 80% với thời gian suy luận dưới 100ms, phục vụ gợi ý công thức nấu ăn tự động cho CookSmart.',
        },
        {
          id: 3,
          title: 'Chatbot AI Hỗ Trợ Nấu Ăn Sử Dụng RAG',
          description:
            'Chatbot AI hỗ trợ tra cứu công thức, tư vấn nguyên liệu và hướng dẫn chế biến. Tích hợp pipeline RAG gồm nhận diện ý định, truy xuất và sinh phản hồi để giảm hallucination.',
        },
        {
          id: 4,
          title: 'CookSmart – Website Gợi ý Công Thức Nấu Ăn',
          description:
            'Ứng dụng web full-stack gợi ý công thức nấu ăn dựa trên nguyên liệu, có Swagger, rate limiting, bảo mật JWT và realtime qua Socket.IO.',
        },
      ],
    },
    experience: {
      sectionTitle: 'Kinh Nghiệm & H��c Vấn',
      workTitle: 'Kinh nghiệm Làm việc',
      educationTitle: 'Học vấn',
      certificationsTitle: 'Chứng chỉ',
      activitiesTitle: 'Hoạt động',
      workExperience: [
        {
          title: 'AI Engineer Intern',
          company: 'Công ty VNPT AI',
          location: 'Hà Nội',
          period: '2026',
          description:
            'Nghiên cứu kiến thức nền tảng về Machine Learning, Deep Learning và Computer Vision. Xây dựng các mô hình nhận dạng hình ảnh và phân tích dữ liệu. Thực hiện các dự án CV bằng CNN, YOLOv8 và OpenCV. Tối ưu mô hình AI cho ứng dụng thực tế. Tích hợp LLM và RAG.',
        },
        {
          title: 'Thực tập sinh (Software)',
          company: 'Tổng Công ty Hạ tầng mạng VNPT Net',
          location: 'Hà Nội',
          period: '2025',
          description:
            'Tham gia phát triển và tối ưu hệ thống quản lý hạ tầng mạng nội bộ. Làm việc với Java, Spring Boot và Oracle Database trong môi trường doanh nghiệp. Thực hiện bảo trì, kiểm thử và nâng cao hiệu năng các chức năng hệ thống.',
        },
      ],
      education: [
        {
          degree: 'Sinh viên chuyên ngành Toán - Tin (Năm 4)',
          institution: 'Đại học Bách khoa Hà Nội',
          location: 'Hà Nội',
          period: '2022 - Nay',
          description:
            'CPA: 2.82/4 | GPA: 3.85/4. Đạt học bổng khuyến khích học tập kỳ 2025.2. Tập trung vào nền tảng toán học ứng dụng cho Trí tuệ Nhân tạo và Khoa học Dữ liệu.',
        },
      ],
      certifications: [
        { name: 'Neural Networks & Deep Learning', issuer: 'Coursera - DeepLearning.AI', date: 'Hoàn thành' },
        { name: 'Chứng chỉ tiếng Anh TOEIC 580', issuer: 'IIG Vietnam', date: 'Hoàn thành' },
      ],
      activities: [
        { role: 'Phó chủ nhiệm', organization: 'CLB Tranh biện HUST' },
        { role: 'Trưởng Ban Tổ chức', organization: 'HUST Debate Open Champion' },
        { role: 'Phó Ban Tổ chức', organization: 'Talkshow "Giao lộ"' },
      ],
    },
    contact: {
      sectionTitle: 'Kết Nối Với Tôi',
      introTitle: 'Sẵn Sàng Hợp Tác',
      introDescription:
        'Tôi luôn cởi mở với các cơ hội làm việc trong lĩnh vực AI/ML, hợp tác nghiên cứu, hoặc các dự án dữ liệu đầy tham vọng. Nếu bạn cần xây dựng hệ thống AI, ứng dụng tích hợp LLM hoặc giải pháp phân tích hình ảnh chuyên sâu, hãy liên hệ với tôi.',
      labels: {
        email: 'Email',
        phone: 'Điện thoại',
        address: 'Địa chỉ',
        channels: 'Các Kênh Khác',
        formTitle: 'Gửi Lời Nhắn',
        name: 'Họ Tên',
        userEmail: 'Email của bạn',
        subject: 'Chủ đề',
        message: 'Nội dung',
      },
      addressValue: 'Đống Đa, Hà Nội, Việt Nam',
      placeholders: {
        name: 'Ví dụ: Nguyễn Văn A',
        email: 'hoangtruongminh22@gmail.com',
        subject: 'Hợp tác phát triển AI',
        message: 'Xin chào Hoàng, tôi đang tìm kiếm một kỹ sư AI để...',
      },
      status: {
        success: 'Tin nhắn của bạn đã được gửi thành công! Tôi sẽ phản hồi sớm nhất có thể.',
        error: 'Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại.',
        sending: 'Đang gửi...',
        submit: 'Gửi Lời Nhắn',
      },
    },
    footer: {
      brand: 'AI Portfolio',
      links: ['Trang chủ', 'Về tôi', 'Kỹ năng', 'Dự án', 'Kinh nghiệm', 'Liên hệ'],
      copyright: 'Mọi quyền được bảo lưu.',
      builtWithPrefix: 'Phát triển với',
      builtWithSuffix: 'tại Việt Nam',
      scrollTop: 'Cuộn lên đầu trang',
    },
  },
  en: {
    navbar: {
      brand: 'AI Portfolio',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
      ],
      toggleDarkMode: 'Toggle dark mode',
      toggleMenu: 'Toggle menu',
      languageToggle: 'Switch language',
    },
    hero: {
      badge: 'Student at Hanoi University of Science and Technology',
      name: 'Truong Minh Hoang',
      role: 'AI Engineer Intern',
      focus: 'Computer Vision',
      description:
        'Passionate about deepening my expertise in Deep Learning and Computer Vision, with the goal of building image segmentation, recognition, and behavior analysis systems for real-world environments.',
      primaryCta: 'View Projects',
      secondaryCta: 'Contact Me',
      connect: 'Connect',
      gpaLabel: 'GPA',
      gpaSubtext: '3.85 / 4.0',
      gpaSchool: 'HUST',
    },
    about: {
      sectionTitle: 'About Me',
      cardTitle: 'Personal Information',
      info: [
        { label: 'Full Name', value: 'Truong Minh Hoang' },
        { label: 'University', value: 'Hanoi University of Science and Technology' },
        { label: 'Major', value: 'Mathematics and Computer Science (4th year)' },
        { label: 'Location', value: 'Dong Da, Hanoi' },
        { label: 'Phone', value: '0986 122 511' },
        { label: 'Email', value: 'hoangtruongminh22@gmail.com' },
      ],
      downloadLabel: 'Download CV',
      downloadFileName: 'CV_TRƯƠNG MINH HOÀNG.pdf',
      headingPrefix: 'Building',
      headingHighlight: 'Artificial Intelligence',
      headingSuffix: 'systems that create impact.',
      paragraphs: [
        'I am a final-year Mathematics and Computer Science student at Hanoi University of Science and Technology, pursuing a career in Artificial Intelligence with a focus on Computer Vision and Generative AI.',
        'My experience includes researching and implementing AI tasks such as image classification, object detection, multi-object tracking, Re-Identification, and Retrieval-Augmented Generation chatbots. I can also build backend services and web applications to integrate and operate AI systems in real-world environments.',
        'My goal is to become an AI Engineer who develops practical AI products that solve meaningful problems and create value for users.',
      ],
      highlights: [
        {
          title: 'Computer Vision',
          desc: 'Image classification, object detection, multi-object tracking, and Re-Identification with YOLOv8, ByteTrack, and OpenCV.',
        },
        {
          title: 'Deep Learning',
          desc: 'Building, training, and optimizing deep learning models with PyTorch, CNNs, and transfer learning.',
        },
        {
          title: 'Backend & Deployment',
          desc: 'Developing APIs, backend services, and AI integrations with Node.js, Spring Boot, and FastAPI.',
        },
        {
          title: 'RAG & LLM',
          desc: 'Building AI chatbots with RAG, vector databases, LangChain, and LLMs.',
        },
      ],
    },
    skills: {
      badge: 'Technology arsenal',
      titlePrefix: 'Technical',
      titleHighlight: 'Capabilities',
      description:
        'A technology stack spanning advanced AI and Computer Vision model development to full web system integration and delivery.',
      coreTitle: 'Core Strengths',
      coreCompetencies: [
        {
          name: 'Computer Vision',
          description: 'YOLOv8, OpenCV, image segmentation, object detection',
        },
        {
          name: 'Machine Learning & Deep Learning',
          description: 'PyTorch, Scikit-learn, and CNN model development',
        },
        {
          name: 'Generative AI & LLM',
          description: 'LangChain and Retrieval-Augmented Generation (RAG)',
        },
        {
          name: 'Web Development',
          description: 'Full-stack development with React, Node.js, and Spring Boot',
        },
      ],
      categories: [
        {
          id: 'ai-ml',
          title: 'AI / Machine Learning',
          skills: ['PyTorch', 'Scikit-learn', 'YOLOv8', 'OpenCV', 'Computer Vision', 'RAG', 'LangChain'],
        },
        {
          id: 'languages',
          title: 'Languages / Tools',
          skills: ['Python', 'Java', 'SQL', 'Git', 'Docker'],
        },
        {
          id: 'backend',
          title: 'Backend & Databases',
          skills: ['Node.js', 'Express.js', 'Spring Boot', 'PostgreSQL', 'Redis'],
        },
        {
          id: 'frontend',
          title: 'Frontend Development',
          skills: ['React', 'TypeScript', 'Vite'],
        },
      ],
    },
    projects: {
      sectionTitle: 'Featured Projects',
      sectionDescription:
        'A curated selection of my standout projects, from advanced computer vision systems and intelligent chatbots to full-featured web applications.',
      categories: [
        { id: 'all', label: 'All Projects' },
        { id: 'vision', label: 'Computer Vision' },
        { id: 'genai', label: 'Generative AI' },
        { id: 'web', label: 'Web Development' },
      ],
      badgeLabels: {
        vision: 'Computer Vision',
        genai: 'Generative AI',
        web: 'Web Dev',
      },
      projects: [
        {
          id: 1,
          title: 'Football Player Re-Identification System',
          description:
            'Built a Detection → Tracking → ReID pipeline to track players and preserve identity consistency. Used YOLOv8 for detection, BoT-SORT for tracking, and a ReID model to reduce ID switches under occlusion.',
        },
        {
          id: 2,
          title: 'Food Ingredient Recognition from Images',
          description:
            'Developed a 65-class food ingredient recognition system with mAP@50 above 80% and inference time under 100ms to power automated recipe recommendations for CookSmart.',
        },
        {
          id: 3,
          title: 'RAG-Based Cooking Assistant Chatbot',
          description:
            'Built an AI chatbot for recipe lookup, ingredient consultation, and cooking guidance using a RAG pipeline with intent detection, retrieval, and response generation.',
        },
        {
          id: 4,
          title: 'CookSmart – Recipe Recommendation Website',
          description:
            'Built a full-stack web app that recommends recipes from user-provided ingredients, with Swagger documentation, rate limiting, JWT security, and Socket.IO realtime features.',
        },
      ],
    },
    experience: {
      sectionTitle: 'Experience & Education',
      workTitle: 'Work Experience',
      educationTitle: 'Education',
      certificationsTitle: 'Certifications',
      activitiesTitle: 'Activities',
      workExperience: [
        {
          title: 'AI Engineer Intern',
          company: 'VNPT AI Company',
          location: 'Hanoi',
          period: '2026',
          description:
            'Studied core concepts in Machine Learning, Deep Learning, and Computer Vision. Built image recognition and data analysis workflows, delivered CV projects with CNNs, YOLOv8, and OpenCV, optimized AI models for real-world use, and integrated LLM and RAG solutions.',
        },
        {
          title: 'Software Intern',
          company: 'VNPT Net Corporation',
          location: 'Hanoi',
          period: '2025',
          description:
            'Contributed to the development and optimization of an internal network infrastructure management system. Worked with Java, Spring Boot, and Oracle Database in an enterprise environment while improving maintenance, testing, and system performance.',
        },
      ],
      education: [
        {
          degree: 'Mathematics and Computer Science Student (4th year)',
          institution: 'Hanoi University of Science and Technology',
          location: 'Hanoi',
          period: '2022 - Present',
          description:
            'CPA: 2.82/4 | GPA: 3.85/4. Awarded the Academic Encouragement Scholarship for semester 2025.2. Focused on mathematical foundations for Artificial Intelligence and Data Science.',
        },
      ],
      certifications: [
        { name: 'Neural Networks & Deep Learning', issuer: 'Coursera - DeepLearning.AI', date: 'Completed' },
        { name: 'TOEIC 580 English Certificate', issuer: 'IIG Vietnam', date: 'Completed' },
      ],
      activities: [
        { role: 'Vice President', organization: 'HUST Debate Club' },
        { role: 'Head of Organizing Committee', organization: 'HUST Debate Open Champion' },
        { role: 'Deputy Head of Organizing Committee', organization: 'Talk show "Giao lộ"' },
      ],
    },
    contact: {
      sectionTitle: 'Get In Touch',
      introTitle: 'Open to Collaboration',
      introDescription:
        'I am always open to opportunities in AI/ML, research collaboration, and ambitious data projects. If you need an AI system, an LLM-enabled application, or an advanced visual analytics solution, feel free to reach out.',
      labels: {
        email: 'Email',
        phone: 'Phone',
        address: 'Address',
        channels: 'Other Channels',
        formTitle: 'Send a Message',
        name: 'Full Name',
        userEmail: 'Your Email',
        subject: 'Subject',
        message: 'Message',
      },
      addressValue: 'Dong Da, Hanoi, Vietnam',
      placeholders: {
        name: 'Example: Jane Doe',
        email: 'hoangtruongminh22@gmail.com',
        subject: 'AI collaboration opportunity',
        message: 'Hi Hoang, I am looking for an AI engineer to...',
      },
      status: {
        success: 'Your message has been sent successfully. I will get back to you as soon as possible.',
        error: 'Something went wrong while sending your message. Please try again.',
        sending: 'Sending...',
        submit: 'Send Message',
      },
    },
    footer: {
      brand: 'AI Portfolio',
      links: ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'],
      copyright: 'All rights reserved.',
      builtWithPrefix: 'Built with',
      builtWithSuffix: 'in Vietnam',
      scrollTop: 'Scroll to top',
    },
  },
} satisfies Record<Language, any>
