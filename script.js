// script.js
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("main > section");
    const btn = document.createElement("button");
    btn.textContent = "Discover a Renuka Quirk!";
    btn.style.display = "block";
    btn.style.margin = "20px auto";
    btn.onclick = function() {
        sections.forEach(section => section.style.display = "none");
        const randomSection = sections[Math.floor(Math.random() * sections.length)];
        randomSection.style.display = "block";
    };

    document.querySelector("main").prepend(btn);
});
