var secondsClock = 0;
document.onclick = function() {
    secondsClock = 0;};

document.onkeypress = function() {
    secondsClock = 0;};

document.onmousemove = function() {
    secondsClock = 0;};

function tabRotator() {
    secondsClock++;
    if (secondsClock == 30) {
        location.href="courses_pg2.html"
    }
}
window.setInterval(tabRotator, 1000); //checks event every one secon 
