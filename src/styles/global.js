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
    background: ${({ theme }) => theme.COLORS.BACKGROUND};
    font-size: 1.8rem;
    overflow: hidden;

    > div {
      width: 100%;
      height: -webkit-fill-available;
      max-height: 100vh;
      overflow-x: hidden;
      overflow-y: auto;
      scroll-behavior: smooth;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  h1, h2 {
    font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
  }

  button, ul, a {
    background: none;
    cursor: pointer;
    transition: 0.3s;
  }

  a {
    font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
    font-size: 1.7rem;
    font-weight: bold;
    text-decoration: none;
    padding: 1.5rem;
    border-radius: 3px;
  }

  button:hover, a:hover, ul:hover {
    filter: brightness(0.8);
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

  @keyframes toRight {
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
      font-size: 1.9rem;
    }

    body div {
      &::-webkit-scrollbar {
        display: block;
        background: transparent;
        width: 1rem;
      }

      &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.COLORS.YELLOW};
        border-radius: 8px;
      }
    }

    a {
      padding: 1rem 2rem;
    }
  }
`;
