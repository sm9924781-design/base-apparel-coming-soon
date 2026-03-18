const form = document.getElementById('email-form');
const emailInput = document.getElementById('email-input');
const errorIcon = document.getElementById('error-icon');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
        // إظهار الخطأ
        emailInput.style.border = '2px solid hsl(0, 93%, 68%)';
        errorIcon.style.display = 'block';
        errorMessage.style.display = 'block';
    } else {
        // حالة النجاح
        emailInput.style.border = '1px solid hsl(0, 36%, 70%)';
        errorIcon.style.display = 'none';
        errorMessage.style.display = 'none';
        
        alert('Success! Thank you for subscribing.');
        emailInput.value = '';
    }
});