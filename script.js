// Background Image Carousel
class ImageCarousel {
    constructor() {
        this.slides = document.querySelectorAll('.carousel-slide');
        this.currentSlide = 0;
        this.slideInterval = null;
        this.init();
    }

    init() {
        this.startCarousel();
        this.addEventListeners();
    }

    startCarousel() {
        this.slideInterval = setInterval(() => {
            this.nextSlide();
        }, 5000); // Change slide every 5 seconds
    }

    nextSlide() {
        this.slides[this.currentSlide].classList.remove('active');
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.slides[this.currentSlide].classList.add('active');
    }

    addEventListeners() {
        // Pause carousel on hover
        const carousel = document.querySelector('.background-carousel');
        carousel.addEventListener('mouseenter', () => {
            clearInterval(this.slideInterval);
        });

        carousel.addEventListener('mouseleave', () => {
            this.startCarousel();
        });
    }
}

// Smooth Scrolling for Navigation
class SmoothScroll {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Glassmorphism Effects
class GlassmorphismEffects {
    constructor() {
        this.elements = document.querySelectorAll('.menu-item, .feature, .contact-item, .btn-primary, .btn-secondary');
        this.init();
    }

    init() {
        this.addHoverEffects();
        this.addScrollEffects();
    }

    addHoverEffects() {
        this.elements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.backdropFilter = 'blur(30px)';
                element.style.background = 'rgba(255, 255, 255, 0.2)';
                element.style.transform = 'translateY(-5px)';
                element.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
            });

            element.addEventListener('mouseleave', () => {
                element.style.backdropFilter = 'blur(20px)';
                element.style.background = 'rgba(255, 255, 255, 0.1)';
                element.style.transform = 'translateY(0)';
                element.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
            });
        });
    }

    addScrollEffects() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        this.elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    }
}

// Neumorphism Text Effects
class NeumorphismText {
    constructor() {
        this.textElements = document.querySelectorAll('h1, h2, h3, .hero-title, .section-title');
        this.init();
    }

    init() {
        this.addNeumorphismEffect();
        this.addGlowEffect();
    }

    addNeumorphismEffect() {
        this.textElements.forEach(element => {
            element.style.textShadow = `
                2px 2px 4px rgba(0, 0, 0, 0.5),
                -2px -2px 4px rgba(255, 255, 255, 0.1),
                0 0 20px rgba(255, 255, 255, 0.3)
            `;
        });
    }

    addGlowEffect() {
        this.textElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.textShadow = `
                    2px 2px 4px rgba(0, 0, 0, 0.5),
                    -2px -2px 4px rgba(255, 255, 255, 0.2),
                    0 0 30px rgba(255, 255, 255, 0.5)
                `;
            });

            element.addEventListener('mouseleave', () => {
                element.style.textShadow = `
                    2px 2px 4px rgba(0, 0, 0, 0.5),
                    -2px -2px 4px rgba(255, 255, 255, 0.1),
                    0 0 20px rgba(255, 255, 255, 0.3)
                `;
            });
        });
    }
}

// Liquid Glass Animation
class LiquidGlassAnimation {
    constructor() {
        this.init();
    }

    init() {
        this.createFloatingElements();
        this.animateBackground();
    }

    createFloatingElements() {
        const container = document.body;
        
        for (let i = 0; i < 20; i++) {
            const element = document.createElement('div');
            element.className = 'floating-glass';
            element.style.cssText = `
                position: fixed;
                width: ${Math.random() * 100 + 50}px;
                height: ${Math.random() * 100 + 50}px;
                background: rgba(255, 255, 255, 0.05);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 50%;
                pointer-events: none;
                z-index: 1;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: float ${Math.random() * 10 + 10}s linear infinite;
            `;
            container.appendChild(element);
        }
    }

    animateBackground() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0% {
                    transform: translateY(0px) rotate(0deg);
                    opacity: 0.1;
                }
                50% {
                    opacity: 0.3;
                }
                100% {
                    transform: translateY(-100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Parallax Effect
class ParallaxEffect {
    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.carousel-slide');
            
            parallaxElements.forEach((element, index) => {
                const speed = 0.5 + (index * 0.1);
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }
}

// Button Interactions
class ButtonInteractions {
    constructor() {
        this.buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
        this.init();
    }

    init() {
        this.buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.createRippleEffect(e);
            });
        });
    }

    createRippleEffect(e) {
        const button = e.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
}

// Add ripple animation CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Initialize all effects when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ImageCarousel();
    new SmoothScroll();
    new GlassmorphismEffects();
    new NeumorphismText();
    new LiquidGlassAnimation();
    new ParallaxEffect();
    new ButtonInteractions();
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
