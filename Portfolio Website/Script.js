//  =============================================
// Portfolio Website JavaScript
// Modern, clean, and well-organized with comments
// =============================================

// =============================================
// DOM Content Loaded Event Listener
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeTheme();
    initializeNavigation();
    initializeScrollAnimations();
    initializeSkillAnimations();
    initializeTestimonialCarousel();
    initializeContactForm();
    initializeSmoothScroll();
    initializeHeaderScroll();
    initializeActiveNavigation();
});

// =============================================
// Theme Management (Dark/Light Mode)
// =============================================
function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);
    
    // Theme toggle click handler
    themeToggle.addEventListener('click', function() {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        // Update theme
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Add animation class
        themeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeToggle.style.transform = '';
        }, 300);
    });
}

// =============================================
// Navigation Menu (Mobile Responsive)
// =============================================
function initializeNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close mobile menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// =============================================
// Scroll Animations (Intersection Observer)
// =============================================
function initializeScrollAnimations() {
    // Elements to animate on scroll
    const animatedElements = document.querySelectorAll([
        '.section-header',
        '.about-text',
        '.stat-item',
        '.skills-category',
        '.experience-card',
        '.project-card',
        '.education-card',
        '.certification-card',
        '.contact-item'
    ].join(','));
    
    // Intersection Observer configuration
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    // Create observer
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements
    animatedElements.forEach(element => {
        // Set initial state
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Start observing
        observer.observe(element);
    });
}

// =============================================
// Skills Progress Bar Animation
// =============================================
function initializeSkillAnimations() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    // Intersection Observer for skill bars
    const skillsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.getAttribute('data-progress');
                entry.target.style.width = progress + '%';
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    // Observe skill bars
    skillBars.forEach(bar => {
        // Set initial state
        bar.style.width = '0%';
        skillsObserver.observe(bar);
    });
}

// =============================================
// Testimonial Carousel
// =============================================
function initializeTestimonialCarousel() {
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const prevButton = document.getElementById('testimonialPrev');
    const nextButton = document.getElementById('testimonialNext');
    let currentIndex = 0;
    
    if (testimonialItems.length === 0) return;
    
    // Show initial testimonial
    testimonialItems[currentIndex].classList.add('active');
    
    // Function to show testimonial
    function showTestimonial(index) {
        // Hide all testimonials
        testimonialItems.forEach(item => item.classList.remove('active'));
        
        // Show current testimonial
        testimonialItems[index].classList.add('active');
        
        // Update current index
        currentIndex = index;
    }
    
    // Previous button handler
    prevButton.addEventListener('click', function() {
        const newIndex = currentIndex === 0 ? testimonialItems.length - 1 : currentIndex - 1;
        showTestimonial(newIndex);
    });
    
    // Next button handler
    nextButton.addEventListener('click', function() {
        const newIndex = currentIndex === testimonialItems.length - 1 ? 0 : currentIndex + 1;
        showTestimonial(newIndex);
    });
    
    // Auto-advance testimonials
    setInterval(() => {
        const newIndex = currentIndex === testimonialItems.length - 1 ? 0 : currentIndex + 1;
        showTestimonial(newIndex);
    }, 5000);
}

// =============================================
// Contact Form Handling
// =============================================
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Basic validation
        if (!formObject.name || !formObject.email || !formObject.message) {
            showNotification('Please fill in all required fields', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formObject.email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission (replace with actual submission)
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // Show loading state
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            // Show success message
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 1500);
    });
}

// =============================================
// Notification System
// =============================================
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #667eea, #764ba2)' : 
                      type === 'error' ? 'linear-gradient(135deg, #f093fb, #f5576c)' : 
                      'linear-gradient(135deg, #4facfe, #00f2fe)'};
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        font-weight: 500;
        max-width: 300px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// =============================================
// Smooth Scrolling
// =============================================
function initializeSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calculate offset for fixed header
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                // Smooth scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// =============================================
// Header Scroll Effect
// =============================================
function initializeHeaderScroll() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// =============================================
// Active Navigation Highlighting
// =============================================
function initializeActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveNav() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to current link
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
    
    // Update on scroll
    window.addEventListener('scroll', updateActiveNav);
    
    // Update on load
    updateActiveNav();
}

// =============================================
// Resume Download Functionality
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    const downloadResumeBtn = document.getElementById('downloadResume');
    
    if (downloadResumeBtn) {
        downloadResumeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create a sample resume content (in production, this would be your actual resume)
            const resumeContent = `
John Doe - Full Stack Developer Resume

======================================
CONTACT INFORMATION
======================================
Email: john.doe@example.com
Phone: +1 (234) 567-890
LinkedIn: https://linkedin.com/in/johndoe
GitHub: https://github.com/johndoe
Portfolio: https://johndoe.com

======================================
PROFESSIONAL SUMMARY
======================================
Passionate Full Stack Developer with 5+ years of experience building scalable web applications.
Expert in modern JavaScript frameworks, cloud technologies, and agile development practices.

======================================
SKILLS
======================================
Frontend: React.js, Vue.js, JavaScript, TypeScript, HTML5, CSS3
Backend: Node.js, Express.js, Python, Django
Database: MongoDB, PostgreSQL, Redis
Cloud: AWS, Google Cloud, Azure, Docker
Tools: Git, CI/CD, Webpack, Jest

======================================
EXPERIENCE
======================================
Senior Full Stack Developer - Tech Innovations Inc. (Jan 2022 - Present)
• Led development of microservices architecture serving 1M+ users
• Implemented CI/CD pipelines reducing deployment time by 60%
• Mentored junior developers and conducted code reviews

Full Stack Developer - Digital Solutions Ltd. (Jun 2020 - Dec 2021)
• Developed and maintained 5+ web applications using React and Node.js
• Designed and implemented RESTful APIs and database schemas
• Optimized application performance improving load times by 40%

Junior Web Developer - StartUp Ventures (Aug 2018 - May 2020)
• Built responsive websites using HTML, CSS, and JavaScript
• Assisted in development of e-commerce platform
• Participated in requirement gathering and project planning

======================================
EDUCATION
======================================
Bachelor of Science in Computer Science - University of Technology (2014-2018)
• GPA: 3.8/4.0
• Dean's List, Computer Science Club President

Full Stack Web Development Bootcamp - Coding Academy (2018)
• Intensive 6-month program covering modern web development

======================================
CERTIFICATIONS
======================================
• AWS Certified Solutions Architect (2023)
• Google Cloud Professional Developer (2023)
• Azure Fundamentals (2022)
• React Developer Certification (2022)
• Docker Certified Associate (2022)
            `;
            
            // Create blob and download
            const blob = new Blob([resumeContent], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'John_Doe_Resume.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
            
            // Show notification
            showNotification('Resume downloaded successfully!', 'success');
        });
    }
});

// =============================================
// Utility Functions
// =============================================

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// =============================================
// Performance Optimizations
// =============================================

// Lazy loading for images (if needed)
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// =============================================
// Error Handling
// =============================================

window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    // You could add error reporting here
});

// =============================================
// Development/Debug Helper
// =============================================

// Remove in production
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('Portfolio Website Loaded Successfully');
    console.log('Features initialized: Theme, Navigation, Animations, Forms');
}