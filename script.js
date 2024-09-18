const textBtn = document.querySelector("#pressBtn");
const newText = document.querySelector(".myText");

textBtn.addEventListener("click", function changeText()
{
newText.innerHTML = "Goodbye World"; 
}, false
);
