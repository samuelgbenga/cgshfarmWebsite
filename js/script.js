// selection
var topJet = document.querySelector("#top-jet");
var toggler = document.querySelector("#mobile-toggler");
var navMenu = document.querySelector("nav ul");
var animation = document.querySelector("#slide-in-container");
let animList = document.querySelectorAll("#slide-in-container div");
console.log(animList);

// listening for events
window.onscroll = function(){scrollFunction()};
toggler.addEventListener("click", doToggler);



// perform function
// jet back to home page
function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        topJet.style.display = "block";
    }
    else {
        topJet.style.display = "none";
    }
}

// toggle nav bar
function doToggler(){
    navMenu.classList.toggle('responsive');
    toggler.classList.toggle('toggled');
}

// displays and remove animation 
function removeAnime(){
        animation.style.left = -100 + "%";
}
function animie(newAnimList){
    
    for( const anim of newAnimList){
       
        if(anim.classList.contains('active')){
        animation.style.left = 0;
    }
    }
    setTimeout("removeAnime()", 5000)
}

// switching the active classes

// for removing the active class
function removeAnimImage(){
    for(const anim of animList){
        if(anim.classList.contains('active')){
            anim.classList.remove('active');
        }
    }
}

 
// insert an active class
let i = 0;
function insertActive(){
    removeAnimImage();
    if(i >= animList.length){
        i = 0;
        animList[i].classList.add('active');
    }
    else{
        animList[i].classList.add('active');
    }
    i++;
    animie(animList);
    setTimeout("insertActive()", 6000);
    
}
setTimeout("insertActive()", 2000);