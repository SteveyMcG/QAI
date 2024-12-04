
function toggleText(){
    const hideableText = document.getElementById('hideableText');
    const button = document.getElementById('textToggle');

    if (hideableText.style.display === "none" || hideableText.style.display === "") {
        hideableText.style.display = "flex";
        button.textContent = "Read Less";
    } else {
        hideableText.style.display = "none";
        button.textContent = "Read More";
    }
}
function toggleText2(){
    const hideableText = document.getElementById('hideableText2');
    const button = document.getElementById('textToggle2');

    if (hideableText.style.display === "none" || hideableText.style.display === "") {
        hideableText.style.display = "flex";
        button.textContent = "Read Less";
    } else {
        hideableText.style.display = "none";
        button.textContent = "Read More";
    }
}