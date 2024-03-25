import { Container } from "./style";
import { FiExternalLink } from "react-icons/fi";

export function Projeto({ img, img_mobile, name, description, languages, repository, deploy }) {
  return (
    <Container>
      <h2>{ name }</h2>

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
            languages.map((language, index) => (
              <div key={ index }>{ language }</div>
            ))
          }
        </div>

        <div className="links">
          <a href={ deploy } target="_blank" >
            <p>ver site</p>
            { <FiExternalLink size={ 20 } /> }
          </a>

          <a href={ repository } target="_blank" >
            <p>repositório</p>
            { <FiExternalLink size={ 20 } /> } 
          </a>
        </div>

      </div>
      
    </Container>
  )
}