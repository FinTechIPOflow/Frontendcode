document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }
    
    // Accordion Functionality
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            // Close all other accordion items
            accordionItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current accordion item
            item.classList.toggle('active');
        });
    });
    
    // Responsive Navigation
    function handleResponsiveNav() {
        if (window.innerWidth > 992) {
            navLinks.style.display = 'flex';
        } else {
            navLinks.style.display = 'none';
        }
    }
    
    window.addEventListener('resize', handleResponsiveNav);
    handleResponsiveNav();
    
    // Carousel Navigation (for IPO cards if needed)
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (prevBtn && nextBtn) {
        const ipoCards = document.querySelector('.ipo-cards');
        
        nextBtn.addEventListener('click', () => {
            ipoCards.scrollBy({
                left: 320,
                behavior: 'smooth'
            });
        });
        
        prevBtn.addEventListener('click', () => {
            ipoCards.scrollBy({
                left: -320,
                behavior: 'smooth'
            });
        });
    }
    
    // Apply Button Functionality
    const applyButtons = document.querySelectorAll('.card-footer .btn:last-child');
    
    applyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const companyName = this.closest('.ipo-card').querySelector('.company-name').textContent;
            alert(`You are applying for ${companyName} IPO. This would redirect to the application form.`);
        });
    });
    
    // Skip Button Functionality
    const skipButtons = document.querySelectorAll('.card-footer .btn:first-child');
    
    skipButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.ipo-card');
            card.style.opacity = '0.6';
            setTimeout(() => {
                card.style.display = 'none';
            }, 500);
        });
    });
});