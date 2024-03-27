import { Container } from "./style";
import { Projeto } from "../../components/projeto";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiJavascript, SiSqlite, SiStyledcomponents } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import imgZer01Modas from "../../assets/zer01modas.jpeg";
import imgZer01Modas_mobile from "../../assets/zer01modas_mobile.jpeg";
import imgFoodExplorer from "../../assets/foodexplorer.jpeg";
import imgFoodExplorer_mobile from "../../assets/foodexplorer_mobile.jpeg";
import imgRocketMovies from "../../assets/rocketmovies.jpeg";
import imgExpertNotes from "../../assets/expertnotes.jpeg";
import imgExpertNotes_mobile from "../../assets/expertnotes_mobile.jpeg";
import imgAcaiRuby from "../../assets/acaiRuby.jpeg";
import imgAcaiRubyMobile from "../../assets/acaiRubyMobile.jpeg";
import imgFreddyBarber from "../../assets/FreddyBarber.png";
import imgFreddyBarberMobile from "../../assets/freddyBarberMobile.png";

export default function MeusProjetos() {
  return (
    <Container className="projetos">
       <Projeto 
        img={ imgAcaiRuby } 
        img_mobile={ imgAcaiRubyMobile }
        name="Açaí Ruby" 
        repository="https://github.com/rayaneacacio/Acai-Ruby" 
        deploy="https://acai-ruby.netlify.app"
        languages={[ <BiLogoTypescript size={ 35 } />, <SiSqlite size={ 30 } />, <FaReact size={ 32 } />, <SiStyledcomponents size={ 50 } />, <FaNode size={ 40 } /> ]}
        description="Totem de autoatendimento para açaiteria. Esse projeto oferece uma maneira simples 
        e rápida para os clientes fazerem pedidos e inclui um site de administração, para alterações no sistema 
        quando necessário. Desenvolvido com TypeScript, ReactJS, Styled Components, NodeJs e SQLite." />

      <Projeto 
        img={ imgZer01Modas } 
        img_mobile={ imgZer01Modas_mobile } 
        name="Zer01 Modas" 
        languages={[ <SiJavascript size={ 30 } />, <FaReact size={ 32 } />, <SiSqlite size={ 30 } />, <SiStyledcomponents size={ 50 } />, <FaNode size={ 40 } /> ]}
        repository="https://github.com/rayaneacacio/Zer01_Modas" deploy="https://zer01modas.netlify.app"
        description="Ecommerce desenvolvido com JavaScript, ReactJS, Styled Components, NodeJs e SQLite. Apresenta um catálogo de roupas para os clientes e o administrador da loja pode editar o catálogo, adicionar promoções e
        cupons de desconto." />

      <Projeto 
        img={ imgFreddyBarber }
        img_mobile={ imgFreddyBarberMobile }
        name="Freddy Barber"
        repository="https://github.com/rayaneacacio/Freddy-Barber"
        deploy="https://freddybarber.netlify.app"
        languages={[ <BiLogoTypescript size={ 35 } />, <FaReact size={ 32 } />, <SiStyledcomponents size={ 35 } /> ]}
        description="Landing page para a barbearia Freddy Barber. Feito com TypeScript, ReactJS e Styled Components" />

      <Projeto 
        img={ imgExpertNotes } 
        img_mobile={ imgExpertNotes_mobile } 
        name="Expert Notes" 
        languages={[ <BiLogoTypescript size={ 35 } />, <FaReact size={ 32 } />, <SiStyledcomponents size={ 50 } /> ]}
        repository="https://github.com/rayaneacacio/Expert-Notes" deploy="https://expertnote.netlify.app/"
        description="Bloco de anotações por texto e áudio com TypeScript, ReactJS e Styled Components. Esse projeto foi
        desenvolvido durante o evento NLW Expert 2024 RocketSeat." />

      <Projeto 
        img={ imgFoodExplorer } 
        img_mobile={ imgFoodExplorer_mobile } 
        name="Food Explorer" 
        languages={[ <SiJavascript size={ 30 } />, <FaReact size={ 32 } />, <SiSqlite size={ 30 } />, <SiStyledcomponents size={ 50 } />, <FaNode size={ 40 } />  ]}
        repository="https://github.com/rayaneacacio/food-explorer" deploy="https://sparkly-pavlova-9f4ab9.netlify.app/"
        description="Menu para um restaurante. Aplicação interativa que facilita o processo de pedidos e possui uma página de organização e gestão do cardápio para o dono do restaurante." />

      <Projeto 
        img={ imgRocketMovies } 
        name="Rocket Movies" 
        languages={[ <SiJavascript size={ 30 } />, <FaReact size={ 32 } />, <SiSqlite size={ 30 } />, <SiStyledcomponents size={ 50 } />, <FaNode size={ 40 } /> ]}
        repository="https://github.com/rayaneacacio/rocket-movies" deploy="https://main--reactrocketmovies.netlify.app/"
        description="Plataforma para cadastrar e avaliar filmes. Feito com JavaScript, ReactJS, Styled Components e
        NodeJS" />
    </Container>
  )
}