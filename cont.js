document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Your message has been sent!');
        form.reset();
    });
});
