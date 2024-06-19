document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for getting in touch! We will get back to you soon.');
    setTimeout(() => {
        this.submit();
    }, 100); 
});