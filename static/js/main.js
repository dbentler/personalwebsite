// Used for "Read More" text boxes
function revealText(){
    var moreText = document.getElementById("more");
    var button = document.getElementById("btn");

    if (button.innerHTML == "Reveal"){
        moreText.style.display = "inline";
        button.innerHTML = "Collapse";
    } else {
        moreText.style.display = "none";
        button.innerHTML = "Reveal";
    }
}