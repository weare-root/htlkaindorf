const htlNav = {
  getNavText: (scrolled) => {
    return `
        <nav class="abteilungen flex ${scrolled ? "scrolled":"unscrolled"}">
            <div id="leftAbt">
                <a class="abt" href=./abteilung/informatik.html" id="abt-info">
                    <img id="abt-logo-info" class="abtLogo" src="./images/abteilungen/info.png" alt="Info Small Logo">
                    <div class="abtName" id="abt-name-info">Informatik</div>
                </a>
                <a class="abt" href="./abteilung/automatisierung.html" id="abt-aut">
                    <img id="abt-logo-aut" class="abtLogo" src="./images/abteilungen/aut.png" alt="Aut Small Logo">
                    <div class="abtName" id="abt-name-aut">Automatisierung</div>
                </a>
            </div>
            <div id="kaindorfText">
                <div id="kaindorfText-top">
                    <span id="light">htbla</span><span id="bold">kaindorf</span>
                </div>
                <div id="kaindorfText-bottom">
                    <span id="light">Leistung mit Menschlichkeit</span>
                </div>
            </div>
            <!--<img id="kaindorfText" src="./images/kaindorfText.png" alt="Kaindorf Text">-->
            <div id="rightAbt">
                <a class="abt" href="./abteilung/mechatronik.html" id="abt-mech">
                    <img id="abt-logo-mech" class="abtLogo" src="./images/abteilungen/mech.png" alt="Mech Small Logo">
                    <div class="abtName" id="abt-name-mech">Mechatronik</div>
                </a>
                <a class="abt" href="./abteilung/robotik.html" id="abt-rob">
                    <img id="abt-logo-rob" class="abtLogo" src="./images/abteilungen/rob.png" alt="Rob Small Logo">
                    <div class="abtName" id="abt-name-rob">Robotik</div>
                </a>
            </div>
            <div class="btn-container flex">
                <p>Menü</p>
                <svg class="btn">
                    <line x1="5" y1="10" x2="45" y2="10" id="line1"></line>
                    <line x1="5" y1="30" x2="45" y2="30" id="middle-closed" class="middle"></line>
                    <line x1="5" y1="50" x2="45" y2="50" id="line2"></line>
                </svg>
            </div>
        </nav>

        <div class="nav-menu">
            <div class="popup flex">
                <ul class="flex links">
                    <li><a href="#">Schule</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Aktuelles</a></li>
                    <li><a href="#">Anmeldung</a></li>
                    <li><a href="#">Kontakt</a></li>
                </ul>
                <div class="flex nav-logos">
                    <a class="flex" href="./abteilung/informatik.html" id="abt-info">
                        <img class="abtLogo abt-logos-nm" src="./images/abteilungen/info.png" alt="Info Small Logo">
                        <div id="abt-name-info">Informatik</div>
                    </a>
                    <a class="flex" href="./abteilung/automatisierung.html" id="abt-aut">
                        <img class="abtLogo abt-logos-nm" src="./images/abteilungen/aut.png" alt="Aut Small Logo">
                        <div id="abt-name-aut">Automatisierung</div>
                    </a>
                    <a class="flex" href="./abteilung/mechatronik.html" id="abt-mech">
                        <img class="abtLogo abt-logos-nm" src="./images/abteilungen/mech.png" alt="Mech Small Logo">
                        <div id="abt-name-mech">Mechatronik</div>
                    </a>
                    <a class="flex" href="./abteilung/robotik.html">
                        <img class="abtLogo abt-logos-nm" src="./images/abteilungen/rob.png" alt="Rob Small Logo">
                        <div id="abt-name-rob">Robotik</div>
                    </a>
                </div>
            </div>
        </div>
        `;
  },
  parseAll: (scrolled) => {
    //add the NAV
    let jars = document.getElementsByTagName('htl-nav');
    Array.from(jars).forEach(element => {
      element.innerHTML = htlNav.getNavText(scrolled);
    });

    /*
     * THE JAVASCRIPT FOR THE NAV
     */
    const home = document.getElementById("kaindorfText");
    home.addEventListener("click", () => {
      window.location.href = "/";
      return false;
    });

    //ABTS HOVER
    const abts = document.getElementsByClassName("abt");
    for (let abt of abts) {
      abt.addEventListener("mouseover", () => {
        let query = "#" + abt.id + " .abtName";
        const name = document.querySelector(query);
        name.className = name.className + "-hovered";
      });
      abt.addEventListener("mouseout", () => {
        let query = "#" + abt.id + " .abtName-hovered";
        const name = document.querySelector(query);
        name.className = name.className.replace("-hovered", "");
      });
    }

    //abt scrolled
    if (scrolled) {
      for (let abt of abts) {
        abt.id = abt.id + '-scrolled';
      }
    }

    //ON RESIZE
    window.addEventListener('resize', () => {
      let kdText = document.getElementById('kaindorfText') || document.getElementById('kaindorfText-scrolled');

      if (!swipeTrue && window.innerWidth < 600) {
        if (!kdText.id.endsWith('-scrolled')) {
          kdText.id = kdText.id + '-scrolled';
        }
      } else {
        kdText.id = kdText.id.replace('-scrolled', '');
      }
    });

    //THE MENU BAR BUTTON
    const btnCont = document.getElementsByClassName("btn-container")[0];
    const btnL1 = document.querySelector(".btn #line1");
    const btnL2 = document.querySelector(".btn #line2");
    const middle = document.getElementsByClassName("middle")[0];
    const popup = document.getElementsByClassName("popup")[0];
    let state = false;
    btnCont.addEventListener("click", () => {
      var pos1 = btnL1.getAttribute("y2");
      var pos2 = btnL2.getAttribute("y2");
      popup.classList.toggle("open");
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
  }
};

(() => {
  let style = document.createElement('style');
  style.type = 'text/css';

  let tags = `
    .abteilungen {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 100%;
        background-color: #631175;
        -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.56);
        box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.56);
        z-index: 2; }
        .abteilungen .abtLogo {
          border-radius: 50%; }
        .abteilungen .abtName {
          top: 0;
          position: absolute; }
        .abteilungen .abtName-hovered {
          background-color: white;
          border-radius: 50%;
          position: absolute;
          left: 50%;
          -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
          -webkit-animation: abt-name-fly 1000ms ease;
          animation: abt-name-fly 1000ms ease;
          -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
          overflow: hidden;
          text-align: center;
          line-height: 60px;
          font-size: 25px;
          letter-spacing: -1px;
          font-family: "Source Code Pro", Arial, Helvetica, sans-serif;
          border: 1px solid lightgrey; }
        .abteilungen #abt-name-info {
          color: #4370b3; }
        .abteilungen #abt-name-aut {
          color: #a11c33; }
        .abteilungen #abt-name-mech {
          color: #df9015; }
        .abteilungen #abt-name-rob {
          color: #63bb43; }
        .abteilungen #rightAbt a,
        .abteilungen #leftAbt a {
          z-index: 7; }
        .abteilungen .btn-container {
          position: absolute;
          right: 5px;
          cursor: pointer;
          z-index: 12;
          color: white; }
          .abteilungen .btn-container p {
            line-height: 55px;
            height: 55px;
            font-size: 40px;
            text-transform: capitalize;
            font-family: "Open Sans";
            margin-right: 10px;
            z-index: 12; }
          .abteilungen .btn-container .btn {
            height: 55px;
            width: 50px;
            z-index: 12; }
            .abteilungen .btn-container .btn line {
              stroke-width: 3px;
              stroke: white; }
            .abteilungen .btn-container .btn .middle {
              transition: all 0.2s; }
            .abteilungen .btn-container .btn #middle-closed {
              opacity: 1; }
            .abteilungen .btn-container .btn #middle-opened {
              opacity: 0; }
      
      /*
      *	Animations for HOVER texts of logo navigation
      */
      @-webkit-keyframes abt-name-fly {
        0% {
          top: 50%;
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          letter-spacing: 5px; }
        50% {
          border-radius: 50%;
          width: 60px;
          height: 60px;
          padding: 0;
          letter-spacing: 5px; }
        100% {
          top: 120%;
          height: 60px;
          border-radius: 5px;
          width: 220px;
          padding: 0 5px; } }
      @keyframes abt-name-fly {
        0% {
          top: 50%;
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          letter-spacing: 5px; }
        50% {
          border-radius: 50%;
          width: 60px;
          height: 60px;
          padding: 0;
          letter-spacing: 5px; }
        100% {
          top: 120%;
          height: 60px;
          border-radius: 5px;
          width: 220px;
          padding: 0 5px; } }
      /*
      *	Ankmations for HOVER texts of logo navigation #OVER
      */
      #abt-logo-info {
        border: 1px solid lightgrey;
        background-color: #4370b3;
        background-clip: content-box;
        transition: all ease-in-out 200ms;
       }
      #abt-logo-info:hover {
        border: 1px solid #4370b3;
        -webkit-box-shadow: 0px 0px 5px 3px #4370b3;
        box-shadow: 0px 0px 5px 3px #4370b3;
      }

      #abt-logo-aut {
        border: 1px solid lightgrey;
        background-color: #a11c33;
        transition: all ease-in-out 200ms;
      }
      #abt-logo-aut:hover {
        border: 1px solid #a11c33;
        -webkit-box-shadow: 0px 0px 5px 3px #a11c33;
        box-shadow: 0px 0px 5px 3px #a11c33;
      }
      
      #abt-logo-mech {
        border: 1px solid lightgrey;
        transition: all ease-in-out 200ms;
        background-color: #df9015; 
      }
      #abt-logo-mech:hover {
        border: 1px solid #df9015;
        -webkit-box-shadow: 0px 0px 5px 3px #df9015;
        box-shadow: 0px 0px 5px 3px #df9015;
      }
      
      #abt-logo-rob {
        border: 1px solid lightgrey;
        transition: all ease-in-out 200ms;
        background-color: #63bb43; 
      }
      #abt-logo-rob:hover {
        border: 1px solid #63bb43;
        -webkit-box-shadow: 0px 0px 5px 3px #63bb43;
        box-shadow: 0px 0px 5px 3px #63bb43;
      }
      
      /*
      *   FLY IN AFTER SCROLL
      */
      #abt-info-scrolled {
        -webkit-animation: fly-abt-after-scroll 600ms ease-out;
        animation: fly-abt-after-scroll 600ms ease-out;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
        position: absolute;
        -webkit-transform: translate(-200%);
        transform: translate(-200%);
        -webkit-transition: width 600ms, height 600ms;
        transition: width 600ms, height 600ms; }
      
      #abt-aut-scrolled {
        -webkit-animation: fly-abt-after-scroll 600ms ease-out;
        animation: fly-abt-after-scroll 600ms ease-out;
        -webkit-animation-delay: 50ms;
        animation-delay: 50ms;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
        position: absolute;
        -webkit-transform: translate(-100%);
        transform: translate(-100%);
        -webkit-transition: width 600ms, height 600ms;
        transition: width 600ms, height 600ms; }
      
      #abt-mech-scrolled {
        -webkit-animation: fly-abt-after-scroll 600ms ease-out;
        animation: fly-abt-after-scroll 600ms ease-out;
        -webkit-animation-delay: 100ms;
        animation-delay: 100ms;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
        position: absolute;
        -webkit-transform: translate(0%);
        transform: translate(0%);
        -webkit-transition: width 600ms, height 600ms;
        transition: width 600ms, height 600ms; }
      
      #abt-rob-scrolled {
        -webkit-animation: fly-abt-after-scroll 600ms ease-out;
        animation: fly-abt-after-scroll 600ms ease-out;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
        -webkit-animation-delay: 150ms;
        animation-delay: 150ms;
        position: absolute;
        -webkit-transform: translate(100%);
        transform: translate(100%);
        -webkit-transition: width 600ms, height 600ms;
        transition: width 600ms, height 600ms; }
      
      /*
      *	Fly in after scroll animations
      */
      @-webkit-keyframes fly-abt-after-scroll {
        from {
          top: 50%;
          height: 144px;
          visibility: visible; }
        to {
          top: 0%;
          height: 60px;
          visibility: visible; } }
      @keyframes fly-abt-after-scroll {
        from {
          top: 50%;
          height: 144px;
          visibility: visible; }
        to {
          top: 0%;
          height: 60px;
          visibility: visible; } }
      /*
      *	FLY IN AFTER SCROLL #OVER
      */
      /*
      *	The Normal navigation (Schule/Service/..)
      */
      .nav-menu {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%; 
      }
        .nav-menu .popup {
          transition: opacity ease 1s;
          opacity: 0;
          visibility: hidden;
          width: 100%;
          height: 100%;
          z-index: -1;
          background-color: rgba(255, 255, 255, 0.442);
          position: fixed;
          left: 0;
          top: 0; 
        }
          .nav-menu .popup .links {
            width: 50%;
            height: 100%;
            flex-direction: column;
            justify-content: center; 
          }
            .nav-menu .popup .links li {
              width: 150px;
              line-height: 40px;
              text-align: center;
              margin: 0 auto;
              margin-bottom: 20px;
            }
              .nav-menu .popup .links li a {
                border: 1px solid #631175;
                background-color: white;
                padding: 15px 20px;
                width: 100%;
                color: #631175;
                display: block;
                transition-property: background-color, color;
                transition-timing-function: ease-in-out;
                transition-duration: 300ms;
                border-radius: 5px; 
              }
                .nav-menu .popup .links li a:hover {
                  color: white;
                  background-color: #631175; 
                }
          
          .nav-menu .popup .nav-logos {
            justify-content: center;
            flex-direction: column;
            width: 50%;
            height: 100%;
          }
          .nav-menu .popup .nav-logos .abt-logos-nm {
            background-color: #631175;
            background-clib: content-box;
            border: 2px solid #631175;
          }
            .nav-menu .popup .nav-logos a {
              border: 1px solid #631175;
              border-radius: 5px;
              transition-property: background-color, color;
              transition-timing-function: ease-in-out;
              transition-duration: 300ms;
              position: static !important;
              top: 0 !important;
              left: 0 !important;
              transform: none !important;
              margin: 10px auto;
              color: #631175; 
              background-color: white;
            }
              .nav-menu .popup .nav-logos a:hover {
                background-color: #631175;
                color: white;
              }
              .nav-menu .popup .nav-logos a img {
                border-radius: 50%; 
              }
              .nav-menu .popup .nav-logos a div {
                width: 180px;
                line-height: 156px;
                text-align: center; 
              }
        .nav-menu .open {
          z-index: 8;
          visibility: visible;
          opacity: 1; }
      
      /*
      *	The Normal navigation #OVER
      */
      #kaindorfText-scrolled {
        display: none; }
      
      .abtName {
        display: none; }
      
      .unscrolled {
        height: 130px; }
        .unscrolled .btn-container {
          top: 35px; }
      
      .scrolled {
        height: 70px;
        position: fixed;
        top: 0;
        left: 0;
        -webkit-transition: height 1s;
        transition: height 1s; }
        .scrolled a {
          height: 60px; }
        .scrolled #kaindorfText {
          left: 5px;
          -webkit-transform: none;
          transform: none;
          top: 0px; }
        .scrolled .btn-container {
          top: 5px; }
      
      #kaindorfText {
        top: 30px;
        -webkit-transition: left 800ms 1ms, top 800ms 1ms;
        transition: left 800ms 1ms, top 800ms 1ms;
        margin: auto 5px;
        position: absolute;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        cursor: pointer;
        color: white;
        letter-spacing: 2px;
        height: 70px;
        z-index: 5; }
        #kaindorfText #kaindorfText-top {
          font-size: 34px;
          font-family: "Open Sans", Arial, sans-serif;
          font-weight: 300; }
          #kaindorfText #kaindorfText-top #bold {
            font-weight: 700; }
    `
  style.appendChild(document.createTextNode(tags));
  document.body.appendChild(style);
})();