import { FaSquareInstagram } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import logoZer01Modas from "../../assets/logo-zer01modas.svg";
import logoFoodExplorer from "../../assets/logo-foodexplorer.png";
import logoRocketMovies from "../../assets/logo-rocketmovies.png";
import icondev from "../../assets/devicon.svg";

import { Site } from "../../components/site";

import { Container, Main } from "./style";

export function Home() {
  function handleNavigateSections(section) {
    //para a scroll rolar ate a section escolhida;
    let div = (section.target.innerText).toLowerCase();
    div = div.replace(" ", "_");

    window.scroll({
      top: (0, document.querySelector(`.${ div }`).offsetTop - 200),
      behavior: "smooth"
    });

    Array.from(document.querySelectorAll("ul")).map(ul => ul.style.border = "none");

    section.target.style.borderBottom = "3px solid #FEBED1";
  }

  window.addEventListener('scroll', () => {
    //para o menu acompanhar a scroll;
    Array.from(document.querySelectorAll("main > div")).map(div => {
      if(div.offsetTop >= window.scrollY && div.offsetTop < window.scrollY+300) {
        Array.from(document.querySelectorAll("ul")).map(ul => {
          let section = div.className.toUpperCase();
          section = section.replace("_", " ");
          
          if(ul.innerText == section) {
            ul.style.borderBottom = "3px solid #FEBED1";
          } else {
            ul.style.border = "none";
          }

        });
      }
    });

  });

  
  return (
    <Container>

      <header>
        <img src={ icondev } alt="" />

        <nav>
          <ul onClick={(event) => handleNavigateSections(event) } > HOME </ul>
          <ul onClick={(event) => handleNavigateSections(event) } > SOBRE MIM </ul>
          <ul onClick={(event) => handleNavigateSections(event) } > PROJETOS </ul>
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

            <button>
              CONTATO
            </button>

            <div className="icons_linguage">
              <IoLogoJavascript size={ 30 } />
              <FaReact size={ 30 } />
              <FaNodeJs size={ 30 }  />
            </div>
          </div>

          <img src="" alt="" />
        </div>

        <div className="sobre_mim">
          <h2>Sobre mim</h2>
        </div>

        <div className="projetos">
          <Site img={ logoZer01Modas } name="Zer01 Modas" description="E-commerce de vendas de roupas" repository="https://github.com/rayaneacacio/Zer01_Modas" deploy="https://zer01modas.netlify.app" />
          <Site img={ logoFoodExplorer } name="Food Explorer" description="restaurante fictício" repository="https://github.com/rayaneacacio/food-explorer" deploy="https://sparkly-pavlova-9f4ab9.netlify.app/" />
          <Site img={ logoRocketMovies } name="Rocket Movies" description="favoritar filmes" repository="https://github.com/rayaneacacio/rocket-movies" deploy="https://main--reactrocketmovies.netlify.app/" />
        </div>
      </Main>

    </Container>
  )
}