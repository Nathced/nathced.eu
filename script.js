const textElement = document.getElementById('animated-text');
const messages = ['maintenance', 'cours de construction', 'développement'];
let currentMessageIndex = 0;
let currentText = '';
let isDeleting = false;
let speed = 150;

function type() {
    const currentMessage = messages[currentMessageIndex];
    if (isDeleting) {
        currentText = currentMessage.substring(0, currentText.length - 1);
    } else {
        currentText = currentMessage.substring(0, currentText.length + 1);
    }

    textElement.textContent = currentText;

    if (!isDeleting && currentText === currentMessage) {
        isDeleting = true;
        speed = 100;  // pause avant de commencer à supprimer
        setTimeout(type, 1000);
    } else if (isDeleting && currentText === '') {
        isDeleting = false;
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        speed = 150;  // pause avant de commencer à taper le mot suivant
        setTimeout(type, 500);
    } else {
        setTimeout(type, speed);
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(type, 500);
});
