import { FaSquareInstagram } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";

import minha_foto from "../../assets/eu.png";
import imgZer01Modas from "../../assets/zer01modas.jpeg";
import imgZer01Modas_mobile from "../../assets/zer01modas_mobile.jpeg";
import imgFoodExplorer from "../../assets/foodexplorer.jpeg";
import imgFoodExplorer_mobile from "../../assets/foodexplorer_mobile.jpeg";
import imgRocketMovies from "../../assets/rocketmovies.jpeg";
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

    if(menuMobile.style.display == "none") {
      menuMobile.style.display = "flex";
      menuMobile.style.animation = "menuAnimation 0.3s forwards"; 
    } else {
      menuMobile.style.display = "none";
      menuMobile.style.animation = "menuAnimation 0.3s forwards reverse"; 
    }
  }

  window.addEventListener("scroll", () => {
    //para mostrar a secao;
    Array.from(document.querySelectorAll("main > div")).map(div => {
        if(window.scrollY >= div.offsetTop-400 && div.className != "home") {
          Array.from(div.children).map(children => {
            if(children.className != "blank") {
              children.style.animation = "visible 1s forwards";
            }
            
          });
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
        </div>

        <nav>
          <ul onClick={(event) => handleNavigateSections(event) } > HOME </ul>
          <ul onClick={(event) => handleNavigateSections(event) } > SOBRE MIM </ul>
          <ul onClick={(event) => handleNavigateSections(event) } > PROJETOS </ul>
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
            <h1>Rayane Acácio,</h1>
            <h2>desenvolvedora web</h2>

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
            Tenho 19 anos e busco uma oportunidade para trabalhar com desenvolvimento frontend. Estou ansiosa para aplicar minha paixão e experiência com programação web em um ambiente que valoriza a aprendizagem contínua e a inovação
          </p>

          <div className="icons_linguage">
            <SiStyledcomponents title="Styled Components" size={ 60 } />
            <IoLogoJavascript title="JavaScript" size={ 60 } />
            <FaReact title="React JS" size={ 60 } />
            <FaNode title="Node JS" size={ 60 } />
          </div>

          <div className="flutuando">
            <span style={{ top: window.innerWidth >= 1000 ? "-18rem" : "-3rem", left: window.innerWidth >= 1000 ? "47rem" : "4rem", fontSize: "1.3rem" }}>VSCODE</span>
            <span style={{ top: window.innerWidth >= 1000 ? "-17rem" : "-2rem", right: window.innerWidth >= 1000 ? "51rem" : "3rem", fontSize: "1.4rem" }}>HTML5</span>
            <span style={{ top: window.innerWidth >= 1000 ? "-8rem" : "-11rem", left: window.innerWidth >= 1000 ? "30rem" : "29rem", fontSize: "1.4rem" }}>CSS3</span>
            <span style={{ top: window.innerWidth >= 1000 ? "-2rem" : "-1rem", left: window.innerWidth >= 1000 ? "53rem" : "19rem", fontSize: "1.5rem" }}>FIGMA</span>
            <span style={{ top: window.innerWidth >= 1000 ? "-5rem" : "-13rem", left: window.innerWidth >= 1000 ? "75rem" : "-11rem", fontSize: "1.5rem" }}>WEB</span>
            <span style={{ top: window.innerWidth >= 1000 ? "-7rem" : "-10rem", right: window.innerWidth >= 1000 ? "36rem" : "29rem", fontSize: "1.5rem" }}>API</span>
          </div>

          <div className="blank"></div>
        </div>

        <div className="projetos">
          <Projeto img={ imgZer01Modas } img_mobile={ imgZer01Modas_mobile } name="Zer01 Modas" description="site de vendas responsivo" repository="https://github.com/rayaneacacio/Zer01_Modas" deploy="https://zer01modas.netlify.app" />
          <Projeto img={ imgFoodExplorer } img_mobile={ imgFoodExplorer_mobile } name="Food Explorer" description="Menu interativo para um restaurante" repository="https://github.com/rayaneacacio/food-explorer" deploy="https://sparkly-pavlova-9f4ab9.netlify.app/" />
          <Projeto img={ imgRocketMovies } name="Rocket Movies" description="site para favoritar filmes" repository="https://github.com/rayaneacacio/rocket-movies" deploy="https://main--reactrocketmovies.netlify.app/" />
        </div>
      </Main>

    </Container>
  )
}