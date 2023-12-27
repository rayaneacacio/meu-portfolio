import { FaSquareInstagram } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { FaHeart } from "react-icons/fa";

import imgZer01Modas from "../../assets/zer01modas.jpeg";
import imgFoodExplorer from "../../assets/foodexplorer.jpeg";
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

    // Array.from(document.querySelectorAll("ul")).map(ul => ul.style.border = "none");

    // section.target.style.borderBottom = "3px solid #FEBED1";
  }

  function scroller() {
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
  }

  // function menuStatus() {
  //   console.log(menuAtivo)
  //    if(!menuAtivo) {
  //   window.addEventListener("scroll", scroller);
  // } else {
  //   window.removeEventListener("scroll", scroller);
  // }
  // }

  // window.addEventListener("scroll", scroller);

  // useEffect(() => {
  //   console.log(menuAtivo)

  //   if(!menuAtivo) {
  //     window.addEventListener("scroll", scroller);
  //   } else {
  //     window.removeEventListener("scroll", scroller);
  //   }

  //   return () => {
  //     window.removeEventListener("scroll", scroller);
  //   }

  // }, [ menuAtivo ]);
  
  return (
    <Container>

      <header>
        <img src={ icondev } alt="" />

        <nav>
          <ul onClick={(event) => handleNavigateSections(event) } > HOME </ul>
          <ul onClick={(event) => handleNavigateSections(event) } > SOBRE MIM </ul>
          <ul onClick={(event) => handleNavigateSections(event) } > PROJETOS </ul>
          <a href="#"> CURRÍCULO </a>
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

            {/* <button>
              ENTRAR EM CONTATO
            </button> */}

            {/* <div className="icons_linguage">
              <IoLogoJavascript size={ 70 } />
              <FaReact size={ 70 } />
              <FaNode size={ 70 }  />
              <SiStyledcomponents size={ 35 } />
            </div> */}
          </div>

          <img src="" alt="" />
        </div>

        <div className="sobre_mim">
          <h2>Hello World :)</h2>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quidem officia vitae eligendi dolor, recusandae maiores, voluptates reiciendis amet, hic nulla! Esse natus repellat quia beatae quae doloremque quasi repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestiae possimus cum fugiat ipsam? Explicabo quasi molestias totam reprehenderit ut at dolore, facilis velit nesciunt officia minus ducimus ea eum.</p>

          <div className="icons_linguage">
              <SiStyledcomponents size={ 100 } />
              <IoLogoJavascript size={ 100 } />
              <FaReact size={ 100 } />
              <FaNode size={ 100 }  />
            </div>
        </div>

        <div className="projetos">
          <Projeto img={ imgZer01Modas } name="Zer01 Modas" description="site de vendas responsivo" repository="https://github.com/rayaneacacio/Zer01_Modas" deploy="https://zer01modas.netlify.app" />
          <Projeto img={ imgFoodExplorer } name="Food Explorer" description="Menu interativo para um restaurante" repository="https://github.com/rayaneacacio/food-explorer" deploy="https://sparkly-pavlova-9f4ab9.netlify.app/" />
          <Projeto img={ imgRocketMovies } name="Rocket Movies" description="site para favoritar filmes" repository="https://github.com/rayaneacacio/rocket-movies" deploy="https://main--reactrocketmovies.netlify.app/" />
        </div>
      </Main>

    </Container>
  )
}