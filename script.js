// Modern JavaScript for the portfolio website

// DOM Elements
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Navigation functionality
navToggle?.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle?.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active navigation link
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${id}"]`);

        if (scrollPos >= top && scrollPos <= bottom) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Portfolio filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            
            if (filterValue === 'all' || itemCategory === filterValue) {
                item.style.display = 'block';
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Contact form handling
const contactForm = document.getElementById('contact-form');

contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !subject || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate form submission
    showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
    contactForm.reset();
});

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type) {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#00b894' : '#e84393'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
        font-family: var(--font-primary);
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// This will be replaced by the enhanced initialization above

// Smooth reveal animations for sections
function revealOnScroll() {
    const reveals = document.querySelectorAll('.fade-in');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Performance optimization: Throttle scroll events
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
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    updateActiveNavLink();
    revealOnScroll();
}, 16)); // ~60fps

// Publications Pagination
let currentPage = 1;
const itemsPerPage = 6;
let totalItems = 0;
let totalPages = 0;

function initializePagination() {
    const publicationItems = document.querySelectorAll('.publication-item');
    totalItems = publicationItems.length;
    totalPages = Math.ceil(totalItems / itemsPerPage);
    
    document.getElementById('total-pages').textContent = totalPages;
    
    showPage(1);
    
    // Add event listeners
    document.getElementById('prev-btn').addEventListener('click', () => {
        if (currentPage > 1) {
            showPage(currentPage - 1);
        }
    });
    
    document.getElementById('next-btn').addEventListener('click', () => {
        if (currentPage < totalPages) {
            showPage(currentPage + 1);
        }
    });
}

function showPage(page) {
    currentPage = page;
    const publicationItems = document.querySelectorAll('.publication-item');
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    // Hide all items first
    publicationItems.forEach((item, index) => {
        item.style.display = 'none';
        item.classList.remove('animate-slide-left', 'animate-slide-right');
    });
    
    // Show items for current page with staggered animation
    setTimeout(() => {
        publicationItems.forEach((item, index) => {
            if (index >= startIndex && index < endIndex) {
                item.style.display = 'grid';
                // Alternate slide directions
                if ((index - startIndex) % 2 === 0) {
                    item.classList.add('animate-slide-left');
                } else {
                    item.classList.add('animate-slide-right');
                }
                // Stagger the animations
                item.style.animationDelay = `${(index - startIndex) * 0.1}s`;
            }
        });
    }, 100);
    
    // Update pagination controls
    document.getElementById('current-page').textContent = page;
    document.getElementById('prev-btn').disabled = page === 1;
    document.getElementById('next-btn').disabled = page === totalPages;
}

// Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 50;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                setTimeout(updateCounter, 30);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Enhanced Scroll Animations
function initializeScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-bounce, .animate-slide-up, .animate-fade-in, .animate-scale-in');
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                
                // Trigger counter animation for stats
                if (entry.target.classList.contains('publications-stats')) {
                    animateCounters();
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        animationObserver.observe(el);
    });
}

// Particle Animation Enhancement
function createFloatingParticles() {
    const particlesContainer = document.querySelector('.floating-particles');
    if (!particlesContainer) return;
    
    // Add more particles dynamically
    for (let i = 6; i <= 10; i++) {
        const particle = document.createElement('div');
        particle.className = `particle particle-${i}`;
        particle.style.top = Math.random() * 100 + '%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particlesContainer.appendChild(particle);
    }
}

// Enhanced Page Load Animations
function initializePageAnimations() {
    // Add staggered animations to cards
    const cards = document.querySelectorAll('.about-card, .skills-card, .impact-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('animate-scale-in');
    });
    
    // Add hover sound effects (visual feedback)
    const interactiveElements = document.querySelectorAll('.btn, .visual-card, .skill-tag, .publication-item');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.style.transform = el.style.transform + ' scale(1.02)';
        });
        
        el.addEventListener('mouseleave', () => {
            el.style.transform = el.style.transform.replace(' scale(1.02)', '');
        });
    });
}

// Home Page Counter Animation
function animateHeroCounters() {
    const heroCounters = document.querySelectorAll('.counter-animate');
    
    heroCounters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 30;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + '+';
                setTimeout(updateCounter, 50);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        // Start animation after a delay
        setTimeout(updateCounter, 1500);
    });
}

