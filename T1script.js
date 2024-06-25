window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'white';
    } else {
        navbar.style.backgroundColor = 'pink';
    }
});
