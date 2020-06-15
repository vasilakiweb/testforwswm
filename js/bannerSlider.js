const circles = document.querySelectorAll('.slide-circle');
const bannerWidthContainer = document.querySelector('.banner__images');
const bannerImages = document.querySelectorAll ('.banner__image');

let bannerCounter = 0;
let bannerCounterPx = 0;

// <test>
let testCounter = 0;
// </test>

// Circle onclick
for (let i = 0; i < circles.length; i++) {
    circles[i].addEventListener ('click', ()=> {
        bannerCounter = i;
        circles.forEach(el => {
            el.classList.remove ('slide-circle--active');
        });
        circles[i].classList.add ('slide-circle--active');
        // <test>
        testCounter = i * (-bannerWidthContainer.offsetWidth);
        bannerImages.forEach(image => {
            image.style.transform = `translate(${testCounter}px)`;
        });
        // </test>
    });
} 


// Auto change circles slider
function slide() {
    circles.forEach(el => {
        el.classList.remove ('slide-circle--active');
    });
    if (bannerCounter < circles.length-1) {
        bannerCounter++;
    }
    else if (bannerCounter == circles.length-1) {
        bannerCounter = 0;
    }
    circles[bannerCounter].classList.add ('slide-circle--active');
    // <test>
    testCounter = bannerCounter * (-bannerWidthContainer.offsetWidth);
    bannerImages.forEach(image => {
        image.style.transform = `translate(${testCounter}px)`;
    });
    // </test>
}
setInterval(slide,2000);