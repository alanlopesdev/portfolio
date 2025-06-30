const body = document.getElementById('body');
const colorText = document.querySelectorAll('.color-text');
const buttonColorMode = document.getElementById('button-color-mode');
const skillsContainers = document.querySelectorAll('.skills-container');
const root = document.documentElement;

function mudarCor() {
    
}

buttonColorMode.addEventListener("click", () => {

    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white"
        colorText.forEach(color => {
            color.style.color = "black"
        })
        root.style.setProperty("--box-shadow", "0 0 10px 0 rgba(94, 88, 88, 0.5)")
    }
    else {
        body.style.backgroundColor = "black"
        colorText.forEach(color => {
            color.style.color = "#00ff00"
        })
        root.style.setProperty("--box-shadow", "0 0 10px 0 rgba(149, 255, 0, 0.93)")
    }
})
