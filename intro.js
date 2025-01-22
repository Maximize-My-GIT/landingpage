'use strict';

document.getElementById('aboutButton').addEventListener('click', function() {
    var aboutMeSection = document.getElementById('aboutMe');
    if (aboutMeSection.style.display === 'none' || aboutMeSection.style.display === '') {
        aboutMeSection.style.display = 'block';
    } else {
        aboutMeSection.style.display = 'none';
    }
});
   