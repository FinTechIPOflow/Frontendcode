document.addEventListener('DOMContentLoaded', function() {
    const resetForm = document.getElementById('reset-form');
    const emailInput = document.getElementById('email');
    const backLink = document.getElementById('back-link');
    
    // Form submission
    resetForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const email = emailInput.value;
        
        // Here you would typically send this data to your server
        console.log({
            email
        });
        
        // Create and show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = `Password reset link has been sent to ${email}`;
        
        // Insert the success message before the form
        resetForm.parentNode.insertBefore(successMessage, resetForm);
        
        // Show the success message
        successMessage.style.display = 'block';
        
        // Clear the form
        resetForm.reset();
        
        // Hide the success message after 5 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
            // Optional: remove the element after hiding
            successMessage.remove();
        }, 5000);
    });
    
    // Back to login link
    backLink.addEventListener('click', function(event) {
        event.preventDefault();
        // In a real application, this would redirect to the login page
        alert('Redirecting to login page...');
        // window.location.href = 'login.html';
    });
});