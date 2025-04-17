document.addEventListener('DOMContentLoaded', function() {
    const togglePassword = document.getElementById('toggle-password');
    const passwordInput = document.getElementById('password');
    const eyeIcon = togglePassword.querySelector('.eye-icon');
    
    // Function to toggle password visibility
    function togglePasswordVisibility() {
        const isPassword = passwordInput.type === 'password';
        
        // Toggle password visibility
        passwordInput.type = isPassword ? 'text' : 'password';
        
        // Update the eye icon
        if (isPassword) {
            // Show password icon
            eyeIcon.innerHTML = `
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                <line x1="1" y1="1" x2="23" y2="23"></line>
            `;
            togglePassword.setAttribute('aria-label', 'Hide password');
        } else {
            // Hide password icon
            eyeIcon.innerHTML = `
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
            `;
            togglePassword.setAttribute('aria-label', 'Show password');
        }
    }
    
    // Add click event listener
    togglePassword.addEventListener('click', togglePasswordVisibility);
    
    // Form submission handler
    const form = document.getElementById('signup-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = passwordInput.value;
        const keepSignedIn = document.getElementById('keep-signed').checked;
        
        console.log({
            email,
            password,
            keepSignedIn
        });
        
        alert('Form submitted successfully!');
    });
});