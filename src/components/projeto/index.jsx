import { FaGithub } from "react-icons/fa";
import { MdVisibility } from "react-icons/md";

import { Container } from "./style";

export function Projeto({ img, img_mobile, name, description, repository, deploy }) {
  return (
    <Container>
      <div style={{ backgroundImage: `URL(${ img })` }} ></div>
      {
        img_mobile &&
        <div className="mobile" style={{ backgroundImage: `URL(${ img_mobile })` }} ></div>
      }
      
      <div>
        <p> { description } </p>
        <div style={{ display: "flex", gap: "2rem" }}>
          <span>JAVASCRIPT</span>
          <span>REACT</span>
        </div>

        <div className="div_links">
          <a href={ repository } target="_blank" title="repositório" > <FaGithub size={ 40 } /> </a>
          <a href={ deploy } target="_blank" title="deploy" > <MdVisibility size={ 40 } /> </a>
        </div>
      </div>
      
    </Container>
  )
}