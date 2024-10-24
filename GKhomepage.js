

window.addEventListener('scroll', () => {
    const firstSection = document.querySelector('.first');
    const dieSection = document.querySelector('.die');
    const firstSectionBottom = firstSection.getBoundingClientRect().bottom;
    const dieSectionTop = dieSection.getBoundingClientRect().top;

    console.log('First section bottom:', firstSectionBottom);
    console.log('Die section top:', dieSectionTop);

    if (firstSectionBottom <= 0 && dieSectionTop >= 0) {
        console.log('Animating die section');
        dieSection.classList.add('animate');
    } else {
        console.log('Removing animation from die section');
        dieSection.classList.remove('animate');
    }
});

function addToCart() {
    document.getElementById('cart-indicator').style.display = 'block';
}

document.querySelector('button').addEventListener('click', addToCart);

