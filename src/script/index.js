const fish = document.querySelector('.fish');
const bodyWidth = document.body.clientWidth;
let swimDirection = 1;

function swim() {
    const fishPosition = fish.getBoundingClientRect().x;
    if (fishPosition + fish.clientWidth >= bodyWidth || fishPosition <= 0) {
        swimDirection *= -1;
        fish.style.transform = `scaleX(${swimDirection})`;
    }
    fish.style.transform = `translateX(${fishPosition + 5 * swimDirection}px) scaleX(${swimDirection})`;
    window.requestAnimationFrame(swim);
}

swim();
