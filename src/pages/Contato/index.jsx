import { Container } from "./style";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";

export default function Contato() {
  const observeDivContato = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        if(entry.target.classList.contains("borderEmail")) {
          entry.target.style.animation = "toRight 1s forwards";
          entry.target.animationDelay = "0.3s";
          return;
        }

        entry.target.style.animation = "contatosAnimation 0.5s forwards";
        entry.target.style.animationDelay = "1s";
      }
    });
  }, {
    threshold: 0
  });

  document.querySelector("body div").addEventListener("scroll", () => {
    const divRedesSociais = document.querySelector(".divRedesSociais");
    const borderEmail = document.querySelector(".borderEmail");

    observeDivContato.observe(borderEmail);
    observeDivContato.observe(divRedesSociais);
  });

  return (
    <Container className="contato">
      <div className="blank"></div>

  	  <div>
        <h2>FALE COMIGO</h2>
        <p>me encontre aqui:</p>

        <button>
          <a href="mailto:rayaneacacio48@gmail.com"> 
            <IoMdMail /> 
            rayaneacacio48@gmail.com
          </a>
          <div className="borderEmail" />
        </button>

        <div className="divRedesSociais">
          <a href="https://www.linkedin.com/in/rayane-ac%C3%A1cio-274092252/" target="_blank"> 
            <BsLinkedin size={ 30 } />
          </a>
          <a href="https://github.com/rayaneacacio" target="_blank"> 
            <FaGithub size={ 30 } /> 
          </a>
        </div>
      </div>

      <footer>
        <p>© 2024 |</p>
        <FaHeart />
        <p>by Rayane Acácio</p>
      </footer>
    </Container>
  )
}