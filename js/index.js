let swipeTrue = true;
let swipe = (delta) => {
    if (delta > 0 && swipeTrue) {
        let width = window.innerWidth;
        if(width <= 450) {
            const kdText = document.getElementById('kaindorfText');
            kdText.id = kdText.id + "-scrolled";
        }
        const before = document.getElementsByClassName("scroll")[0];
        before.id = "afterScroll";
        const nav = document.getElementsByTagName("nav")[0];
        nav.className = nav.className.replace("unscrolled", "scrolled");
        const content = document.getElementById("content-unscrolled");
        content.style.display = "block";
        setTimeout(() => {
            content.id = "content-scrolled";
        }, 11);
        const abts = document.getElementsByClassName("abt");
        for (let abt of abts) {
            abt.id = abt.id + "-scrolled";
        }
        swipeTrue = false;
    }
};

document.addEventListener("wheel", (e) => {
    swipe(e.deltaY);
});

//animate scrollDown PFEILE
let pfeile = document.getElementsByClassName('fas fa-angle-right');
let pfeilBool = 0;
let changePfeil = () => {
    if (pfeilBool == 0) {
        pfeile[0].style.color = "#fff";
        pfeile[1].style.color = "#fff";
        pfeilBool++;
    } else if (pfeilBool == 1) {
        pfeile[0].style.color = "#631175";
        pfeilBool++;
    } else if (pfeilBool == 2) {
        pfeile[1].style.color = "#631175";
        pfeilBool++;
    } else if (pfeilBool == 3) {
        pfeile[0].style.color = "#fff";
        pfeilBool = 0;
    }
}
setInterval(function () {
    changePfeil();
}, 800);

let randomColor = () => {
    const randLets = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += randLets[Math.floor(Math.random() * 16)];
    }
    return color;
}

let ciscodisco = () => {
    setInterval(function () {
        const elems = document.body.getElementsByTagName("*");
        for (let item of elems) {
            item.style.backgroundColor = randomColor();
        }
    }, 500);
}