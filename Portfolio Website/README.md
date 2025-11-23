 Modern Resume/Portfolio Website

A clean, modern, and fully responsive resume/portfolio website built with HTML, CSS, and JavaScript. Features a minimal and elegant design with smooth animations, dark/light theme toggle, and all the essential sections for a professional portfolio.

## 🌟 Features

- **Hero Section**: Eye-catching landing with name, title, description, and download resume button
- **About Me**: Personal introduction with statistics and achievements
- **Skills**: Interactive skill showcase with animated progress bars
- **Experience**: Timeline-style professional experience layout
- **Projects**: Featured projects with images, descriptions, and links to GitHub/live demos
- **Education**: Academic background and qualifications
- **Certifications**: Professional certifications and achievements
- **Testimonials**: Optional client/colleague testimonials carousel
- **Contact**: Contact form with validation and social media links

## 🎨 Design Features

- **Modern & Elegant Design**: Clean typography and soft color palette
- **Dark/Light Theme Toggle**: Switch between themes with smooth transitions
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Scroll-triggered animations and micro-interactions
- **Interactive Elements**: Hover effects, transitions, and engaging UI components
- **Accessibility**: Semantic HTML5 structure and ARIA labels

## 🛠 Technologies Used

- **HTML5**: Semantic markup and modern structure
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **JavaScript ES6+**: Modern JavaScript with clean, commented code
- **Font Awesome**: Social media and UI icons
- **Google Fonts**: Professional typography (Inter font family)

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: 480px to 767px
- **Small Mobile**: Below 480px

## 🚀 Getting Started

1. **Clone or download** the files
2. **Open `index.html`** in your browser
3. **Or use a local server** for best results:
   ```bash
   # Using Python
   python -m http.server 8050
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8050
   ```

4. **Visit** `http://localhost:8050` in your browser

## 📝 Customization Guide

### Personal Information

Replace the placeholder content throughout the files:

1. **Hero Section** (index.html):
   - Change name, title, and description
   - Update profile image URL
   - Modify email and contact information

2. **About Section**:
   - Write your personal story
   - Update statistics and achievements

3. **Skills Section**:
   - Modify skill categories and levels
   - Update progress percentages in HTML

4. **Experience Section**:
   - Add your work experience
   - Update company names, positions, and descriptions

5. **Projects Section**:
   - Replace project information
   - Update image URLs and links
   - Modify technology tags

6. **Education Section**:
   - Add your educational background
   - Update institution names and dates

7. **Certifications Section**:
   - Add your certifications
   - Update issuing organizations and dates

8. **Contact Section**:
   - Update contact information
   - Modify social media links

### Styling Customization

1. **Color Scheme** (styles.css):
   ```css
   :root {
       --primary-color: #667eea;
       --secondary-color: #764ba2;
       --accent-color: #f093fb;
       /* Add your custom colors */
   }
   ```

2. **Typography**:
   - Change font family in the HTML head section
   - Adjust font sizes in the CSS variables section

3. **Animations**:
   - Modify animation speeds and effects
   - Add custom animations in the animations section

### Functionality Customization

1. **Resume Download** (script.js):
   - Replace the sample resume content with your actual resume
   - Change file format from .txt to .pdf if needed

2. **Contact Form**:
   - Integrate with a backend service or email service
   - Add custom validation rules

3. **Theme Colors**:
   - Modify dark theme colors in the `[data-theme="dark"]` section

## 🌐 Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Performance Features

- **Optimized Images**: Compressed images for fast loading
- **Lazy Loading**: Images load as needed
- **Smooth Scrolling**: Optimized scroll performance
- **Throttled Events**: Efficient scroll and resize handlers
- **Minimal Dependencies**: No heavy frameworks or libraries

## 🔧 Advanced Features

### Intersection Observer API
- Efficient scroll-triggered animations
- Performance-optimized element visibility detection

### CSS Custom Properties
- Easy theme customization
- Dynamic color switching
- Maintainable design system

### Modern JavaScript
- ES6+ features and syntax
- Clean, modular code structure
- Comprehensive error handling

## 📄 File Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── styles.css          # Complete styling
├── script.js           # JavaScript functionality
├── README.md           # Documentation
└── todo.md            # Project task list
```

## 🤝 Contributing

Feel free to use this template as a starting point for your own portfolio website. All the code is clean, well-commented, and easy to customize.

## 📞 Support

If you have any questions about customizing this template, feel free to reach out or check the comments in the code files for detailed explanations.

## 📄 License

This template is free to use and modify for personal and commercial projects.

---

**Built with ❤️ using modern web technologies**