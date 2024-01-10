import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
  }

  body {
    font-size: 1.4rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND};
    overflow-x: hidden;
    scroll-behavior: smooth;

    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      background: transparent;
      width: none;
      display: none;
    }
  }

  h1, h2 {
    font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
  }

  button, ul {
    background: none;
    cursor: pointer;
    transition: filter 0.2s;
  }

  a {
    text-decoration: none;
  }

  button:hover, a:hover, ul:hover {
    filter: brightness(0.7);
  }

  @keyframes animateProjects {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
    }
  }

  @keyframes visible {
    from {
      opacity: 0;
      transform: translateY(-2rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes menuAnimation {
    from {
      transform: translateY(-0.5rem);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes toRigth {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 100%;
    }
  }

  @keyframes contatosAnimation {
    from {
      opacity: 0;
      transform: translateY(-1rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media(min-width: 1000px) {
    body {
      &::-webkit-scrollbar {
        display: block;
        background: none;
        width: 0.5rem;
      }

      &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.COLORS.YELLOW};
        border-radius: 8px;
      }
    }
  }
`;