import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  color: ${({ theme }) => theme.COLORS.PINK_300};
  font-size: 1.8rem;
  position: relative;

  header {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_2};
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px 0px;
    padding: 2rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY};
    position: relative;
  }

  header > img {
    width: 3rem;
  }

  nav {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 4rem;
    font-weight: bold;
  }

  nav ul, nav a {
    color: ${({ theme }) => theme.COLORS.PINK_300};
  }

  nav a:hover, nav ul:hover {
    border-bottom: 3px solid transparent; 
  }

  nav ul {
    display: none;
  }

  button {
    background: ${({ theme }) => theme.COLORS.PINK_300};
    font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
    font-size: 1.7rem;
    font-weight: bold;
    padding: 1rem 2rem;
    border-radius: 3px;
    margin-top: 3rem;

    > a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    a:hover {
      filter: none;
    }
  }

  button:last-of-type {
    background: ${({ theme }) => theme.COLORS.WHITE};;
    border: 1px solid ${({ theme }) => theme.COLORS.PINK_300};
    margin-left: 1rem;

    > a {
      color: ${({ theme }) => theme.COLORS.PINK_300};
    }
  }

  footer {
    background: ${({ theme }) => theme.COLORS.GREEN};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_2};
    font-size: 1.5rem;
    width: 100%;
    height: 5rem;
    padding: 1rem 2rem 8rem;
  }

  .blank {
    opacity: 1 !important;
    position: absolute;
  }

  .menuMobile {
    background: rgba(8, 8, 8, 0.64);
    font-size: 1.7rem;
    width: 100%;
    padding: 1rem 2rem;
    margin-left: -2rem;

    display: none;
    flex-direction: column;
    gap: 1rem;

    position: absolute;
    bottom: -11.6rem;
    z-index: 1;
  }

  @media(min-width: 1000px) {
    header {
      height: 10rem;
      position: fixed;
      top: 0;
      z-index: 2;
      padding: 2rem 15rem;
      border: none;
    }

    nav {
      gap: 2rem;
    }

    nav ul {
      display: block;
    }

    nav ul, nav a {
      color: ${({ theme }) => theme.COLORS.PINK_300};
      padding: 3.8rem 1rem;
    }

    .blank {
      display: none;
    }
  }
`;

export const Main = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  overflow-x: hidden;

  .home {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_2};
    color: ${({ theme }) => theme.COLORS.WHITE};
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    animation: visible 1s forwards;

    > :first-child {
      text-align: center;
    }

    > :last-child {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_2};
      width: 100%;
      height: 35px;
      bottom: -1rem;
      transform: skew(-82deg, 10deg);
    }
  }

  .divImg {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    position: relative;

    > :first-child {
      background-color: ${({ theme }) => theme.COLORS.BLUE};
      background-size: cover;
      width: 30rem;
      height: 30rem;
      border-radius: 50%;
    }

    span {
      position: absolute;
    }
  }

  .icons_linguage {
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: flex;
    gap: 3rem;
    margin: 2rem 0;
  }

  .sobre_mim {
    color: ${({ theme }) => theme.COLORS.PINK_200};
    text-align: justify;
    width: 100%;
    margin-bottom: 3rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    padding-bottom: 2rem;

    p {
      width: 100%;
      padding: 3rem;
    }

    h2 {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    p, h2, div {
      opacity: 0;
    }

    > :last-child {
      background: ${({ theme }) => theme.COLORS.BACKGROUND};
      width: 200%;
      height: 30px;
      transform: rotateZ(-3deg);
      bottom: -3rem;
    }
  }

  .flutuando {
    color: ${({ theme }) => theme.COLORS.GREEN};
    width: 100%;
    height: 100%;
    position: relative;
    opacity: 0.5 !important;

    > span {
      position: absolute;
      cursor: none;
    }
  }

  .projetos {
    background: ${({ theme }) => theme.COLORS.PURPLE};
    padding-top: 5rem;
    padding-bottom: 10rem;

    display: flex;
    justify-content: center;
    gap: 7rem;
    flex-wrap: wrap;

    > div {
      opacity: 0;
    }
  }

  .contato {
    background-color: ${({ theme }) => theme.COLORS.BLUE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_2};
    width: 100%;
    height: 80vh;
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    > :first-child {
      background-color: ${({ theme }) => theme.COLORS.BLUE};
      width: 100%;
      height: 30px;
      top: -1rem;
      transform: skew(82deg, -2deg);
    }

    > :nth-child(2) {
      padding: 5rem 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      opacity: 0;
    }

    button {
      background: none;
      font-size: 2rem;
      border: none;
      padding: 0;

      a {
        color: ${({ theme }) => theme.COLORS.WHITE};
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding: 1rem 2rem;
      }
    }

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  @media(min-width: 1000px) {
    > div {
      height: 80rem !important;
    }

    .home {
      flex-direction: row-reverse;

      > :first-child {
        text-align: left;
      }
    }

    .sobre_mim {
      background: ${({ theme }) => theme.COLORS.PINK_300};
      color: ${({ theme }) => theme.COLORS.BACKGROUND};
      text-align: center;
      padding: 10rem 0;
      gap: 5rem;
      margin: 0;
      position: static;

      p {
        width: 50%;
        padding: 0;
      }
    }

    .icons_linguage {
      gap: 10rem;
      margin: 0;

      svg {
        width: 10rem;
        height: 10rem;
      }
    }

    .projetos {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_2};
      width: 90%;
      border-radius: 30px;
      margin-top: -20rem;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    }
  }
`;