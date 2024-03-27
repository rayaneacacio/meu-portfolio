import { Container } from "./style";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

export default function SobreMim() {
  return (
    <Container className="sobre_mim">
      <h2>HELLO WORLD :)</h2>

      <p>Tenho 20 anos, sou programadora e estou estudando desenvolvimento web. Tenho experiência com JavaScript, 
      TypeScript, ReactJS, Styled Components e já criei APIs NodeJS com banco de dados SQLite.
      </p>

      <div className="icons_linguage">
        <SiStyledcomponents title="Styled Components" size={ 60 } />
        <BiLogoTypescript title="TypeScript" size={ 60 } />
        <IoLogoJavascript title="JavaScript" size={ 60 } />
        <FaReact title="React JS" size={ 60 } />
        <FaNode title="Node JS" size={ 60 } />

        <div className="flutuando">
          <span style={{ 
            top: window.innerWidth >= 1000 ? "-21rem" : "-8rem", 
            left: window.innerWidth >= 1000 ? "13rem" : "4rem", 
            fontSize: "1.3rem" 
          }}>VSCODE</span>

          <span style={{ 
            top: window.innerWidth >= 1000 ? "-21rem" : "-7rem", 
            right: window.innerWidth >= 1000 ? "19rem" : "6rem", 
            fontSize: "1.4rem" 
          }}>HTML5</span>

          <span style={{ 
            top: window.innerWidth >= 1000 ? "-11rem" : "-11rem", 
            left: window.innerWidth >= 1000 ? "2rem" : "26rem", 
            fontSize: "1.4rem" 
          }}>CSS3</span>

          <span style={{ 
            top: window.innerWidth >= 1000 ? "-7rem" : "-3rem", 
            left: window.innerWidth >= 1000 ? "43rem" : "9rem", 
            fontSize: "1.4rem" 
          }}>FIGMA</span>

          <span style={{ 
            top: window.innerWidth >= 1000 ? "-6rem" : "-3rem", 
            left: window.innerWidth >= 1000 ? "75rem" : "31rem", 
            fontSize: "1.3rem" 
          }}>WEB</span>

          <span style={{ 
            top: window.innerWidth >= 1000 ? "-9rem" : "-10rem", 
            right: window.innerWidth >= 1000 ? "38rem" : "24rem", 
            fontSize: "1.5rem" 
          }}>API</span>

          <span style={{ 
            bottom: window.innerWidth >= 1000 ? "6rem" : "0", 
            right: window.innerWidth >= 1000 ? "76rem" : "16rem", 
            fontSize: "1.3rem" 
          }}>SQLITE</span>
        </div>
      </div>

      <div className="blank" />
    </Container>
  )
}