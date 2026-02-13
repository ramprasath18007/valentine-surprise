const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const music = document.getElementById("bgMusic");
const buttonArea = document.getElementById("buttonArea");

let noClickCount = 0;

/* Start music on first user tap (required for mobile) */
document.addEventListener("click", function () {
    music.play();
}, { once: true });

/* Move NO button safely inside box */
function moveNoButton() {

    if (noClickCount >= 4) {
        showWarning();
        return;
    }

    const maxX = buttonArea.clientWidth - noBtn.offsetWidth;
    const maxY = buttonArea.clientHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    noClickCount++;
}

/* Works for both mobile & desktop */
noBtn.addEventListener("touchstart", moveNoButton);
noBtn.addEventListener("mouseover", moveNoButton);

/* YES BUTTON */
yesBtn.addEventListener("click", function () {
    document.body.innerHTML = `
        <div class="result">
            <h1>It’s Just For Fun 😜</h1>
            <h2>Get Well Soon 💖</h2>
            <img src="./assets/getwell.jpg">
        </div>
    `;
});

/* After 4 NO attempts */
function showWarning() {
    document.body.innerHTML = `
        <div class="result">
            <h1>Don’t Mess With Me 😼</h1>
            <img src="./assets/cat.jpg">
        </div>
    `;
}
