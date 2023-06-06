function hit() {
    var circle = document.getElementById("circle");
    var stick = document.querySelector(".stick");
    var arrow = document.querySelector(".arrow");

    // Move arrow and stick using CSS animations
    stick.style.animation = "moveStick 2s forwards";
    arrow.style.animation = "moveArrow 2s forwards";

    // Change circle color when arrow hits it
    setTimeout(function() {
        circle.style.backgroundColor = "lightblue";
    }, 2000); 
}

function reset() {
    var circle = document.getElementById("circle");
    var stick = document.querySelector(".stick");
    var arrow = document.querySelector(".arrow");

    // Move arrow and stick back to original position
    stick.style.animation = "2";
    arrow.style.animation = "2";

    // Reset circle color
    circle.style.backgroundColor = "blue";
}