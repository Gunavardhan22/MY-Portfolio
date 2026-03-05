/* 
   Gunavardhan Tigulla - Portfolio Logic
   Animations, Typing Effect, and Navigation
*/

document.addEventListener('DOMContentLoaded', () => {
    // 1. Typing Animation
    if (document.querySelector('.typing')) {
        new Typed('.typing', {
            strings: [
                'Full-Stack Developer',
                'AI/ML Enthusiast',
                'Problem Solver',
                'Tech Innovator'
            ],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }

    // 2. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Mobile Menu Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.querySelector('i').classList.toggle('fa-bars');
            navToggle.querySelector('i').classList.toggle('fa-times');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.querySelector('i').classList.add('fa-bars');
                navToggle.querySelector('i').classList.remove('fa-times');
            });
        });
    }

    // 4. Scroll Reveal Animations
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: false
    });

    // Hero Reveal
    sr.reveal('.hero-subtitle', {});
    sr.reveal('.hero-title', { delay: 200 });
    sr.reveal('.hero-typing', { delay: 400 });
    sr.reveal('.hero-description', { delay: 600 });
    sr.reveal('.hero-btns', { delay: 800 });
    sr.reveal('.hero-img', { delay: 400, origin: 'right' });

    // About Reveal
    sr.reveal('.section-title', { interval: 200 });
    sr.reveal('.about-text', { origin: 'left' });
    sr.reveal('.about-grid', { origin: 'right' });

    // Skills Reveal
    sr.reveal('.skill-card', { interval: 200 });

    // Projects Reveal
    sr.reveal('.project-card', { interval: 200 });

    // Contact Reveal
    sr.reveal('.contact-info', { origin: 'left' });
    sr.reveal('.contact-form', { origin: 'right' });

    // 5. Smooth Scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 6. Form Submission (UI Mockup)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = 'Sending...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerText = 'Message Sent!';
                btn.style.backgroundColor = '#10b981'; // Success Green
                contactForm.reset();

                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = '';
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }
});
