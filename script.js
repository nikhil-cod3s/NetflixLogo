document.addEventListener("DOMContentLoaded", function() {
    var animationElement = document.getElementById("animationElement");

    animationElement.addEventListener("animationend", function() {
        window.location.href = "/GlassMorph Portfolio/index.html"; // Replace with your desired file
    });
});
