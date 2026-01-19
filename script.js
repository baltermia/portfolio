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

    const projectHeader = document.createElement('div');
    projectHeader.className = 'project-header';

    const projectTitle = document.createElement('h3');
    projectTitle.className = 'project-title';
    projectTitle.textContent = project.title;

    const projectDescription = document.createElement('p');
    projectDescription.className = 'project-description';
    projectDescription.textContent = project.description;

    const techContainer = document.createElement('div');
    techContainer.className = 'project-tech';
    project.technologies.forEach(tech => {
        const techTag = document.createElement('span');
        techTag.className = 'tech-tag';
        techTag.textContent = tech;
        techContainer.appendChild(techTag);
    });

    projectHeader.appendChild(projectTitle);
    projectHeader.appendChild(projectDescription);
    projectHeader.appendChild(techContainer);

    const linksContainer = document.createElement('div');
    linksContainer.className = 'project-links';

    let hasLinks = false;
    if (project.github && project.github !== '#') {
        const githubLink = document.createElement('a');
        githubLink.href = project.github;
        githubLink.className = 'project-link';
        githubLink.target = '_blank';
        githubLink.rel = 'noopener noreferrer';
        githubLink.textContent = 'GitHub →';
        linksContainer.appendChild(githubLink);
        hasLinks = true;
    }
    if (project.demo && project.demo !== '#') {
        const demoLink = document.createElement('a');
        demoLink.href = project.demo;
        demoLink.className = 'project-link';
        demoLink.target = '_blank';
        demoLink.rel = 'noopener noreferrer';
        demoLink.textContent = 'Live Demo →';
        linksContainer.appendChild(demoLink);
        hasLinks = true;
    }
    if (!hasLinks) {
        const placeholderSpan = document.createElement('span');
        placeholderSpan.className = 'project-link';
        placeholderSpan.style.color = 'var(--text-secondary)';
        placeholderSpan.style.cursor = 'default';
        placeholderSpan.textContent = 'Links Coming Soon';
        linksContainer.appendChild(placeholderSpan);
    }

    card.appendChild(projectHeader);
    card.appendChild(linksContainer);

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

    const timelineDot = document.createElement('div');
    timelineDot.className = 'timeline-dot';

    const timelineContent = document.createElement('div');
    timelineContent.className = 'timeline-content';

    const timelineTitle = document.createElement('h3');
    timelineTitle.className = 'timeline-title';
    timelineTitle.textContent = exp.title;

    const timelineCompany = document.createElement('div');
    timelineCompany.className = 'timeline-company';
    timelineCompany.textContent = exp.company;

    const timelinePeriod = document.createElement('div');
    timelinePeriod.className = 'timeline-period';
    timelinePeriod.textContent = exp.period;

    const timelineDescription = document.createElement('p');
    timelineDescription.className = 'timeline-description';
    timelineDescription.textContent = exp.description;

    timelineContent.appendChild(timelineTitle);
    timelineContent.appendChild(timelineCompany);
    timelineContent.appendChild(timelinePeriod);
    timelineContent.appendChild(timelineDescription);

    item.appendChild(timelineDot);
    item.appendChild(timelineContent);

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
        
        const iconSpan = document.createElement('span');
        iconSpan.style.fontSize = '1.5rem';
        iconSpan.textContent = contact.icon;
        
        const nameSpan = document.createElement('span');
        nameSpan.textContent = contact.name;
        
        link.appendChild(iconSpan);
        link.appendChild(nameSpan);
        
        contactLinksContainer.appendChild(link);
    });
}

// Initialize scroll animations
function initializeAnimations() {
    // Placeholder for future scroll-based animations
    // Currently, animations are handled via CSS on page load
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
        if (hamburger && hamburger.classList.contains('active')) {
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

// Print support is handled via CSS @media print rules

// Animated Wave Background
function initWaveBackground() {
    const canvas = document.getElementById('waveCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Wave configuration
    const waves = [
        {
            amplitude: 30,
            frequency: 0.02,
            speed: 0.02,
            offset: 0,
            color: 'rgba(81, 43, 212, 0.3)' // Primary purple
        },
        {
            amplitude: 40,
            frequency: 0.015,
            speed: 0.015,
            offset: Math.PI / 2,
            color: 'rgba(124, 58, 237, 0.2)' // Lighter purple
        },
        {
            amplitude: 25,
            frequency: 0.025,
            speed: 0.025,
            offset: Math.PI,
            color: 'rgba(0, 89, 156, 0.25)' // C++ blue
        },
        {
            amplitude: 35,
            frequency: 0.018,
            speed: 0.01,
            offset: Math.PI * 1.5,
            color: 'rgba(0, 120, 215, 0.2)' // Accent blue
        }
    ];
    
    let time = 0;
    
    function drawWave(wave, yOffset) {
        ctx.beginPath();
        
        const centerY = canvas.height / 2 + yOffset;
        
        // Draw the wave
        for (let x = 0; x < canvas.width; x++) {
            const y = centerY + 
                     Math.sin(x * wave.frequency + time * wave.speed + wave.offset) * wave.amplitude;
            
            if (x === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        
        // Create gradient fill
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, wave.color);
        gradient.addColorStop(0.5, wave.color.replace('0.3)', '0.4)').replace('0.2)', '0.3)').replace('0.25)', '0.35)'));
        gradient.addColorStop(1, wave.color);
        
        // Complete the path for filling
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Draw stroke for the wave line
        ctx.strokeStyle = wave.color.replace('0.3)', '0.5)').replace('0.2)', '0.4)').replace('0.25)', '0.45)');
        ctx.lineWidth = 2;
        ctx.stroke();
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        time += 1;
        
        // Draw each wave with different vertical offsets for layering
        drawWave(waves[0], -100);
        drawWave(waves[1], -50);
        drawWave(waves[2], 50);
        drawWave(waves[3], 100);
        
        animationFrameId = requestAnimationFrame(animate);
    }
    
    animate();
    
    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
    });
}

// Initialize wave background when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWaveBackground);
} else {
    initWaveBackground();
}
