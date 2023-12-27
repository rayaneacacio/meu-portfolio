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

    &::-webkit-scrollbar {
      background: none;
      width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 8px;
    }
  }

  h1, h2 {
    font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
  }

  button, a, ul {
    background: none;
    cursor: pointer;
    transition: filter 0.2s;
    text-decoration: none;
  }

  button:hover, a:hover, ul:hover {
    filter: brightness(0.7);
  }

  @keyframes inicio {
    from {
      opacity: 0;
      transform: translateY(-2rem);
      transform: translateX(-2rem);
    }

    to {
      opacity: 1;
      transform: translateY(2rem);
      transform: translateX(2rem);
    }
  }

  @keyframes animateProjects{
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
    }
  }
`;