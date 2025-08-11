// ===== Navbar background change on scroll =====
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 15, 28, 0.95)';
    } else {
        header.style.background = 'rgba(15, 20, 35, 0.9)';
    }
});

// ===== Active link highlight =====
const navLinks = document.querySelectorAll('nav ul li a');
window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ===== Fixed Navigation Background Change on Scroll =====
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===== Staggered Scroll Reveal Animation =====
const revealElements = document.querySelectorAll('section, .course');

function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach((el, index) => {
        const boxTop = el.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            setTimeout(() => {
                el.classList.add('show');
            }, index * 100); // delay for stagger effect
        } else {
            el.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// ===== Enroll Now Button Click =====
document.querySelectorAll('.course .btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault(); // stop page from jumping to top
        alert('Enrollment completed!');
    });
});
