// Cristea Lab - Clean Modern JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    setupScrollEffects();
    setupAnimations();
    setupInteractions();
}

// Navigation
function setupNavigation() {
    const navbar = document.querySelector('.navbar');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    let lastScrollY = window.scrollY;
    
    function updateNavbar() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
    }
    
    window.addEventListener('scroll', updateNavbar, { passive: true });

    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Scroll Effects
function setupScrollEffects() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Stagger animation for grid items
                const parent = entry.target.parentElement;
                if (parent && parent.classList.contains('research-grid') || 
                    parent.classList.contains('team-grid')) {
                    const siblings = Array.from(parent.children);
                    const index = siblings.indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 100}ms`;
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.card, .team-card, .publication-item, section');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
}

// Animations
function setupAnimations() {
    // Hero graphic animation
    const heroGraphic = document.querySelector('.hero-graphic');
    if (heroGraphic) {
        // Add floating animation
        heroGraphic.style.animation = 'float 6s ease-in-out infinite';
    }

    // Add CSS for floating animation
    if (!document.querySelector('#hero-animations')) {
        const style = document.createElement('style');
        style.id = 'hero-animations';
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Interactions
function setupInteractions() {
    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Card interactions
    const cards = document.querySelectorAll('.card, .team-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Publication item interactions
    const pubItems = document.querySelectorAll('.publication-item');
    pubItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.borderLeftColor = 'var(--color-accent)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.borderLeftColor = 'transparent';
        });
    });

    // Team avatar interactions
    const avatars = document.querySelectorAll('.team-avatar');
    avatars.forEach(avatar => {
        const card = avatar.closest('.team-card');
        if (card) {
            card.addEventListener('mouseenter', function() {
                avatar.style.transform = 'scale(1.05)';
                avatar.style.borderColor = 'var(--color-accent)';
            });
            
            card.addEventListener('mouseleave', function() {
                avatar.style.transform = 'scale(1)';
                avatar.style.borderColor = 'var(--color-border)';
            });
        }
    });
}

// Utility Functions
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

// Performance optimizations
window.addEventListener('resize', debounce(() => {
    // Handle resize events
    updateLayout();
}, 250));

function updateLayout() {
    // Recalculate any layout-dependent elements
    const heroGraphic = document.querySelector('.hero-graphic');
    if (heroGraphic && window.innerWidth < 768) {
        heroGraphic.style.maxWidth = '250px';
    } else if (heroGraphic) {
        heroGraphic.style.maxWidth = '400px';
    }
}

// Export for external use
window.CristeaLabModern = {
    debounce,
    throttle,
    updateLayout
};