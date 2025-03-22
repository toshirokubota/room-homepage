const left_arrow = document.getElementById('carousel-left-arrow');
const right_arrow = document.getElementById('carousel-right-arrow');
const carousel_pics = document.querySelector('.carousel-pictures');
const carousel_txts = document.querySelector('.carousel-captions');
const img = document.querySelector('.carousel-pictures picture');
const caption = document.querySelector('.carousel-captions .caption');
let count = 0;
const max_count = document.querySelectorAll('.carousel-pictures > picture').length;
//console.log(max_count, left_arrow, right_arrow, carousel_pics, carousel_txts);
console.log(img);

left_arrow.addEventListener('click', () => {
    console.log('left', count);
    if(count > 0) {
        count --;
        let offset1 = count * img.clientWidth;
        let offset2 = count * caption.clientWidth;
        console.log(offset1, offset2, img.clientWidth);
        carousel_pics.style.transform = `translateX(-${offset1}px)`;
        carousel_txts.style.transform = `translateX(-${offset2}px)`;
    }
});

right_arrow.addEventListener('click', () => {
    console.log('right', count);
    if(count < max_count - 1) {
        count ++;
        let offset1 = count * img.clientWidth;
        let offset2 = count * caption.clientWidth;
        console.log(offset1, offset2, img.clientWidth);
        carousel_pics.style.transform = `translateX(-${offset1}px)`;
        carousel_txts.style.transform = `translateX(-${offset2}px)`;
    }
});

const nav = document.getElementById('nav-bar');
const showMenu = () => {
    nav.classList.add('show');
}
const hideMenu = () => {
    nav.classList.remove('show');
}
document.getElementById('hamburger-icon').addEventListener('click', showMenu);
document.getElementById('close-icon').addEventListener('click', hideMenu);
nav.querySelectorAll('.menu > a').forEach(elm => {
    elm.addEventListener('click', hideMenu)
});


// window.onresize = () => {
//     let elm = document.querySelector('.carousel-item img');
//     console.log(elm.clientWidth, elm.clientHeight);
// }