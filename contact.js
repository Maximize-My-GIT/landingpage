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
document.getElementById('sipButton').addEventListener('click', function() {
    window.location.href = 'sip.html';
});
document.getElementById('contactMeButton').addEventListener('click', function() {
    window.location.href = 'contact.html';
});
document.getElementById('boardButton').addEventListener('click', function() {
    window.location.href = 'board.html';
});
document.getElementById('gitHubButton').addEventListener('click', function() {
    window.location.href = 'contact.html';
});