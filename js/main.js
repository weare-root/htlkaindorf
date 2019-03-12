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

const btnCont = document.getElementsByClassName("btn-container")[0];
const btnL1 = document.querySelector(".btn #line1");
const btnL2 = document.querySelector(".btn #line2");
const middle = document.getElementsByClassName("middle")[0];
const popup = document.getElementsByClassName("popup")[0];
let state = false;
btnCont.addEventListener("click", () => {
    var pos1 = btnL1.getAttribute("y2");
    var pos2 = btnL2.getAttribute("y2");
    popup.classList.toggle("open")
    if (state === false) {
        state = true;

        middle.id = "middle-opened";

        int1 = setInterval(function () {
            if (pos1 > 48) {
                clearInterval(int1);
            }
            pos1++;
            btnL1.setAttribute("y2", pos1);
        }, 2);
        int2 = setInterval(function () {
            if (pos2 < 12) {
                clearInterval(int2);
            }
            pos2--;
            btnL2.setAttribute("y2", pos2);
        }, 2);
    } else if (state === true) {
        state = false;

        middle.id = "middle-closed";

        int1 = setInterval(function () {
            if (pos1 < 12) {
                clearInterval(int1);
            }
            pos1--;
            btnL1.setAttribute("y2", pos1);
        }, 2);
        int2 = setInterval(function () {
            if (pos2 > 48) {
                clearInterval(int2);
            }
            pos2++;
            btnL2.setAttribute("y2", pos2);
        }, 2);
    }
});