document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger-menu');
    const nav = document.getElementById('main-nav');
    
    if (hamburger && nav) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
            
            // Prevent scrolling when menu is open
            document.body.classList.toggle('no-scroll');
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (nav && nav.classList.contains('active') && 
            !nav.contains(event.target) && 
            !hamburger.contains(event.target)) {
            nav.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
    
    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (nav && nav.classList.contains('active')) {
                nav.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }
        });
    });
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation to cards on scroll
    const cards = document.querySelectorAll('.card');
    
    function checkScroll() {
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight - 100) {
                card.classList.add('visible');
            }
        });
    }
    
    // Initial check
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
    
    // Add active class to current page in navigation
    const currentLocation = window.location.pathname;
    const navItems = document.querySelectorAll('nav ul li a');
    
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentLocation || (currentLocation === '/' && href === 'index.html')) {
            item.classList.add('active');
        }
    });
});

// Add this to your CSS
document.head.insertAdjacentHTML('beforeend', `
<style>
    .no-scroll {
        overflow: hidden;
    }
    
    .card {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s, transform 0.5s;
    }
    
    .card.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    nav ul li a.active {
        color: #5E5CFF;
        font-weight: 600;
    }
    
    @media (max-width: 768px) {
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 999;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s;
        }
        
        .overlay.active {
            opacity: 1;
            visibility: visible;
        }
    }
</style>
`);

// Create overlay for mobile menu
const overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.appendChild(overlay);

// Update overlay functionality
const hamburger = document.getElementById('hamburger-menu');
const nav = document.getElementById('main-nav');

if (hamburger && nav && overlay) {
    hamburger.addEventListener('click', function() {
        overlay.classList.toggle('active');
    });
    
    overlay.addEventListener('click', function() {
        this.classList.remove('active');
        nav.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
}