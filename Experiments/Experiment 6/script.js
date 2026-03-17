function changeHeading() {
    let text = document.getElementById("inputText").value;
    if (text !== "") {
        document.getElementById("heading").innerText = text;
    }
}
function changeBackground() {
    let randomColor = "#" + Math.floor(Math.random() * 16777215);
    document.body.style.backgroundColor = randomColor;
}
let fontSize = 16;
function increaseFont() {
    fontSize += 2;
    document.getElementById("para").style.fontSize = fontSize + "px";
    document.getElementById("heading").style.fontSize = fontSize + "px";
}
let isVisible = true;
function toggleParagraph() {
    let para = document.getElementById("para");

    if (isVisible) {
        para.style.display = "none";
    } else {
        para.style.display = "block";
    }

    isVisible = !isVisible;
}
function resetPage() {
    document.getElementById("heading").innerText = "JavaScript Lab";
    document.body.style.backgroundColor = "#f0f4f8";
    document.getElementById("para").style.fontSize = "16px";
    document.getElementById("para").style.display = "block";
    document.getElementById("inputText").value = "";
    fontSize = 16;
    isVisible = true;
}