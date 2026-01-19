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
    
    // Wave configuration with more variety and dynamic properties
    const waves = [
        {
            baseAmplitude: 50,
            frequency: 0.012,
            speed: 0.035,
            offset: 0,
            baseColor: { r: 81, g: 43, b: 212 },
            baseOpacity: 0.15,
            opacitySpeed: 0.008,
            amplitudeVariation: 0.005,
            frequencyVariation: 0.003
        },
        {
            baseAmplitude: 70,
            frequency: 0.008,
            speed: 0.018,
            offset: Math.PI * 0.4,
            baseColor: { r: 124, g: 58, b: 237 },
            baseOpacity: 0.12,
            opacitySpeed: 0.012,
            amplitudeVariation: 0.007,
            frequencyVariation: 0.004
        },
        {
            baseAmplitude: 35,
            frequency: 0.020,
            speed: 0.045,
            offset: Math.PI * 0.7,
            baseColor: { r: 147, g: 51, b: 234 },
            baseOpacity: 0.18,
            opacitySpeed: 0.015,
            amplitudeVariation: 0.006,
            frequencyVariation: 0.005
        },
        {
            baseAmplitude: 45,
            frequency: 0.015,
            speed: 0.022,
            offset: Math.PI,
            baseColor: { r: 0, g: 89, b: 156 },
            baseOpacity: 0.20,
            opacitySpeed: 0.010,
            amplitudeVariation: 0.004,
            frequencyVariation: 0.006
        },
        {
            baseAmplitude: 60,
            frequency: 0.010,
            speed: 0.028,
            offset: Math.PI * 1.3,
            baseColor: { r: 0, g: 120, b: 215 },
            baseOpacity: 0.16,
            opacitySpeed: 0.009,
            amplitudeVariation: 0.008,
            frequencyVariation: 0.003
        },
        {
            baseAmplitude: 40,
            frequency: 0.018,
            speed: 0.040,
            offset: Math.PI * 1.8,
            baseColor: { r: 30, g: 100, b: 200 },
            baseOpacity: 0.14,
            opacitySpeed: 0.011,
            amplitudeVariation: 0.009,
            frequencyVariation: 0.007
        }
    ];
    
    // Set canvas size and create gradients
    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        
        // Gradients will be created dynamically in drawWave based on current opacity
    }
    
    // Throttle resize events for better performance
    let resizeTimeout;
    function throttledResize() {
        if (resizeTimeout) return;
        resizeTimeout = setTimeout(() => {
            resizeCanvas();
            resizeTimeout = null;
        }, 100);
    }
    
    resizeCanvas();
    window.addEventListener('resize', throttledResize);
    
    let time = 0;
    
    function drawWave(wave, yOffset) {
        const centerY = canvas.height / 2 + yOffset;
        const step = 3; // Draw every 3 pixels for better performance
        
        // Add subtle variation to amplitude and frequency for organic feel
        const amplitudeNoise = Math.sin(time * wave.amplitudeVariation) * 15;
        const currentAmplitude = wave.baseAmplitude + amplitudeNoise;
        
        // Vary opacity over time for pulsing effect
        const currentOpacity = wave.baseOpacity + Math.sin(time * wave.opacitySpeed) * 0.08;
        
        // Calculate wave points with variation
        const points = [];
        for (let x = 0; x < canvas.width; x += step) {
            // Add secondary wave for more organic movement
            const primaryWave = Math.sin(x * wave.frequency + time * wave.speed + wave.offset);
            const secondaryWave = Math.sin(x * wave.frequency * 1.5 + time * wave.speed * 0.7 + wave.offset * 1.3) * 0.3;
            const y = centerY + (primaryWave + secondaryWave) * currentAmplitude;
            points.push({ x, y });
        }
        
        // Create dynamic gradient based on current opacity
        const { r, g, b } = wave.baseColor;
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${currentOpacity * 0.8})`);
        gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${currentOpacity})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, ${currentOpacity * 0.8})`);
        
        // Draw the wave line stroke with dynamic opacity (clamped to max 1.0)
        ctx.beginPath();
        points.forEach((point, index) => {
            if (index === 0) {
                ctx.moveTo(point.x, point.y);
            } else {
                ctx.lineTo(point.x, point.y);
            }
        });
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${Math.min(currentOpacity * 1.5, 1.0)})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        
        // Draw the filled area
        ctx.beginPath();
        points.forEach((point, index) => {
            if (index === 0) {
                ctx.moveTo(point.x, point.y);
            } else {
                ctx.lineTo(point.x, point.y);
            }
        });
        
        // Complete the path for filling
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        
        ctx.fillStyle = gradient;
        ctx.fill();
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        time += 1;
        
        // Draw each wave with different vertical offsets for layering
        // More varied vertical positioning for depth
        drawWave(waves[0], -120);
        drawWave(waves[1], -60);
        drawWave(waves[2], -20);
        drawWave(waves[3], 30);
        drawWave(waves[4], 80);
        drawWave(waves[5], 130);
        
        animationFrameId = requestAnimationFrame(animate);
    }
    
    animate();
    
    // Return cleanup function
    return () => {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
        if (resizeTimeout) {
            clearTimeout(resizeTimeout);
        }
        window.removeEventListener('resize', throttledResize);
    };
}

// Initialize wave background when DOM is loaded
let waveCleanup = null;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        waveCleanup = initWaveBackground();
    });
} else {
    waveCleanup = initWaveBackground();
}

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (waveCleanup) {
        waveCleanup();
    }
});
