'use strict';

console.log('test');

document.querySelector('.arrow-left').addEventListener('click', function() {
    moveSlide(-1);
    console.log(-1);
});
document.querySelector('.arrow-right').addEventListener('click', function() {
    moveSlide(1);
    console.log(1);
});

function moveSlide(n) {

    const slides = document.querySelectorAll('.slide');
    console.log(slides);
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('active-slide')) {
            slides[i].classList.replace('active-slide', 'hidden-slide');
            let curIndex = i + n;
            if (curIndex === slides.length) {
                curIndex = 0;
            } else if (curIndex === -1) {
                curIndex = slides.length - 1;
            }
            slides[curIndex].classList.replace('hidden-slide', 'active-slide');
            break;
        }
    }
   
 }

