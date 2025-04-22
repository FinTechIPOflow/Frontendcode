document.addEventListener('DOMContentLoaded', function() {
    // Cookie consent functionality
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptCookiesBtn = document.getElementById('acceptCookies');
    
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    
    if (!cookiesAccepted) {
        // Show the cookie banner if cookies haven't been accepted
        cookieBanner.classList.add('show');
    }
    
    // Handle cookie acceptance
    acceptCookiesBtn.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.classList.remove('show');
    });
    
    // Initialize mobile footer accordion
    function initMobileAccordion() {
        const footerColumns = document.querySelectorAll('.footer-column h3');
        
        if (window.innerWidth < 768) {
            // Initially hide all lists on mobile
            document.querySelectorAll('.footer-column ul').forEach(list => {
                list.style.display = 'none';
            });
            
            // Add click handlers if not already added
            footerColumns.forEach(column => {
                if (!column.hasListener) {
                    column.addEventListener('click', function() {
                        // Toggle the visibility of the list under this heading
                        const list = this.nextElementSibling;
                        
                        // Close all other open lists
                        document.querySelectorAll('.footer-column ul.show').forEach(openList => {
                            if (openList !== list) {
                                openList.classList.remove('show');
                                openList.style.display = 'none';
                                openList.previousElementSibling.classList.remove('active');
                            }
                        });
                        
                        // Toggle current list
                        if (list.classList.contains('show')) {
                            list.classList.remove('show');
                            list.style.display = 'none';
                            this.classList.remove('active');
                        } else {
                            list.classList.add('show');
                            list.style.display = 'block';
                            this.classList.add('active');
                        }
                    });
                    
                    column.hasListener = true;
                }
            });
        } else {
            // Show all lists on larger screens
            document.querySelectorAll('.footer-column ul').forEach(list => {
                list.style.display = '';
                list.classList.remove('show');
            });
            
            document.querySelectorAll('.footer-column h3').forEach(heading => {
                heading.classList.remove('active');
            });
        }
    }
    
    // Initial call
    initMobileAccordion();
    
    // Handle resize events with debouncing
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            initMobileAccordion();
        }, 250);
    });
}); 