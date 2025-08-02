# 🚀 Portfolio CV Website - Truong Minh Hoang

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode support, and a professional design to showcase web development skills and projects.

## ✨ Features

- **🎨 Modern Design**: Clean and professional UI with smooth animations
- **🌙 Dark Mode**: Toggle between light and dark themes
- **📱 Responsive**: Fully responsive design for all devices
- **⚡ Fast Performance**: Built with Vite for optimal performance
- **🎭 Smooth Animations**: Framer Motion animations and scroll effects
- **🔧 TypeScript**: Type-safe development with TypeScript
- **🎯 SEO Optimized**: Meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Linting**: ESLint

## 📋 Sections

- **Hero**: Introduction with animated text and profile image
- **About**: Personal information and skills overview
- **Skills**: Technical skills with interactive tabs
- **Projects**: Portfolio projects showcase
- **Experience**: Work experience timeline
- **Contact**: Contact form and information

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/HTM0410/portfolio-cv-site.git
   cd portfolio-cv-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build files will be generated in the `dist` folder.

## 📁 Project Structure

```
portfolio-cv-site/
├── public/
│   ├── images/
│   │   └── photo_id.jpg
│   ├── favicon.svg
│   └── _redirects
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── hooks/
│   │   └── useScrollAnimation.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## 🎨 Customization

### Personal Information
Update your personal information in the following files:
- `src/components/Hero.tsx` - Name, title, description
- `src/components/About.tsx` - Personal details and skills
- `src/components/Contact.tsx` - Contact information

### Profile Image
Replace `public/images/photo_id.jpg` with your own profile image.

### Colors and Styling
Customize colors and styling in:
- `tailwind.config.js` - Primary colors and theme
- `src/index.css` - Custom CSS variables

## 🌐 Deployment

### Deploy to Netlify

1. **Connect to GitHub**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose GitHub and select this repository

2. **Configure Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

3. **Deploy**
   - Click "Deploy site"
   - Your site will be live in minutes

### Deploy to Vercel

1. **Connect to GitHub**
   - Go to [vercel.com](https://vercel.com)
   - Import this repository

2. **Deploy**
   - Vercel will automatically detect the build settings
   - Click "Deploy"

### Custom Domain
To use a custom domain (e.g., hoangtm04.id.vn):
1. Add your domain in the hosting provider's settings
2. Configure DNS records as instructed
3. Enable SSL certificate

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Truong Minh Hoang**
- Email: hoangtruongminh22@gmail.com
- Phone: +84 986 122 511
- Location: Dong Da, Ha Noi, Vietnam
- GitHub: [@HTM0410](https://github.com/HTM0410)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - Frontend framework
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icon library

---

⭐ If you find this project helpful, please give it a star!