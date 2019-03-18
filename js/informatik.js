import Typed from "./typedjs/typed.js";

let typed = new Typed('#typed', {
    strings: ["software", "networking", "informatik"],
    typeSpeed: 55,
    backSpeed: 25
});

//Pfeil zum runterscrollen
document.getElementById("down-btn").addEventListener("click", () => {
    let scrollOptions = {
        left: 0,
        top: window.innerHeight - 140,
        behavior: "smooth"
    };
    window.scrollTo(scrollOptions);
});