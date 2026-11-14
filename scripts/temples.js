const yearSpan = document.querySelector("#currentyear");
const lastModifiedSpan = document.querySelector("#lastModified");

const today = new Date();
yearSpan.textContent = today.getFullYear();
lastModifiedSpan.textContent = document.lastModified;

// Responsive Hamburger Menu Toggle
const hambutton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hambutton.classList.toggle('open');
});