var imageArray = ["https://i.imgur.com/hjqkSEy.png", "https://i.imgur.com/WLYG8Ae.png", "https://i.imgur.com/faVkiXs.png"];
var index = 1;

function rotateImage() {
    document.querySelector('img').setAttribute("src", imageArray[index]);
    index++;
    if (index >= imageArray.length) {
        index = 0;
    }
}

setInterval(rotateImage, 3000);