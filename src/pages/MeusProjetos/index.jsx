import { Container } from "./style";
import { Projeto } from "../../components/projeto";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiJavascript, SiSqlite, SiStyledcomponents } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt } from "react-icons/fa";
import imgZer01Modas from "../../assets/zer01modas.jpeg";
import imgZer01Modas_mobile from "../../assets/zer01modas_mobile.jpeg";
import imgExpertNotes from "../../assets/expertnotes.jpeg";
import imgExpertNotes_mobile from "../../assets/expertnotes_mobile.jpeg";
import imgAcaiRuby from "../../assets/acaiRuby.jpeg";
import imgAcaiRubyMobile from "../../assets/acaiRubyMobile.png";
import imgFreddyBarber from "../../assets/FreddyBarber.png";
import imgFreddyBarberMobile from "../../assets/freddyBarberMobile.png";
import imgFuginiDesktop from "../../assets/fugini-desktop.png";
import imgFuginiMobile from "../../assets/fugini-mobile.png";

export default function MeusProjetos() {
  return (
    <Container className="projetos">
      <Projeto 
        imgDesktop={ imgFuginiDesktop } 
        img_mobile={ imgFuginiMobile } 
        name="Fugini Store" 
        languages={[ <SiJavascript size={ 30 } />, <FaReact size={ 32 } />, <FaCss3Alt size={ 32 } /> ]}
        deploy="https://www.comprefugini.com.br/"
        description="Atualmente trabalho como dev frontend na JBQ. Global e faço parte da equipe de manutenção da Fugini e Ramy Store." />

       <Projeto 
        imgDesktop={ imgAcaiRuby } 
        img_mobile={ imgAcaiRubyMobile }
        name="Açaí Ruby" 
        repository="https://github.com/rayaneacacio/Acai-Ruby" 
        deploy="https://acai-ruby.netlify.app"
        languages={[ <BiLogoTypescript size={ 35 } />, <SiSqlite size={ 30 } />, <FaReact size={ 32 } />, <SiStyledcomponents size={ 50 } />, <FaNode size={ 40 } /> ]}
        description="Cardápio digital para açaiteria. Esse projeto oferece uma maneira simples 
        e rápida para fazer pedidos e inclui um site de administração." />

      <Projeto 
        imgDesktop={ imgZer01Modas } 
        img_mobile={ imgZer01Modas_mobile } 
        name="Zer01 Modas" 
        languages={[ <SiJavascript size={ 30 } />, <FaReact size={ 32 } />, <SiSqlite size={ 30 } />, <SiStyledcomponents size={ 50 } />, <FaNode size={ 40 } /> ]}
        repository="https://github.com/rayaneacacio/Zer01_Modas" deploy="https://zer01modas.netlify.app"
        description="Ecommerce com JavaScript. Apresenta um catálogo de roupas para os clientes e o administrador da loja pode editar o catálogo, adicionar promoções e cupons de desconto." />

      <Projeto 
        imgDesktop={ imgFreddyBarber }
        img_mobile={ imgFreddyBarberMobile }
        name="Freddy Barber"
        repository="https://github.com/rayaneacacio/Freddy-Barber"
        deploy="https://freddybarber.netlify.app"
        languages={[ <BiLogoTypescript size={ 35 } />, <FaReact size={ 32 } />, <SiStyledcomponents size={ 35 } /> ]}
        description="Landing page simples para uma barbearia. Feito com TypeScript, ReactJS e Styled Components" />

      <Projeto 
        imgDesktop={ imgExpertNotes } 
        img_mobile={ imgExpertNotes_mobile } 
        name="Expert Notes" 
        languages={[ <BiLogoTypescript size={ 35 } />, <FaReact size={ 32 } />, <SiStyledcomponents size={ 50 } /> ]}
        repository="https://github.com/rayaneacacio/Expert-Notes" deploy="https://expertnote.netlify.app/"
        description="Bloco de anotações por texto e áudio. Esse projeto foi
        desenvolvido durante o evento NLW Expert 2024 RocketSeat." />
    </Container>
  )
}