
const name=document.getElementById('');
const number=document.getElementById('number');

const email=document.getElementById('');
const web=document.getElementById('');



setInterval(() => {
    const isHovered = window.getComputedStyle(name).backgroundColor === 'rgb(144, 238, 144)';
    if (isHovered) {
        name.textContent = ''
    } else {
        hoverableDiv.textContent = '';
    }

    
}, 100);