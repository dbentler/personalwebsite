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

function redirectGitHub(){
    if(document.getElementById("github")){
        location.href = "https://github.com/dbentler";
    }
}

function redirectProjects(){
    if(document.getElementById("projects")){
        location.href = "/projects"
    }
}

function redirectLinkedIn(){
    if(document.getElementById("linkedin")){
        location.href = "https://www.linkedin.com/in/darren-bentler-255a36206/"
    }
}

function redirectInstagram(){
    if(document.getElementById("instagram")){
        location.href = "https://www.instagram.com/dbentler/"
    }
}

function downloadResume(){
    //
}