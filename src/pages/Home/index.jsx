import { FaSquareInstagram } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import logoZer01Modas from "../../assets/logo-zer01modas.svg";
import logoFoodExplorer from "../../assets/logo-foodexplorer.png";
import icondev from "../../assets/devicon.svg";

import { Site } from "../../components/site";

import { Container, Main } from "./style";

export function Home() {
  function handleNavigateProjetos() {
    const divProjetos = document.querySelector(".projetos");
    console.log( divProjetos.clientHeight );
  }

  return (
    <Container>

      <header>
        <img src={ icondev } alt="" />

        <nav>
          <ul>HOME</ul>
          <ul>SOBRE MIM</ul>
          <ul onClick={ handleNavigateProjetos } >PROJETOS</ul>
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
          <Site img={ logoZer01Modas } name="Zer01 Modas" description="e-commerce de vendas de roupas" repository="https://github.com/rayaneacacio/Zer01_Modas" deploy="https://zer01modas.netlify.app" />
          <Site img={ logoFoodExplorer } name="Food Explorer" description="e-commerce de vendas de roupas" repository="https://github.com/rayaneacacio/Zer01_Modas" deploy="https://zer01modas.netlify.app" />
        </div>
      </Main>

    </Container>
  )
}