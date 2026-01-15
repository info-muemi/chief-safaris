function sendToWhatsApp() {
    // 1. Get the values from your HTML IDs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // 2. Simple Validation: Ensure Name and Message aren't empty
    if (name.trim() === "" || message.trim() === "") {
        alert("Please enter your name and message details.");
        return;
    }

    // 3. The Stakeholder's WhatsApp Number
    const phoneNumber = "254792589609"; 

    // 4. Create the formatted text message
    const text = "New Website Inquiry:%0A%0A" + 
                 "*Name:* " + name + "%0A" + 
                 "*Contact:* " + (email || phone) + "%0A" + 
                 "*Subject:* " + subject + "%0A" + 
                 "*Message:* " + message;

    // 5. Build the final URL
    const whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + text;

    // 6. Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // 7. Reset the form after sending
    document.getElementById('whatsappForm').reset();
}
