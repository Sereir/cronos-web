import React from "react";
import "../style/landingStyle.css";
import { RiMenuLine } from "@remixicon/react";
import CronosLogo from "../assets/CronosLogo.png";
import send from "../assets/send.png";
import slice from "../assets/slice.png";
import leaf from "../assets/leaf2.png";
import CronosGod from "../assets/CronosGod.png";
import leaf1 from "../assets/leaf1.png";
import pepsi from "../assets/pepsi.png";
import coco from "../assets/cocacola.png";
import lemon from "../assets/lemon.webp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
function LandingPage() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "70% 50%",
        scrub: true,
        markers: true,
      },
    });
    tl.to(
      "#cronoslogo",
      {
        top: "120%",
        left: "0%",
      },
      "send"
    );
    tl.to(
      "#orange-cut",
      {
        top: "160%",
        left: "23%",
      },
      "send"
    );
    tl.to(
      "#send",
      {
        width: "15%",
        top: "160%",
        right: "10%",
      },
      "send"
    );
    tl.to(
      "#leaf",
      {
        top: "110%",
        left: "70%",
      },
      "send"
    );

    tl.to(
      "#leaf2",
      {
        top: "120%",
        left: "0%",
      },
      "send"
    );
    gsap.registerPlugin(ScrollTrigger);
    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".three",
        start: "0% 95%",
        end: "70% 50%",
        scrub: true,
        // markers: true,
      },
    });
    tl2.from(
      ".lemon1",
      {
        left: "-100%",
      },
      "ca"
    );
    tl2.from(
      "#cocacola",
      {
        rotate: "90deg",
        left: "-100%",
      },
      "ca"
    );
    tl2.from(
      ".lemon2",
      {
        left: "100%",
      },
      "ca"
    );
    tl2.from(
      "#pepsi",
      {
        top: "110%",
        rotate: "90deg",
        left: "100%",
      },
      "ca"
    );
    tl2.to(
      "#cronoslogo",
      {
        top: "220%",
        left: "32%",
        width: "38%",
      },
      "ca"
    );
    tl2.to(
      "#orange-cut",
      {
        top: "200%",
        left: "36%",
        width: "30%",
      },
      "ca"
    );
  });

  return (
    <div className="main">
      {/* <nav>
        <h1>Logo</h1>
        <div className="nav-center">
          <a href="#">Home</a>
          <a href="#">Contact</a>
          <a href="#">Products</a>
        </div>
        <div>
          <RiMenuLine />
        </div>
      </nav> */}
      <div className="one" style={{border: "2px solid red"}}>
        <h1>Cronos</h1>
        <img src={slice} alt="" id="orange-cut" />
        <img src={CronosLogo} alt="" id="cronoslogo" />
        <img src={send} alt="" id="send" />
        <img src={leaf1} alt="" id="leaf" />
        <img src={leaf} alt="" id="leaf2" />
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
        <div class="rght-two">
          <h1>Flavour Updated</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
            excepturi sed, itaque placeat id natus soluta veniam obcaecati qui a
            laborum laboriosam dolorem illum labore sit, voluptates commodi
            neque dolores tempore temporibus deleniti? Nobis, ratione hic error
            quis cum neque nulla laudantium nostrum sit nihil dolorum quisquam
            enim quaerat, eaque ex sequi, harum totam quia non! Labore, neque!
            Amet voluptatem illo similique recusandae! Ex quaerat quibusdam
            asperiores, ducimus tempore magni labore. Tenetur voluptas, quos ex
            repellendus provident mollitia laboriosam adipisci alias a impedit,
            cum accusamus rerum delectus eaque facilis veniam quia laborum
            incidunt ea assumenda! Eos magni aspernatur quod distinctio.
          </p>
        </div>
      </div>
      <div className="three">
        <div className="card">
          <img className="lemon lemon1" src={lemon} alt="" />
          <img id="cocacola" src={coco} alt="" />
          <h1>CocaCola</h1>
          <button>Buy Now</button>
        </div>
        <div class="card">
          <h1>Cronos</h1>
          <button>Buy Now</button>
        </div>
        <div className="card">
          <img className="lemon lemon2" src={lemon} alt="" />
          <img id="pepsi" src={pepsi} alt="" />
          <h1>Pepsi</h1>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
