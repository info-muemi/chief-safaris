const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        
        
        event.preventDefault(); 
        
        
        function clearErrors() {
            document.querySelectorAll('.error-message').forEach(el => {
                el.textContent = '';
                el.style.display = 'none';
            });
            document.querySelectorAll('.contact-form input, .contact-form textarea').forEach(el => {
                el.classList.remove('invalid');
            });
        }

        clearErrors(); 
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const messageInput = document.getElementById('message');

        const nameError = document.getElementById('name-error');
        const messageError = document.getElementById('message-error');
        const contactError = document.getElementById('contact-error');
        
        let isValid = true; 

        
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            nameError.style.display = 'block';
            nameInput.classList.add('invalid');
            isValid = false;
        } 
        
        
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message details are required.';
            messageError.style.display = 'block';
            messageInput.classList.add('invalid');
            isValid = false;
        }

        
        const emailValue = emailInput.value.trim();
        const phoneValue = phoneInput.value.trim();
        
        if (emailValue === '' && phoneValue === '') {
            contactError.textContent = 'Please provide either an Email or Phone number.';
            contactError.style.display = 'block';
            
            emailInput.classList.add('invalid');
            phoneInput.classList.add('invalid');
            isValid = false;
        }
        
        
        if (isValid) {
            
            contactForm.submit();
        }
    });
}
<