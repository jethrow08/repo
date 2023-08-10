document.addEventListener('DOMContentLoaded', () => {
    const noodlesGif = document.querySelector('.noodles-gif');
    const moveLetters = document.querySelectorAll('.move-letter');
    const lastLetter = moveLetters[moveLetters.length - 1];

    noodlesGif.addEventListener('click', () => {
        noodlesGif.classList.add('bounce');
        setTimeout(() => {
            noodlesGif.classList.remove('bounce');
        }, 1000);
    });

    moveLetters.forEach((letter, index) => {
        setTimeout(() => {
            letter.classList.add('falling');
        }, index * 2000);
    });

    if (lastLetter) {
        lastLetter.addEventListener('animationend', () => {
            lastLetter.classList.remove('falling');
        });
    }
});





