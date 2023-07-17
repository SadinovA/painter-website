window.addEventListener('DOMContentLoaded', () => {

    1
    const slides = document.querySelectorAll('.offer__slide'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current'),
        slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        width = window.getComputedStyle(slidesWrapper).width,
        slidesField = document.querySelector('.offer__slider-inner');
    
    // 5
    let offset = 0;
    
    let slideIndex = 1;
    
    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent =  `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent =  slideIndex;
    }
    
    // 2
    slidesField.style.width = 100 * slides.length + '%';
    
    // 4 
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
    slidesWrapper.style.overflow = 'hidden';
    
    // 3
    slides.forEach(slide => {
        slide.style.width = width;
    });
    
    // 6
    next.addEventListener('click', () => {
        if (offset == (+width.slice(0, width.length - 2) * (slides.length - 1))) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2); 
        }
    
        slidesField.style.transform = `translateX(-${offset}px)`;
    
        // 8
        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }
    
        if (slides.length < 10) {
            current.textContent =  `0${slideIndex}`;
        } else {
            current.textContent =  slideIndex;
        }
    });
    
    // 7
    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1);
        } else {
            offset -= +width.slice(0, width.length - 2);
        }
    
        slidesField.style.transform = `translateX(-${offset}px)`;
    
        // 9
        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }
    
        if (slides.length < 10) {
            current.textContent =  `0${slideIndex}`;
        } else {
            current.textContent =  slideIndex;
        }
    });




    /////// painter //////


    const slider = document.querySelector('.slider'),
        active = document.querySelector('#active'),
        line1 = document.querySelector('#line1'),
        line2 = document.querySelector('#line2'),
        line3 = document.querySelector('#line3'),
        line4 = document.querySelector('#line4'),
        container = document.querySelector('.slider-container');

    line1.addEventListener('click', function() {
        slider.style.transform = "translateX(0)";
        active.style.top = 0;
        container.style.background = "#a12a0f"

    });
    line2.addEventListener('click', function() {
        slider.style.transform = "translateX(-25%)";
        active.style.top = "80px";
        container.style.background = "#59e5ea"
    });
    line3.addEventListener('click', function() {
        slider.style.transform = "translateX(-50%)";
        active.style.top = "160px";
        container.style.background = "#a12a0f"

    });
    line4.addEventListener('click', function() {
        slider.style.transform = "translateX(-75%)";
        active.style.top = "240px";
        container.style.background = "#a12a0f"
    });
})
