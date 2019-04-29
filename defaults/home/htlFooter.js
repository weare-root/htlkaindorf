const htlFooter = {
  getFooterText: () => {
    return `
        <footer>
            <ul class="flex footer-links">
                <li><a href="./calendar/index.html">Calendar</a></li>
                <li><a href="./impressum/index.html">Impressum</a></li>
                <li><a href="./dsgvo/index.html">DSGVO</a></li>
                <li><a href="./links/index.html">Links</a></li>
            </ul>
            <div class="footer-images">
                <img id="eu-flag-co-founded" src="./images/eu_flag_co_funded.jpg" alt="eu-flag-co-funded" />
                <a id="facebook" href="https://www.facebook.com/HTBLAKaindorf" target="_blank" rel="noreferrer noopener"><img
                        src="./images/face_logo.png" alt="Facebook-Logo" /></a>
            </div>
        </footer>
        `;
  },
  parseAll: () => {
    let jars = document.getElementsByTagName('htl-footer');
    Array.from(jars).forEach(element => {
      element.innerHTML = htlFooter.getFooterText();
    });
  }
};

(() => {
  let style = document.createElement('style');
  style.type = 'text/css';

  let tags = `
    footer {
        bottom: 0;
        width: 100%;
        height: 300px;
        background-color: rgba(228, 228, 228, 0.86);
        border-top: 5px solid #631175;
        border-bottom: 5px solid #631175;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: auto; }
        footer .footer-links {
          max-width: 1200px;
          margin: 0 auto;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          margin-top: 50px;
          margin-bottom: 50px;
          line-height: 110%; }
          footer .footer-links li {
            border-left: 1px solid black;
            padding-left: 7px;
            padding-right: 7px;
            cursor: pointer; }
            footer .footer-links li:first-child {
              border-left: none;
              padding-left: 0; }
            footer .footer-links li:last-child {
              padding-right: none; }
            footer .footer-links li a {
              position: relative;
              color: #000;
              text-decoration: none; }
            footer .footer-links li a:before {
              content: "";
              position: absolute;
              width: 100%;
              height: 2px;
              bottom: 0;
              left: 0;
              background-color: #1d1d1d;
              visibility: hidden;
              -webkit-transform: scaleX(0);
              transform: scaleX(0);
              -webkit-transition: all 0.25s ease-in-out 0s;
              transition: all 0.25s ease-in-out 0s; }
            footer .footer-links li a:hover:before {
              visibility: visible;
              -webkit-transform: scaleX(1);
              transform: scaleX(1); }
        footer .footer-images #facebook {
          height: 60px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%); }
          footer .footer-images #facebook img {
            height: 60px; }
        footer .footer-images #eu-flag-co-founded {
          height: 60px; }
          footer .footer-images #eu-flag-co-founded img {
            height: 60px; }
    `;

  style.appendChild(document.createTextNode(tags));

  document.body.appendChild(style);
})();