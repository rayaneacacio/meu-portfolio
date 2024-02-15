import { FaSquareInstagram } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { IoMdMail } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";

import minha_foto from "../../assets/eu.png";
import imgZer01Modas from "../../assets/zer01modas.jpeg";
import imgZer01Modas_mobile from "../../assets/zer01modas_mobile.jpeg";
import imgFoodExplorer from "../../assets/foodexplorer.jpeg";
import imgFoodExplorer_mobile from "../../assets/foodexplorer_mobile.jpeg";
import imgRocketMovies from "../../assets/rocketmovies.jpeg";
import imgExpertNotes from "../../assets/expertnotes.jpeg";
import imgExpertNotes_mobile from "../../assets/expertnotes_mobile.jpeg";
import icondev from "../../assets/devicon.svg";

import { Projeto } from "../../components/projeto";

import { Container, Main } from "./style";

export function Home() {
  function handleNavigateSections(section) {
    //para a scroll rolar ate a section escolhida;
    let div = (section.target.innerText).toLowerCase();
    div = div.replace(" ", "_");

    window.scroll({
      top: (0, document.querySelector(`.${ div }`).offsetTop - 110),
      behavior: "smooth"
    });
  }

  function handleMenu() {
    const menuMobile = document.querySelector(".menuMobile");

    if(window.innerWidth >= 1000) {
      return;
    } else {
      if(menuMobile.style.display == "none") {
        menuMobile.style.display = "flex";
        menuMobile.style.animation = "menuAnimation 0.3s forwards"; 
      } else {
        menuMobile.style.display = "none";
        menuMobile.style.animation = "menuAnimation 0.3s forwards reverse"; 
      }
    }
  }

  window.addEventListener("scroll", () => {
    //para mostrar a secao;
    Array.from(document.querySelectorAll("main > div")).map(div => {
        if(window.scrollY >= div.offsetTop-400 && div.className != "home") {
          Array.from(div.children).map(children => {

            if(children.className != "blank") {
              if(children != document.querySelector("footer")) {
                children.style.animation = "visible 1s forwards";
              }
            }
          });

          if(div.className == "contato") {
            document.querySelector(".borderEmail").style.animation = "toRigth 2s forwards";

            const divRedesSociais = div.querySelector(".divRedesSociais");
            divRedesSociais.style.animation = "contatosAnimation 0.5s forwards";
            divRedesSociais.style.animationDelay = "1s";
          }

        }
    });
  });
  
  return (
    <Container>

      <header>
        <img onClick={ handleMenu } src={ icondev } alt="" />

        <div className="menuMobile">
          <ul onClick={(event) => handleNavigateSections(event) } > SOBRE MIM </ul>
          <ul onClick={(event) => handleNavigateSections(event) } > PROJETOS </ul>
          <ul onClick={(event) => handleNavigateSections(event) } > CONTATO </ul>
        </div>

        <nav>
          <ul onClick={(event) => handleNavigateSections(event) } > HOME </ul>
          <ul onClick={(event) => handleNavigateSections(event) } > SOBRE MIM </ul>
          <ul onClick={(event) => handleNavigateSections(event) } > PROJETOS </ul>
          <ul onClick={(event) => handleNavigateSections(event) } > CONTATO </ul>
          {/* <a href="#"> CURRÍCULO </a> */}
          <a href="https://www.instagram.com/rayaneakkacio/" target="_blank"> <FaSquareInstagram size={ 23 } /> </a>
          <a href="https://www.linkedin.com/in/rayane-ac%C3%A1cio-274092252/" target="_blank"> <BsLinkedin size={ 23 } /> </a>
          <a href="https://github.com/rayaneacacio" target="_blank"> <FaGithub size={ 24 } /> </a>
          <a href="https://www.facebook.com/profile.php?id=100065219643115" target="_blank"> <FaFacebook size={ 24 } /> </a>
        </nav>
      </header>

      <Main>
        <div className="home">
          <div>
            <h2>Oie! Eu sou </h2>
            <h1 style={{ color: "#e1b4e5" }}>Rayane Acácio,</h1>
            <h2 style={{ color: "#a1eacd" }}>desenvolvedora web</h2>

            <div>
              <button> <a href="https://drive.google.com/file/d/1u5zV9TBfF_C59MgGcvwebeZmfYMR3uWl/view?usp=sharing" target="_blank">CERTIFICADO</a> </button>
              <button> <a href="https://www.linkedin.com/in/rayane-ac%C3%A1cio-274092252/" target="_blank">LINKEDIN</a> </button>
            </div>
          </div>

          <div className="divImg">
            <div style={{ backgroundImage: `url(${ minha_foto })` }} ></div>
            {/* <div> ˑ  ぅ ་ ᳝ ◝ 𖥻 ࣪ ▸ ˖ꜝꜞ ᳝ ࣪ ִֶָ ◞✶ ⊹ ᨘ໑. ࣪𖣠˖</div> */}
            <span style={{ left: "3rem", top: "6rem" }}>𖥔</span>
            <span style={{ bottom: "2rem", right: "3rem" }}> ִᥫ᭡ ˖</span>
            <span style={{ right: "-2rem", top: "10rem" }}>࣪ ‹ 𖥔 ࣪ ˖</span>
            <span style={{ left: "3rem", bottom: "5rem" }}>ִֶָ 𖥔ִ ་ ، </span>
            <span style={{ bottom: "-1rem" }}> ♡ ⊹</span>
          </div>

          <div className="blank"></div>
        </div>

        <div className="sobre_mim">
          <h2>HELLO WORLD :)</h2>

          <p>
            Tenho 20 anos, sou programadora frontend e estou estudando desenvolvimento web. Tenho habilidades em JavaScript, React, Styled Components e Node. Já trabalhei em vários projetos, incluindo um e-commerce fullstack e um menu interativo com banco de dados sqlite
          </p>

          <div className="icons_linguage">
            <SiStyledcomponents title="Styled Components" size={ 60 } />
            <BiLogoTypescript title="TypeScript" size={ 60 } />
            <IoLogoJavascript title="JavaScript" size={ 60 } />
            <FaReact title="React JS" size={ 60 } />
            <FaNode title="Node JS" size={ 60 } />
          </div>

          <div className="flutuando">
            <span style={{ top: window.innerWidth >= 1000 ? "-18rem" : "-8rem", left: window.innerWidth >= 1000 ? "44rem" : "4rem", fontSize: "1.3rem" }}>VSCODE</span>
            <span style={{ top: window.innerWidth >= 1000 ? "-17rem" : "-7rem", right: window.innerWidth >= 1000 ? "44rem" : "6rem", fontSize: "1.4rem" }}>HTML5</span>
            <span style={{ top: window.innerWidth >= 1000 ? "-5rem" : "-11rem", left: window.innerWidth >= 1000 ? "26rem" : "26rem", fontSize: "1.4rem" }}>CSS3</span>
            <span style={{ top: window.innerWidth >= 1000 ? "-2rem" : "-3rem", left: window.innerWidth >= 1000 ? "49rem" : "9rem", fontSize: "1.4rem" }}>FIGMA</span>
            <span style={{ top: window.innerWidth >= 1000 ? "-5rem" : "-3rem", left: window.innerWidth >= 1000 ? "67rem" : "31rem", fontSize: "1.3rem" }}>WEB</span>
            <span style={{ top: window.innerWidth >= 1000 ? "-5rem" : "-10rem", right: window.innerWidth >= 1000 ? "39rem" : "24rem", fontSize: "1.5rem" }}>API</span>
            <span style={{ bottom: window.innerWidth >= 1000 ? "2rem" : "0", right: window.innerWidth >= 1000 ? "57rem" : "16rem", fontSize: "1.3rem" }}>SQLITE</span>
          </div>

          <div className="blank"></div>
        </div>

        <div className="projetos">
          <Projeto img={ imgZer01Modas } img_mobile={ imgZer01Modas_mobile } name="Zer01 Modas" description="ecommerce fullstack responsivo com javascript" repository="https://github.com/rayaneacacio/Zer01_Modas" deploy="https://zer01modas.netlify.app" />
          <Projeto img={ imgFoodExplorer } img_mobile={ imgFoodExplorer_mobile } name="Food Explorer" description="Menu interativo para um restaurante" repository="https://github.com/rayaneacacio/food-explorer" deploy="https://sparkly-pavlova-9f4ab9.netlify.app/" />
          <Projeto img={ imgExpertNotes } img_mobile={ imgExpertNotes_mobile } name="Expert Notes" description="bloco de anotações por áudio com typescript" repository="https://github.com/rayaneacacio/Expert-Notes" deploy="https://expertnote.netlify.app/"/>
          <Projeto img={ imgRocketMovies } name="Rocket Movies" description="site para favoritar filmes" repository="https://github.com/rayaneacacio/rocket-movies" deploy="https://main--reactrocketmovies.netlify.app/" />
        </div>
        
        <div className="contato">
          <div className="blank"></div>

          <div>
            <h2>FALE COMIGO</h2>
            <p>me encontre aqui:</p>
            <button>
              <a href="mailto:rayaneacacio48@gmail.com"> <IoMdMail /> rayaneacacio48@gmail.com</a>
              <div className="borderEmail" style={{ height: "2px", background: "#36344b" }}></div>
            </button>

            <div className="divRedesSociais" style={{ display: "flex", gap: "4rem", opacity: "0" }}>
              <a href="https://www.instagram.com/rayaneakkacio/" target="_blank"> <FaSquareInstagram size={ 30 } /> </a>
              <a href="https://www.linkedin.com/in/rayane-ac%C3%A1cio-274092252/" target="_blank"> <BsLinkedin size={ 30 } /> </a>
              <a href="https://github.com/rayaneacacio" target="_blank"> <FaGithub size={ 30 } /> </a>
              <a href="https://www.facebook.com/profile.php?id=100065219643115" target="_blank"> <FaFacebook size={ 30 } /> </a>
            </div>
          </div>

          <footer>
            <p>© 2024 |</p>
            <FaHeart />
            <p>by Rayane Acácio</p>
          </footer>
        </div>
      </Main>

    </Container>
  )
}