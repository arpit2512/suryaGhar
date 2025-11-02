// Parallax Effects for Surya Ghar Kits
// Heavy parallax with horizontal and vertical scrolling

document.addEventListener('DOMContentLoaded', function() {
    initParallax();
    initHorizontalScroll();
    initScrollAnimations();
});

// Main Parallax Effect
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-parallax-speed') || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
    });
}

// Horizontal Scroll Effect for Product Categories
function initHorizontalScroll() {
    const horizontalSections = document.querySelectorAll('.horizontal-scroll-section');

    horizontalSections.forEach(section => {
        const scrollContainer = section.querySelector('.horizontal-scroll-container');
        if (!scrollContainer) return;

        window.addEventListener('scroll', () => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const scrollY = window.pageYOffset;

            // Calculate scroll progress within section
            if (scrollY > sectionTop - window.innerHeight && scrollY < sectionTop + sectionHeight) {
                const progress = (scrollY - (sectionTop - window.innerHeight)) / (sectionHeight + window.innerHeight);
                const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
                const scrollAmount = progress * maxScroll;

                scrollContainer.scrollLeft = scrollAmount;
            }
        });
    });
}

// Scroll Animations with Intersection Observer
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));
}

// Parallax Mouse Movement Effect
function initMouseParallax() {
    const parallaxContainers = document.querySelectorAll('.mouse-parallax');

    parallaxContainers.forEach(container => {
        container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            const layers = container.querySelectorAll('.parallax-layer');
            layers.forEach((layer, index) => {
                const depth = (index + 1) * 20;
                const moveX = x * depth;
                const moveY = y * depth;
                layer.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        });

        container.addEventListener('mouseleave', () => {
            const layers = container.querySelectorAll('.parallax-layer');
            layers.forEach(layer => {
                layer.style.transform = 'translate(0, 0)';
            });
        });
    });
}

// Smooth Parallax Scrolling
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    // Hero parallax
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }

    // Floating elements
    const floatingElements = document.querySelectorAll('.float-element');
    floatingElements.forEach((el, index) => {
        const speed = 0.3 + (index * 0.1);
        const yPos = scrolled * speed;
        el.style.transform = `translateY(${yPos}px)`;
    });
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize mouse parallax
initMouseParallax();
