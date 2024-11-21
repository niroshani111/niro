function navigate(section) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(section).style.display = 'block';
}

// Initializing the homepage section to display
document.addEventListener('DOMContentLoaded', () => {
    navigate('home');
});

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;

    if (name && mobile && email) {
        alert('Thank you for contacting us, ' + name + '!');
        // Here you can add further form submission logic (e.g., sending an email, storing data, etc.)
    } else {
        alert('Please fill out all fields.');
    }
});
