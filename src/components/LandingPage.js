import React from "react";
import "../style/landingStyle.css";
import CronosLogo from "../assets/CronosLogo.png";
import send from "../assets/send.png";
import sablier from "../assets/sablier.png";
import CronosGod from "../assets/CronosGod.png";
import man from "../assets/man.png";
import woman from "../assets/woman.png";
import qrcode from "../assets/qrcode.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function LandingPage() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".two",
        start: "-10% 60%",
        end: "80% 50%",
        scrub: true,
        // markers: true,
      },
    });
    tl.to(
      "#cronoslogo",
      {
        top: "130%",
        left: "0%",
      },
      "send"
    );
    tl.to(
      "#sablier",
      {
        top: "160%",
        left: "23%",
      },
      "send"
    );
    tl.to(
      "#send",
      {
        top: "180%",
        right: "0%",
      },
      "send"
    );
    tl.to(
      "#man",
      {
        top: "120%",
        left: "70%",
      },
      "send"
    );

    tl.to(
      "#woman",
      {
        top: "120%",
        left: "0%",
        zIndex: 15,
      },
      "send"
    );
    gsap.registerPlugin(ScrollTrigger);
    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".three",
        start: "-10% 75%",
        end: "80% 50%",
        scrub: true,
        // markers: true,
      },
    });
    tl2.to(
      "#cronoslogo",
      {
        top: "230%",
        left: "15%",
        zIndex: 8,
      },
    );
  });

  return (
    <div className="main">
      <nav>
        <img src={CronosLogo} alt="" style={{ width: '60px', height: '60px' }} />
        <div className="nav-center">
          <a href="Admin">ADMIN</a>
        </div>
      </nav>
      <div className="one">
        <h1>Cronos</h1>
        <img src={sablier} alt="" id="sablier" />
        <img src={CronosLogo} alt="" id="cronoslogo" />
        <img src={send} alt="" id="send" />
        <img src={man} alt="" id="man" />
        <img src={woman} alt="" id="woman" />
        <img src={CronosGod} alt="" id="cronosgod" />
      </div>
      <div className="two">
        <div className="lft-two">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FF0066"
              d="M35.2,-16.9C48.4,2.5,63.7,24,58.2,37.8C52.7,51.6,26.3,57.7,4.1,55.3C-18.1,52.9,-36.2,42.1,-46.9,25.3C-57.6,8.5,-60.9,-14.3,-51.9,-31.3C-42.9,-48.2,-21.4,-59.4,-5.2,-56.4C11,-53.4,22.1,-36.2,35.2,-16.9Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="rght-two">
          <h1>Découvrez Cronos</h1>
          <p>
            Bienvenue sur Cronos, le futur réseau social en vogue, disponible sur Android et iOS. Connectez-vous avec vos amis et découvrez de nouvelles personnes dans une interface élégante et intuitive. Partagez vos moments favoris, suivez l'actualité et restez en contact avec ceux qui comptent le plus pour vous. Rejoignez la révolution Cronos dès aujourd'hui et faites partie de la communauté la plus dynamique et passionnante du web !
          </p>
        </div>
      </div>
      <div className="three">
        <div className="lft-three">
        <h1>Téléchargez la nouvelle application Cronos !</h1>
          <p>
            Scannez ces QR codes pour télécharger Cronos sur Android et iOS.
          </p>
        </div>
        <div className="rght-three">
          Scanne-moi:
          <img src={qrcode} alt="" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
