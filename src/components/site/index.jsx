import { FaGithub } from "react-icons/fa";
import { MdVisibility } from "react-icons/md";

import { Container } from "./style";

export function Site({ img, name, description, repository, deploy }) {
  return (
    <Container>
      <div style={{ backgroundImage: `url(${ img })` }}></div>

      <h2>{ name }</h2>

      <p>{ description }</p>

      <div className="div_links">
        <a href={ repository } target="_blank" title="repositório" > <FaGithub size={ 30 } /> </a>
        <a href={ deploy } target="_blank" title="deploy" > <MdVisibility size={ 30 } /> </a>
      </div>
    </Container>
  )
}