document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    const authButtons = document.querySelector('.auth-buttons');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            
            if (navLinks) {
                navLinks.classList.toggle('active');
            }
            
            if (authButtons) {
                authButtons.classList.toggle('active');
            }
        });
    }
    
    // Add active class to current page in navigation
    const currentLocation = window.location.pathname;
    const navItems = document.querySelectorAll('.nav-links a');
    
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentLocation) {
            item.classList.add('active');
        }
    });
    
    // Smooth scrolling for anchor links
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
    // Form submission for app link
    const appLinkForm = document.querySelector('.app-link-form');
    
    if (appLinkForm) {
        appLinkForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const phoneInput = this.querySelector('input');
            if (phoneInput && phoneInput.value) {
                alert('App link sent to ' + phoneInput.value);
                phoneInput.value = '';
            } else {
                alert('Please enter a valid phone number');
            }
        });
    }
    
    // Add animation to download count
    const downloadCount = document.querySelector('.download-count h3');
    
    if (downloadCount) {
        let count = 0;
        const target = 4.4;
        const duration = 2000; // 2 seconds
        const interval = 20; // Update every 20ms
        const steps = duration / interval;
        const increment = target / steps;
        
        const counter = setInterval(() => {
            count += increment;
            if (count >= target) {
                count = target;
                clearInterval(counter);
            }
            downloadCount.textContent = count.toFixed(1) + ' K+';
        }, interval);
    }

    // Add this function to handle the mobile layout adjustments
    function handleMobileLayout() {
        const isMobile = window.innerWidth <= 768
        const appPromo = document.querySelector(".app-promo")
        const appMockup = document.querySelector(".app-mockup")
        const appInfo = document.querySelector(".app-info")
      
        if (isMobile) {
            // For mobile, ensure the download count is inside the app mockup
            if (appMockup && appInfo) {
                const downloadCount = document.querySelector(".download-count")
                if (downloadCount && !appMockup.contains(downloadCount)) {
                    appMockup.appendChild(downloadCount)
                }
            }
        }
    }
    handleMobileLayout()
    const metaViewport = document.querySelector('meta[name="viewport"]')
    if (metaViewport) {
        metaViewport.setAttribute("content", "width=device-width, initial-scale=1.0, viewport-fit=cover")
    }

    // Add status bar meta tags
    const head = document.head

    const metaStatusBarStyle = document.createElement("meta")
    metaStatusBarStyle.name = "apple-mobile-web-app-status-bar-style"
    metaStatusBarStyle.content = "black-translucent"
    head.appendChild(metaStatusBarStyle)

    const metaMobileWebApp = document.createElement("meta")
    metaMobileWebApp.name = "apple-mobile-web-app-capable"
    metaMobileWebApp.content = "yes"
    head.appendChild(metaMobileWebApp)
});