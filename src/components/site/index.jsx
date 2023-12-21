import { FaGithub } from "react-icons/fa";
import { MdVisibility } from "react-icons/md";

import { Container } from "./style";

export function Site({ img, name, description, repository, deploy }) {
  return (
    <Container style={{ backgroundImage: `url(${ img })` }}>
      {/* <img src={ img } alt="" /> */}

      <h2>{ name }</h2>

      <p>{ description }</p>

      <div className="div_buttons">
        <button> <FaGithub size={ 30 } /> </button>
        <button> <MdVisibility size={ 30 } /> </button>
      </div>
    </Container>
  )
}