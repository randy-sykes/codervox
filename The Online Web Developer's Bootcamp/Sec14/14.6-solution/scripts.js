var randomColor = "#" + ((1<<24)*Math.random() | 0).toString(16);

document.querySelector("div").addEventListener('click', function(){
    document.querySelector("div").style.backgroundColor = randomColor;
    document.querySelector("div").textContent = "I haven't seen this before.";
})