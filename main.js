const left_arrow = document.getElementById('carousel-left-arrow');
const right_arrow = document.getElementById('carousel-right-arrow');
const carousel_pics = document.querySelector('.carousel-pictures');
const carousel_txts = document.querySelector('.carousel-captions');
const pictures = carousel_pics.querySelectorAll('picture');
const captions = carousel_txts.querySelectorAll('.caption');
captions.forEach(e => {
    e.shop_now = e.querySelector('.shop-now');
});

let count = 0;
const max_count = pictures.length;
// console.log(max_count, captions);
// console.log(carousel_txts);

const updateCarousel = (count) => {
    let img_width = pictures[0].clientWidth;
    let caption_width = captions[0].clientWidth;
    let offset1 = count * img_width;
    let offset2 = count * caption_width;
    // console.log(offset1, offset2);
    carousel_pics.style.transform = `translateX(-${offset1}px)`;
    carousel_txts.style.transform = `translateX(-${offset2}px)`;
    for(let i=0; i<max_count; ++i) {
        let pic = pictures[i];
        let txt = captions[i];
        if(i==count) {
            txt.shop_now.tabIndex = 0;
            pic.setAttribute('aria-hidden', 'false');
            txt.setAttribute('aria-hidden', 'false');
        } else {
            txt.shop_now.tabIndex = -1;
            pic.setAttribute('aria-hidden', 'true');
            txt.setAttribute('aria-hidden', 'true');
        }
    }
}

//initial setup for the carousel
updateCarousel(count);

const carouselNext = () => {
    if(count < max_count - 1) {
        count ++;
        updateCarousel(count);
    }
}
const carouselPrev = () => {
    if(count > 0) {
        count --;
        updateCarousel(count);
    }
}

left_arrow.addEventListener('click', () => {
    carouselPrev();
});
left_arrow.addEventListener('keydown', (e)=> {
    console.log('left keydown', e.code);
    if(e.code == 'Enter') {
        carouselPrev();
    }
});

right_arrow.addEventListener('click', () => {
    carouselNext();
});
right_arrow.addEventListener('keydown', (e)=> {
    console.log('right keydown', e.code);
    if(e.code == 'Enter') {
        carouselNext();
    }
});

//collapsable menue
const nav = document.getElementById('nav-bar');
const hamburger = document.getElementById('hamburger-icon');
const close_icon = document.getElementById('close-icon');
const showMenu = () => {
    nav.classList.add('show');
}
const hideMenu = () => {
    nav.classList.remove('show');
}
hamburger.addEventListener('click', showMenu);
hamburger.addEventListener('keydown', (e)=> {
    if(e.code == 'Enter') {
        showMenu();
    }
})
close_icon.addEventListener('click', hideMenu);
close_icon.addEventListener('keydown', (e) => {
    if(e.code == 'Enter') {
        hideMenu();
    }
});
nav.querySelectorAll('.menu > a').forEach(elm => {
    elm.addEventListener('click', hideMenu)
});
