const slideIMG = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg",
    "img/06.jpg",
    "img/07.jpg",
    "img/08.jpg",
    "img/09.jpg",
];
let currentIndex = 0;

function updateImage() {
    const sliderContainer = document.getElementById("slider-container");
    sliderContainer.innerHTML = `<img src="${slideIMG[currentIndex]}"></img>`;
}

/**
 * 1. Current Index = 0;
 * 2. Current Index = currentIndex -1; // output: -1, -2, -3
 * 3. Current Index = (currentIndex - 1 + slideIMG.length) //output: 8, 16, 24
 * 4. Current Index = (currentIndex - 1 + slideIMG.length) % slideIMG.length //output : 8, 7, 6, 5
*/
function prevSlide() {
    currentIndex = (currentIndex - 1 + slideIMG.length) % slideIMG.length;
    console.log(currentIndex)
    updateImage();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slideIMG.length;
    updateImage();
}

updateImage();
