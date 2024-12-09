const skillsButton = document.getElementById('skillsButton') as HTMLButtonElement

const skills = document.getElementById('skills') as HTMLElement

skillsButton.addEventListener('click' , ()=> {
    if(skills.style.display === 'none') {
        skills.style.display = 'block'
    } else {
        skills.style.display = 'none'
    }
});
