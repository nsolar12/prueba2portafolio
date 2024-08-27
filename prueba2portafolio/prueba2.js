document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});
document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('dynamicText').textContent = 'El texto ha sido cambiado dinámicamente!';
});
