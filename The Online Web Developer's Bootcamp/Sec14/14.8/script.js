const messageCounter = 10
updateMessage(messageCounter)

function updateMessage(currentCount){
    document.getElementById("counter").textContent = currentCount + " characters left";
}

document.querySelector("textarea").addEventListener("keyup", function(){
    var messageLength = document.querySelector("textarea").value.length;

    if (messageCounter - messageLength < 4){
        // 3 Chars down turns to red
        document.getElementById("counter").style.color = 'red';
    } else {
        // All others are black
        document.getElementById("counter").style.color = 'black';
    }
    updateMessage(messageCounter - messageLength);
})
