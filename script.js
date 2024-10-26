// script.js
document.addEventListener('DOMContentLoaded', () => {
    // scrolling navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animation skills
    const skillsSection = document.querySelector('#skills');
    const skillItems = document.querySelectorAll('#skills li');

    const animateSkills = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        const sectionTop = skillsSection.getBoundingClientRect().top;

        if(sectionTop < triggerBottom) {
            skillItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('visible');
                }, index * 200);
            });
            window.removeEventListener('scroll', animateSkills);
        }
    };

    window.addEventListener('scroll', animateSkills);

    // Animation scroll
    const projects = document.querySelectorAll('.project');

    const animateProjects = () => {
        projects.forEach(project => {
            const projectTop = project.getBoundingClientRect().top;
            const triggerBottom = window.innerHeight / 5 * 4;

            if(projectTop < triggerBottom) {
                project.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', animateProjects);

    // Form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });

    // Initial animations
    gsap.from("header", {duration: 1, y: -50, opacity: 0, ease: "power3.out"});
    gsap.from("#home h1", {duration: 1, delay: 0.5, y: 50, opacity: 0, ease: "power3.out"});
    gsap.from("#home h2", {duration: 1, delay: 0.8, y: 50, opacity: 0, ease: "power3.out"});
});