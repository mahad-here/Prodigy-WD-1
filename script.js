window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you for your message!');
});
