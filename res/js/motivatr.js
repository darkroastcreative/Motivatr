var motivationButton;
var contentDiv;
var motivationImage;

window.onload = function()  {
    motivationButton = document.getElementById("motivationButton");
    contentDiv = document.getElementById("contentDiv");
    
    motivationButton.addEventListener("click", function(evt){
        motivationImage = document.createElement("img");
        motivationImage.src = "../res/img/motivation.jpg";
        motivationImage.alt = "Motivation Image";
        
        contentDiv.appendChild(motivationImage);
        motivationButton.removeEventListener("click", arguments.callee);
    });
};