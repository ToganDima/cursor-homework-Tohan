const back_top_btn = document.querySelector('#back-to-top');
const posts_btn = document.querySelector('.posts-btn');
const tagged_btn = document.querySelector('.tagged-btn');

posts_btn.addEventListener('click', function(event) {
    if (tagged_btn.classList.contains('active-tagged')) {
        tagged_btn.classList.remove('active-tagged');
    }
    this.classList.add('active-posts');
}); 

tagged_btn.addEventListener('click', function(event) {
    if (posts_btn.classList.contains('active-posts')) {
        posts_btn.classList.remove('active-posts');
    }
    this.classList.add('active-tagged');
});

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        back_top_btn.style.display = "block";
    } else {
        back_top_btn.style.display = "none";
    }
};
