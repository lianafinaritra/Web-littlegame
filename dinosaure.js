window.addEventListener("DOMContentLoaded", () => {
    const dino = document.getElementById("dino");
    const cactus = document.getElementById("cactus");
    const interface = document.getElementById("interface");

    window.addEventListener("keydown", (evt) => {
        dino.classList.add("isJumping")
        setTimeout(function (){
            dino.classList.remove("isJumping")
        }, 1000)
    })
    
    setInterval (() => {
        let one = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
        let two = parseInt(window.getComputedStyle(cactus).getPropertyValue("right"));

        if((two >= 655) && (one <= 35)){
            alert("Vous avez perdu");
            interface.style.animation = "none";
        }
    }, 10);       
})

