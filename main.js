const left_arrow = document.getElementById('carousel-left-arrow');
const right_arrow = document.getElementById('carousel-right-arrow');
const carousel = document.querySelector('.carousel-container');
let count = 0;
const max_count = 3;
console.log(left_arrow, right_arrow, carousel);

left_arrow.addEventListener('click', () => {
    console.log('left', count);6
    if(count > 0) {
        count --;
        let offset = count * window.innerWidth;
        console.log(offset, window.innerWidth);
        carousel.style.transform = `translateX(-${offset}px)`;
    }
});

right_arrow.addEventListener('click', () => {
    console.log('right', count);
    if(count < max_count - 1) {
        count ++;
        let offset = count * window.innerWidth;
        console.log(offset, window.innerWidth);
        carousel.style.transform = `translateX(-${offset}px)`;
    }
});
