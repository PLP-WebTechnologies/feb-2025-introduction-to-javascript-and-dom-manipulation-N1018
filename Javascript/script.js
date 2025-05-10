document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("heading").textContent = "Enjoying JavaScript!";
});
document.getElementById("heading").style.color = "#885df1";
document.getElementById("toggleElementBtn").addEventListener("click", function() {
    let container = document.getElementById("container");
    let newElement = document.getElementById("newElement");
if (newElement) {
        container.removeChild(newElement);
    } else {
        let paragraph = document.createElement("p");
        paragraph.id = "newElement";
        paragraph.textContent = "Javascript is a versatile language!";
        paragraph.style.color = "#272044";
        container.appendChild(paragraph);
    }
});






