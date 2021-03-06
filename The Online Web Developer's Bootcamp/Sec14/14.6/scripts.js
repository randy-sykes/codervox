var originalText = document.querySelector("div").textContent;
var originalColor = '#808080';
var generatedColor = '#808080';
var seenColors = ['#808080',];

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgtToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function generateRandomColor() {
    //var hexList = ['#32a852', '#808080', '#3232a8', '#a8325e', '#a89b32', '#a84832', '#32a89d'];
    //return hexList[Math.floor(Math.random() * hexList.length)];
    return "#" + ((1<<24)*Math.random() | 0).toString(16)
}

document.querySelector("div").addEventListener("click", function(){
    var rgb = window.getComputedStyle(document.querySelector("div")).backgroundColor;
    var hexValue = '#' + rgb.substr(4, rgb.indexOf(')') - 4).split(',').map((color) => String("0" + parseInt(color).toString(16)).slice(-2)).join('');
    generatedColor = generateRandomColor();
    while (generatedColor === originalColor) {
        generatedColor = generateRandomColor();
    }
    document.querySelector("div").style.backgroundColor = generatedColor;
    if (seenColors.includes(generatedColor)) {
        document.querySelector("div").textContent = "You have also seen this.";
    } else {
        seenColors.push(generatedColor);
        document.querySelector("div").textContent = "But you have not seen this.";
    }
})
