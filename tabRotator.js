var secondsClock = 0;
document.onclick = function() {
    secondsClock = 0;};

document.onmousemove = function() {
    secondsClock = 0;};

document.onkeypress = function() {
    secondsClock = 0;};

window.setInterval(tabRotator, 1000);

function tabRotator() {
    secondsClock++;
    if (secondsClock == 30) {
        location.href="courses_link.html"
    }
}