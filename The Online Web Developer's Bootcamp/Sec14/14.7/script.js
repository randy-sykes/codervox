// var image1 = '/Sec14/14.7/images/donut.jpg';
// var image2 = '/Sec14/14.7/images/drink.jpg';
// NOTE: Imgur CDN apparently blocks requests from 127.0.0.1 so Live Server will fail unless you change the domain to localhost instead.
var image1 = 'https://i.imgur.com/0MTEpzD.jpg';
var image2 = 'https://i.imgur.com/lcvWRhD.jpg';

document.querySelector("img").addEventListener("mouseover", function(){
    // var currentImage = new URL(document.querySelector("img").src).pathname;
    var currentImage = document.querySelector("img").src;
    if ( currentImage === image1) {
        document.querySelector("img").src = image2;
    } else {
        document.querySelector("img").src = image1;
    }
})