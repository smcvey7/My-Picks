
const pitchMe = document.getElementById("pitchMe");
const pitchInitial = document.getElementById("pitchInitial");
const pitchClick = document.getElementById("pitchClick");



function givePitch() {
    pitch.style.width = "350px";
    pitch.style.height = "275px";
    pitchInitial.style.display = "none"
    pitchClick.style.display = "contents"
}

pitchMe.addEventListener("click", givePitch);


const submit = document.getElementById("submit");

submit.addEventListener("Click", alert("Thank you for your recommendation!"));