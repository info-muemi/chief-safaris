const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        // 1. Stop the form from trying to submit to GitHub (which causes the refresh/fail)
        event.preventDefault(); 
        
        // 2. Clear previous errors
        document.querySelectorAll('.error-message').forEach(el => {
            el.textContent = '';
            el.style.display = 'none';
        });
        document.querySelectorAll('.contact-form input, .contact-form textarea').forEach(el => {
            el.classList.remove('invalid');
        });

        // 3. Get Input Values
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const messageInput = document.getElementById('message');

        const nameError = document.getElementById('name-error');
        const messageError = document.getElementById('message-error');
        const contactError = document.getElementById('contact-error');
        
        let isValid = true; 

        // 4. Validation Checks
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
        
        // 5. THE FIX: If valid, send to WhatsApp instead of contactForm.submit()
        if (isValid) {
            const phoneNumber = "254792589609"; 
            
            // Build the dynamic message with the user's data
            const waMessage = `Hello Chief Safaris!%0A%0A` +
                              `*New Inquiry from Website*%0A` +
                              `*Name:* ${nameInput.value}%0A` +
                              `*Contact:* ${emailValue || phoneValue}%0A` +
                              `*Message:* ${messageInput.value}`;

            const url = "https://wa.me/" + phoneNumber + "?text=" + waMessage;

            // Open WhatsApp in new tab
            window.open(url, '_blank').focus();
            
            // Reset form so the user knows it's finished
            contactForm.reset();
        }
    });
}
