const home = document.getElementById("kaindorfText");
home.addEventListener("click", () => {
    window.location.href = "/";
    return false;
});

//ABTS HOVER
const abts = document.getElementsByClassName("abt");
for (let abt of abts) {
    abt.addEventListener("mouseover", (e) => {
        let query = "#" + abt.id + " .abtName";
        const name = document.querySelector(query);
        name.className = name.className + "-hovered";
    });
    abt.addEventListener("mouseout", (e) => {
        let query = "#" + abt.id + " .abtName-hovered";
        const name = document.querySelector(query);
        name.className = name.className.replace("-hovered", "");
    });
}