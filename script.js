// Main JavaScript for Portfolio Website

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    loadPersonalInfo();
    loadProjects();
    loadExperience();
    loadContactLinks();
    initializeAnimations();
    setCurrentYear();
});

// Navigation functionality
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Add scroll effect to navbar
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Load personal information from config
function loadPersonalInfo() {
    // Update name in hero section
    const nameElement = document.getElementById('developer-name');
    if (nameElement) {
        nameElement.textContent = CONFIG.name;
    }

    // Update bio
    const bioElement = document.getElementById('hero-bio');
    if (bioElement) {
        bioElement.textContent = CONFIG.bio;
    }

    // Update about description
    const aboutDesc = document.getElementById('about-description');
    if (aboutDesc) {
        aboutDesc.textContent = CONFIG.aboutDescription;
    }

    // Update footer name
    const footerName = document.getElementById('footer-name');
    if (footerName) {
        footerName.textContent = CONFIG.name;
    }
}

// Load projects dynamically
function loadProjects() {
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer || !CONFIG.projects) return;

    projectsContainer.innerHTML = '';

    CONFIG.projects.forEach((project, index) => {
        const projectCard = createProjectCard(project);
        projectCard.style.animationDelay = `${index * 0.1}s`;
        projectsContainer.appendChild(projectCard);
    });
}

// Create a project card element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.animation = 'fadeInUp 0.6s ease-out forwards';
    card.style.opacity = '0';

    const techTags = project.technologies.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');

    const links = [];
    if (project.github && project.github !== '#') {
        links.push(`<a href="${project.github}" class="project-link" target="_blank" rel="noopener noreferrer">GitHub →</a>`);
    }
    if (project.demo && project.demo !== '#') {
        links.push(`<a href="${project.demo}" class="project-link" target="_blank" rel="noopener noreferrer">Live Demo →</a>`);
    }
    if (links.length === 0) {
        links.push(`<span class="project-link" style="color: var(--text-secondary); cursor: default;">Links Coming Soon</span>`);
    }

    card.innerHTML = `
        <div class="project-header">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">${techTags}</div>
        </div>
        <div class="project-links">
            ${links.join('')}
        </div>
    `;

    return card;
}

// Load experience timeline
function loadExperience() {
    const experienceContainer = document.getElementById('experience-container');
    if (!experienceContainer || !CONFIG.experience) return;

    experienceContainer.innerHTML = '';

    CONFIG.experience.forEach((exp, index) => {
        const timelineItem = createTimelineItem(exp);
        timelineItem.style.animationDelay = `${index * 0.15}s`;
        experienceContainer.appendChild(timelineItem);
    });
}

// Create a timeline item element
function createTimelineItem(exp) {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.style.animation = 'fadeInUp 0.6s ease-out forwards';
    item.style.opacity = '0';

    item.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-content">
            <h3 class="timeline-title">${exp.title}</h3>
            <div class="timeline-company">${exp.company}</div>
            <div class="timeline-period">${exp.period}</div>
            <p class="timeline-description">${exp.description}</p>
        </div>
    `;

    return item;
}

// Load contact links
function loadContactLinks() {
    const contactLinksContainer = document.getElementById('contact-links');
    if (!contactLinksContainer || !CONFIG.contact) return;

    contactLinksContainer.innerHTML = '';

    CONFIG.contact.forEach((contact, index) => {
        const link = document.createElement('a');
        link.href = contact.url;
        link.className = 'contact-link';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.style.animation = 'fadeInUp 0.6s ease-out forwards';
        link.style.animationDelay = `${index * 0.1}s`;
        link.style.opacity = '0';
        link.innerHTML = `
            <span style="font-size: 1.5rem;">${contact.icon}</span>
            <span>${contact.name}</span>
        `;
        contactLinksContainer.appendChild(link);
    });
}

// Initialize scroll animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Set current year in footer
function setCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        if (hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Performance optimization: Lazy load images if any are added
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add print styles support
window.addEventListener('beforeprint', () => {
    document.body.classList.add('printing');
});

window.addEventListener('afterprint', () => {
    document.body.classList.remove('printing');
});
