import { Container } from "./style";
import icondev from "../../assets/devicon.svg";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  function handleNavigateSections(section) {
    //para a scroll rolar ate a section escolhida;
    let div = (section.target.innerText).toLowerCase();
    div = div.replace(" ", "_");

    document.querySelector("body div").scroll({
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

  return (
    <Container>
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

        <a href="https://www.linkedin.com/in/rayane-ac%C3%A1cio-274092252/" target="_blank"> 
          <BsLinkedin size={ 23 } />
        </a>
        
        <a href="https://github.com/rayaneacacio" target="_blank"> 
          <FaGithub size={ 24 } /> 
        </a>
      </nav>
    </Container>
  )
}