const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(function(item) {
    item.addEventListener("click", navLinksClick);
});

function navLinksClick(el) {
    console.log(el);
    console.log(this);
    navLinks.forEach(function(item) {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
        }
    });
    el.target.classList.add('active');
}