import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { SiSqlite } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

import { Container } from "./style";

export function Projeto({ img, img_mobile, name, description, languages, repository, deploy, style }) {
  return (
    <Container style={ style }>
      <h2 style={ style && { top: "0" }}>{ name }</h2>

      <div>
        <div className="imgDesktop" style={{ backgroundImage: `URL(${ img })` }} ></div>

        {
          img_mobile &&
          <div className="imgMobile" style={{ backgroundImage: `URL(${ img_mobile })` }} ></div>
        }
      </div>

      <div className="description">
        <p>{ description }</p>

        <div className="languages">
          {
            languages &&
            languages.map(language => (
              <>
                {
                  language == "TypeScript" &&
                  <BiLogoTypescript size={ 35 } />
                }
                {
                  language == "JavaScript" &&
                  <IoLogoJavascript size={ 35 } />
                }
                {
                  language == "SQLite" &&
                  <SiSqlite size={ 30 } />
                }
                {
                  language == "ReactJS" &&
                  <FaReact size={ 32 } />
                }
                {
                  language == "Styled Components" &&
                  <SiStyledcomponents size={ 50 } />
                }
                {
                  language == "NodeJS" &&
                  <FaNode size={ 40 } />
                }
              </>
            ))
          }
        </div>

        <div className="links">
          <a href={ repository } target="_blank" >
            <p>ver repositório</p>
            { <FiExternalLink size={ 20 } /> } 
          </a>

          <a href={ deploy } target="_blank" >
            <p>ver site</p>
            { <FiExternalLink size={ 20 } /> }
          </a>
        </div>

      </div>
      
    </Container>
  )
}