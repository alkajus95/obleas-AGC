const btn = document.getElementById('btn');
const container = document.querySelector('.container');
const body = document.body;
let isDarkMode = false;

btn.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    container.classList.toggle('dark-mode', isDarkMode);
    body.style.color = isDarkMode ? '#fff' : '#000';
    body.style.backgroundColor = isDarkMode ? '#333' : '#fff';
    btn.style.color = isDarkMode ? '#fff' : '#000';
    btn.style.backgroundColor = isDarkMode ? '#333' : '#fff';
});