const noBtn = document.getElementById("noBtn");
let noClickCount = 0;

noBtn.addEventListener("touchstart", moveButton);
noBtn.addEventListener("mouseover", moveButton);

function moveButton() {
    if (noClickCount >= 3) return;

    const container = document.querySelector(".buttons");
    const containerRect = container.getBoundingClientRect();

    const maxX = containerRect.width - noBtn.offsetWidth;
    const maxY = containerRect.height - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    noClickCount++;

    if (noClickCount >= 4) {
        window.location.href = "warning.html";
    }
}
