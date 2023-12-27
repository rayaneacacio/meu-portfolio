import { FaGithub } from "react-icons/fa";
import { MdVisibility } from "react-icons/md";

import { Container } from "./style";

export function Projeto({ img, name, description, repository, deploy }) {
  function handleChildDisplayBlock() {
    const divs = document.querySelectorAll(".container div");

    // divs[0].style.animation = "none";
    // setTimeout(() => {
    //   divs[0].style.filter = "blur(1)";
    //   divs[0].style.animation = "animateProjects 0.5s forwards";
    // }, 0);

    // divs[1].style.display = "flex";
  }

  function handleChildDisplayNone() {
    const divs = document.querySelectorAll(".container div");

    // divs[0].style.animation = "none";
    // setTimeout(() => {
    //   divs[0].style.filter = "blur(0)";
    //   divs[0].style.animation = "animateProjects 0.5s reverse";
    // }, 0);

    // divs[1].style.display = "none";
  }

  return (
    <Container className="container" onMouseOver={ handleChildDisplayBlock } onMouseOut={ handleChildDisplayNone } >
      <div style={{ backgroundImage: `URL(${ img })` }} >
      </div>
      
      <div className="firstDiv">
        <p> { description } </p>

        <div className="div_links">
          <a href={ repository } target="_blank" title="repositório" > <FaGithub size={ 40 } /> </a>
          <a href={ deploy } target="_blank" title="deploy" > <MdVisibility size={ 40 } /> </a>
        </div>
      </div>
      
    </Container>
  )
}