// Parallax Effect for Hero Section
function initializeParallax() {
    const heroVisual = document.querySelector('.hero-visual');
    if (!heroVisual) return;
    
    // Disable parallax on mobile
    if (window.innerWidth > 768) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.3;
            heroVisual.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Magnetic Button Effect
function initializeMagneticButtons() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });
}

// Cursor Trail Effect
function initializeCursorTrail() {
    const trail = [];
    const trailLength = 10;
    
    for (let i = 0; i < trailLength; i++) {
        const dot = document.createElement('div');
        dot.className = 'cursor-trail';
        dot.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            opacity: ${1 - i / trailLength};
            transition: all 0.1s ease;
        `;
        document.body.appendChild(dot);
        trail.push(dot);
    }
    
    let mouseX = 0, mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateTrail() {
        let x = mouseX;
        let y = mouseY;
        
        trail.forEach((dot, index) => {
            const nextDot = trail[index + 1] || trail[0];
            
            dot.style.left = x - 4 + 'px';
            dot.style.top = y - 4 + 'px';
            
            x += (parseInt(nextDot.style.left) - x) * 0.3;
            y += (parseInt(nextDot.style.top) - y) * 0.3;
        });
        
        requestAnimationFrame(animateTrail);
    }
    
    animateTrail();
}

// Card Tilt Effect
function initializeCardTilt() {
    const cards = document.querySelectorAll('.interest-card, .membership-card, .teaching-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

// Hexagon Image Preview Modal
function initializeHexagonModal() {
    const hexagons = document.querySelectorAll('.hexagon');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.modal-close');
    
    hexagons.forEach(hex => {
        hex.addEventListener('click', () => {
            const imageSrc = hex.getAttribute('data-image');
            modal.classList.add('active');
            modalImg.src = imageSrc;
        });
    });
    
    closeBtn?.addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    modal?.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
}

// Load Configuration and Update Website
function loadConfigData() {
    if (typeof portfolioConfig === 'undefined') {
        console.log('Config file not loaded, using default content');
        return;
    }
    
    const config = portfolioConfig;
    
    // Update personal info
    if (config.personalInfo) {
        const nameEl = document.querySelector('.title-name');
        const titleEl = document.querySelector('.title-role');
        const descEl = document.querySelector('.hero-description');
        
        if (nameEl) nameEl.textContent = config.personalInfo.name;
        if (titleEl) titleEl.textContent = config.personalInfo.title;
        if (descEl) descEl.textContent = config.personalInfo.description;
    }
    
    // Update stats
    if (config.stats) {
        const statNumbers = document.querySelectorAll('.stat-number');
        if (statNumbers[0]) statNumbers[0].setAttribute('data-target', config.stats.publications);
        if (statNumbers[1]) statNumbers[1].setAttribute('data-target', config.stats.projects);
        if (statNumbers[2]) statNumbers[2].setAttribute('data-target', config.stats.yearsExperience);
    }
    
    // Update profile photos
    if (config.profilePhotos && config.profilePhotos.length >= 4) {
        const hexagons = document.querySelectorAll('.hexagon');
        hexagons.forEach((hex, index) => {
            if (config.profilePhotos[index]) {
                const img = hex.querySelector('img');
                if (img) img.src = config.profilePhotos[index];
                hex.setAttribute('data-image', config.profilePhotos[index]);
            }
        });
    }
    
    // Generate Education Section
    if (config.education && config.education.length > 0) {
        const eduTimeline = document.querySelector('.education-timeline');
        if (eduTimeline) {
            eduTimeline.innerHTML = '';
            config.education.forEach(edu => {
                eduTimeline.innerHTML += `
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <div class="education-header">
                                <div class="education-title-row">
                                    <img src="${edu.logo}" alt="${edu.university}" class="university-logo">
                                    <div class="education-text">
                                        <h4>${edu.degree}</h4>
                                        <p class="university-name">${edu.university} • ${edu.years}</p>
                                    </div>
                                </div>
                                <div class="education-badge">
                                    <span class="education-label">${edu.badge}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });
        }
    }
    
    // Generate Experience Section
    if (config.experience && config.experience.length > 0) {
        const expTimeline = document.querySelector('.experience-timeline');
        if (expTimeline) {
            expTimeline.innerHTML = '';
            config.experience.forEach(exp => {
                expTimeline.innerHTML += `
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <div class="education-header">
                                <div class="education-title-row">
                                    <img src="${exp.logo}" alt="${exp.organization}" class="university-logo">
                                    <div class="education-text">
                                        <h4>${exp.position}</h4>
                                        <p class="university-name">${exp.organization} • ${exp.years}</p>
                                    </div>
                                </div>
                                <div class="education-badge">
                                    <span class="education-label">${exp.badge}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });
        }
    }
    
    // Generate Skills Section
    if (config.skills) {
        const skillsContainer = document.querySelector('.tech-skills');
        if (skillsContainer) {
            skillsContainer.innerHTML = '';
            Object.keys(config.skills).forEach(category => {
                const skills = config.skills[category];
                skillsContainer.innerHTML += `
                    <div class="tech-category">
                        <h4>${category}</h4>
                        <div class="tech-tags">
                            ${skills.map(skill => `<span class="tech-tag">${skill}</span>`).join('')}
                        </div>
                    </div>
                `;
            });
        }
    }
    
    // Generate Publications Section
    if (config.publications && config.publications.length > 0) {
        const pubsList = document.querySelector('.publications-list');
        if (pubsList) {
            pubsList.innerHTML = '';
            config.publications.forEach((pub, index) => {
                const animClass = index % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right';
                pubsList.innerHTML += `
                    <div class="publication-item ${animClass}" data-year="${pub.year}">
                        <div class="pub-year-badge">${pub.year}</div>
                        <div class="pub-content">
                            <h3 class="pub-title">${pub.title}</h3>
                            <div class="pub-journal">${pub.journal} • ${pub.date}</div>
                            <div class="pub-tags">
                                ${pub.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                            </div>
                        </div>
                        <div class="pub-actions">
                            <a href="${pub.links.external}" class="pub-link"><i class="fas fa-external-link-alt"></i></a>
                            <a href="${pub.links.pdf}" class="pub-link"><i class="fas fa-file-pdf"></i></a>
                        </div>
                    </div>
                `;
            });
        }
    }
    
    // Generate Projects Section
    if (config.projects && config.projects.length > 0) {
        const projectsGrid = document.querySelector('.portfolio-grid');
        if (projectsGrid) {
            projectsGrid.innerHTML = '';
            config.projects.forEach(project => {
                projectsGrid.innerHTML += `
                    <div class="portfolio-item" data-category="${project.category}">
                        <div class="portfolio-image">
                            <div class="portfolio-placeholder" style="background: ${project.gradient};">
                                <i class="fas ${project.icon}" style="font-size: 4rem;"></i>
                            </div>
                            <div class="portfolio-overlay">
                                <div class="portfolio-content">
                                    <h3 class="portfolio-title">${project.title}</h3>
                                    <p class="portfolio-description">${project.description}</p>
                                    <div class="portfolio-links">
                                        <a href="${project.links.pdf}" class="portfolio-link"><i class="fas fa-file-pdf"></i></a>
                                        <a href="${project.links.external}" class="portfolio-link"><i class="fas fa-external-link-alt"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });
        }
    }
    
    // Generate Awards Section
    if (config.awards && config.awards.length > 0) {
        const awardsList = document.querySelector('.awards-list');
        if (awardsList) {
            awardsList.innerHTML = '';
            config.awards.forEach(award => {
                awardsList.innerHTML += `
                    <div class="award-item">
                        <div class="award-icon">${award.icon}</div>
                        <div class="award-content">
                            <h4>${award.title}</h4>
                            <p>${award.description}</p>
                        </div>
                    </div>
                `;
            });
        }
    }
    
    // Generate Languages Section
    if (config.languages && config.languages.length > 0) {
        const langList = document.querySelector('.languages-list');
        if (langList) {
            langList.innerHTML = '';
            config.languages.forEach(lang => {
                langList.innerHTML += `
                    <div class="language-item">
                        <div class="language-name">${lang.name}</div>
                        <div class="language-level">
                            <div class="level-bar" style="width: ${lang.level}%"></div>
                        </div>
                        <div class="level-text">${lang.description}</div>
                    </div>
                `;
            });
        }
    }
    
    // Generate Expertise Section
    if (config.expertise && config.expertise.length > 0) {
        const expertiseList = document.querySelector('.expertise-list');
        if (expertiseList) {
            expertiseList.innerHTML = '';
            config.expertise.forEach(item => {
                expertiseList.innerHTML += `
                    <div class="expertise-item">
                        <span class="expertise-emoji">${item.icon}</span>
                        <span>${item.text}</span>
                    </div>
                `;
            });
        }
    }
    
    // Generate Research Interests Section
    if (config.researchInterests && config.researchInterests.length > 0) {
        const interestsGrid = document.querySelector('.interests-grid');
        if (interestsGrid) {
            interestsGrid.innerHTML = '';
            config.researchInterests.forEach(interest => {
                interestsGrid.innerHTML += `
                    <div class="interest-card">
                        <div class="interest-icon">${interest.icon}</div>
                        <h3>${interest.title}</h3>
                        <p>${interest.description}</p>
                    </div>
                `;
            });
        }
    }
    
    // Generate Memberships Section
    if (config.memberships && config.memberships.length > 0) {
        const membershipsGrid = document.querySelector('.memberships-grid');
        if (membershipsGrid) {
            membershipsGrid.innerHTML = '';
            config.memberships.forEach(member => {
                membershipsGrid.innerHTML += `
                    <div class="membership-card">
                        <div class="membership-logo">${member.logo}</div>
                        <h3>${member.organization}</h3>
                        <div class="membership-status">${member.status}</div>
                    </div>
                `;
            });
        }
    }
    
    // Generate Conferences Section
    if (config.conferences && config.conferences.length > 0) {
        const conferencesGrid = document.querySelector('.conferences-grid');
        if (conferencesGrid) {
            conferencesGrid.innerHTML = '';
            config.conferences.forEach(conf => {
                const keynoteClass = conf.type === 'keynote' ? 'keynote' : '';
                conferencesGrid.innerHTML += `
                    <div class="conference-card ${keynoteClass}">
                        <div class="conference-type">
                            <i class="fas fa-microphone"></i>
                            <span>${conf.type}</span>
                        </div>
                        <div class="conference-content">
                            <h3>${conf.title}</h3>
                            <div class="conference-location">${conf.location}</div>
                            <div class="conference-topic">${conf.topic}</div>
                            <div class="conference-tags">
                                ${conf.tags.map(tag => `<span class="conf-tag">${tag}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                `;
            });
        }
    }
    
    // Generate Teaching Section
    if (config.teaching && config.teaching.length > 0) {
        const teachingGrid = document.querySelector('.teaching-grid');
        if (teachingGrid) {
            teachingGrid.innerHTML = '';
            config.teaching.forEach(teach => {
                teachingGrid.innerHTML += `
                    <div class="teaching-card">
                        <div class="teaching-icon">
                            <i class="fas ${teach.icon}"></i>
                        </div>
                        <div class="teaching-content">
                            <h3>${teach.title}</h3>
                            <p class="teaching-description">${teach.description}</p>
                            ${teach.stats ? `
                                <div class="teaching-stats">
                                    <div class="stat-item">
                                        <span class="stat-num">${teach.stats.students}</span>
                                        <span class="stat-label">Students</span>
                                    </div>
                                    <div class="stat-item">
                                        <span class="stat-num">${teach.stats.courses}</span>
                                        <span class="stat-label">Courses</span>
                                    </div>
                                </div>
                            ` : ''}
                            ${teach.topics ? `
                                <div class="teaching-topics">
                                    ${teach.topics.map(topic => `<span class="topic-tag">${topic}</span>`).join('')}
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `;
            });
        }
    }
    
    // Update colors
    if (config.colors) {
        document.documentElement.style.setProperty('--primary', config.colors.primary);
        document.documentElement.style.setProperty('--secondary', config.colors.secondary);
    }
    
    console.log('Configuration loaded successfully!');
}

// CV Modal Viewer
const viewCvBtn = document.getElementById('viewCvBtn');
const cvModal = document.getElementById('cvModal');
const closeCvModal = document.getElementById('closeCvModal');
const cvFrame = document.getElementById('cvFrame');

if (viewCvBtn) {
    viewCvBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        cvFrame.src = 'CV-Zafar_Umin_Update11-11-25.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH';
        cvModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

if (closeCvModal) {
    closeCvModal.addEventListener('click', () => {
        cvModal.classList.remove('active');
        cvFrame.src = '';
        document.body.style.overflow = 'auto';
    });
}

if (cvModal) {
    cvModal.addEventListener('click', (e) => {
        if (e.target === cvModal) {
            cvModal.classList.remove('active');
            cvFrame.src = '';
            document.body.style.overflow = 'auto';
        }
    });
}

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Gallery Modal System
const galleryImages = {
    field: [
        { src: 'Zafar1.png', caption: 'Field research in soybean crops' },
        { src: 'zafar2.png', caption: 'Data collection in agricultural fields' },
        { src: 'zafar-3.png', caption: 'Field experiments' }
    ],
    lab: [
        { src: 'Zafar1.png', caption: 'Laboratory analysis' },
        { src: 'zafar4.png', caption: 'Equipment testing' }
    ],
    conference: [
        { src: 'Zafar1.png', caption: 'Conference presentation' },
        { src: 'zafar2.png', caption: 'Research poster session' }
    ],
    greenhouse: [
        { src: 'zafar-3.png', caption: 'Greenhouse monitoring systems' },
        { src: 'zafar4.png', caption: 'Climate control experiments' }
    ],
    robotics: [
        { src: 'Zafar1.png', caption: 'Agricultural robotics development' },
        { src: 'zafar2.png', caption: 'Automation systems' }
    ],
    awards: [
        { src: 'zafar-3.png', caption: 'Award ceremony' },
        { src: 'zafar4.png', caption: 'Recognition event' }
    ]
};

function initializeGalleryModal() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const galleryModal = document.getElementById('galleryModal');
    const galleryModalTitle = document.getElementById('galleryModalTitle');
    const galleryModalBody = document.getElementById('galleryModalBody');
    const closeGalleryModal = document.getElementById('closeGalleryModal');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const category = item.getAttribute('data-category');
            const caption = item.querySelector('.gallery-caption').textContent;
            const images = galleryImages[category] || [];
            
            galleryModalTitle.textContent = caption;
            galleryModalBody.innerHTML = '';
            
            if (images.length === 0) {
                galleryModalBody.innerHTML = '<div class="gallery-placeholder-text">Images coming soon...</div>';
            } else {
                images.forEach(img => {
                    const imgEl = document.createElement('img');
                    imgEl.src = img.src;
                    imgEl.alt = img.caption;
                    imgEl.className = 'gallery-modal-image';
                    imgEl.title = img.caption;
                    galleryModalBody.appendChild(imgEl);
                });
            }
            
            galleryModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeGalleryModal?.addEventListener('click', () => {
        galleryModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    galleryModal?.addEventListener('click', (e) => {
        if (e.target === galleryModal) {
            galleryModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && galleryModal.classList.contains('active')) {
            galleryModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Load configuration first
    loadConfigData();
    
    // Existing initialization
    const animatedElements = document.querySelectorAll('.about-card, .skills-card, .impact-card, .portfolio-item, .service-card, .interest-card, .membership-card');
    
    animatedElements.forEach((el, index) => {
        el.classList.add('fade-in');
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
    
    // New initializations
    initializePagination();
    initializeScrollAnimations();
    createFloatingParticles();
    initializePageAnimations();
    animateHeroCounters();
    initializeParallax();
    initializeMagneticButtons();
    initializeCursorTrail();
    initializeCardTilt();
    initializeHexagonModal();
    initializeGalleryModal();
    initializeBoardTabs();
    
    document.body.classList.add('loaded');
    updateActiveNavLink();
});

// Board Tab Switching Functionality
function initializeBoardTabs() {
    const boardTabs = document.querySelectorAll('.board-tab');
    const boardContents = document.querySelectorAll('.board-content');
    
    boardTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            boardTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Get the target content
            const targetId = tab.getAttribute('data-tab');
            
            // Hide all content sections
            boardContents.forEach(content => {
                content.classList.remove('active');
            });
            
            // Show the target content
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}


