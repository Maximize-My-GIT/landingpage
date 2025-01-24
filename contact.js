'use strict';


let btn= document.getElementById("ContactMeButton") 
btn.addEventListener("click", function(){
    // event.preventDefault(e);

   alert("Thank You!")
})

document.getElementById('homeButton').addEventListener('click', function() {
    window.location.href = 'index.html';
});
document.getElementById('aboutButton').addEventListener('click', function() {
    window.location.href = 'about.html';
});
document.getElementById('resumeButton').addEventListener('click', function() {
    window.location.href = 'resume.html';
});
document.getElementById('contactButton').addEventListener('click', function() {
    window.location.href = 'contact.html';
});
