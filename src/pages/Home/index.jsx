import { Container, DivHome } from "./style";
import minha_foto from "../../assets/eu2.png";
import Header from "../../components/header";
import SobreMim from "../SobreMim";
import MeusProjetos from "../MeusProjetos";
import Contato from "../Contato";

export function Home() {
  const intersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.style.animation = "visible 1s forwards";
      }
    });
  }, {
    threshold: 0
  });

  document.querySelector("body div").addEventListener("scroll", () => {
    const divSobreMim = document.querySelector(".sobre_mim");
    const projetos = Array.from(document.querySelectorAll(".projetos > div"));

    [divSobreMim, ...projetos].map(element => {
      intersectionObserver.observe(element);
    });
  });
  
  return (
    <Container>
      <Header />

      <main>
        <DivHome className="home">
          <div>
            <h2>Oie! Eu sou </h2>
            <h1 style={{ color: "#b988bd" }}>Rayane Acácio,</h1>
            <h2 style={{ color: "#a1eacd" }}>desenvolvedora web</h2>

            <div className="homeButtons">
              <a href="https://drive.google.com/file/d/1y2ri7zpX6N1Z7LFRFQoj_LZe5QkiwdRS/view?usp=sharing" target="_blank">CURRÍCULO</a>
              <a href="https://www.linkedin.com/in/rayane-ac%C3%A1cio-274092252/" target="_blank">LINKEDIN</a>
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
        </DivHome>

        <SobreMim />
        <MeusProjetos />
        <Contato />
      </main>

    </Container>
  )
}