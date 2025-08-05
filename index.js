const leftTop = document.querySelector('#left-top');
const leftBottom = document.querySelector('#left-bottom');
const rightTop = document.querySelector('#right-top');
const rightBottom = document.querySelector('#right-bottom');
const profilePopup = document.querySelector('.profile-popup');
const techStash = document.querySelector('.tech-stash-popup');
const projectPopup = document.querySelector('.project-popup');
const contactPopup = document.querySelector('.contact-popup');
const popup = document.querySelectorAll('.popup');
const overlay = document.querySelector('.overlay');
const content = document.getElementById('content');
const name = document.querySelector('.name');
const iDO = document.querySelector('.i-do');

let typeName = new Typed(".name",{
    strings : ['Raman Tyagi.'],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true
})

let typeIDo = new Typed(".i-do",{
    strings : ['Design','Develop'],
    typeSpeed : 200,
    backSpeed : 200,
    loop : true
})

leftTop.addEventListener('click', () => {
    profilePopup.style.display = 'block';
    overlay.style.display = 'block';
    content.style.opacity= '0.3';
});


leftBottom.addEventListener('click', () => {
    techStash.style.display = 'block';
    overlay.style.display = 'block';
    content.style.opacity= '0.3';
});


rightTop.addEventListener('click', () => {
    projectPopup.style.display = 'block';
    overlay.style.display = 'block';
    content.style.opacity= '0.3';
});
rightBottom.addEventListener('click', () => {
    contactPopup.style.display = 'block';
    overlay.style.display = 'block';
    content.style.opacity= '0.3';
});

overlay.addEventListener('click', (e) => {
    e.preventDefault();
    popup.forEach(popup => popup.style.display = 'none');

    overlay.style.display = 'none';
    content.style.opacity= 1;
});




