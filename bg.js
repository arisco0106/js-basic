const body = document.querySelector("body");

const IMG_NUMBER = 7;
/*
function handleImgLoad() {
    console.log("finished log")
}*/
function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/landscape${imgNumber + 1}.jpg`
    //image.addEventListener("loadend",handleImgLoad);
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}
function init() {
    const randomNumber = genRandom(); 
    paintImage(randomNumber);
}

init();