var skillsButton = document.getElementById('skillsButton');
var skills = document.getElementById('skills');
skillsButton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
