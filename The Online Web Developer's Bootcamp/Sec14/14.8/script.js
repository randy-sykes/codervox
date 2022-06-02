const maxLength = 10
const warningLength = 3
updateMessage(maxLength)

function updateMessage(currentCount){
    document.getElementById("theMessage").textContent = currentCount + " characters left";
}

document.getElementById("userMessage").addEventListener("keyup", function(){
    var messageLength = document.getElementById("userMessage").value.length;
    var counter = (maxLength - messageLength);

    if (counter <= warningLength){
        // 3 Chars or less turns to red
        document.getElementById("theMessage").style.color = 'red';
    } else {
        // All others are black
        document.getElementById("theMessage").style.color = 'black';
    }
    updateMessage(maxLength - messageLength);
})
