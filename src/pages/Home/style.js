import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 1.6rem;
  position: relative;

  header {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_2};
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px 0px;
    padding: 5px 2rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY};
    position: relative;
  }

  header > img {
    width: 3rem;
    cursor: pointer;
  }

  nav {
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: bold;
  }

  nav ul, nav a {
    color: ${({ theme }) => theme.COLORS.YELLOW};
    user-select: none;
  }

  nav ul:hover, nav a:hover{
    margin-bottom: 8px;
  }

  nav ul {
    display: none;
  }

  .homeButtons {
    margin-top: 2rem;

    a {
      background: ${({ theme }) => theme.COLORS.PINK};
      color: ${({ theme }) => theme.COLORS.WHITE};
      margin-top: 3rem;
    }

    a:last-of-type {
      background: ${({ theme }) => theme.COLORS.WHITE};
      color: ${({ theme }) => theme.COLORS.PINK};
      border: 1px solid ${({ theme }) => theme.COLORS.PINK};
      margin-left: 1rem;
    }
  }

  footer {
    background: ${({ theme }) => theme.COLORS.BACKGROUND};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.5rem;
    width: 100%;
    height: 5rem;
    padding: 3rem 2rem 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
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
      background: transparent;
      height: 10rem;
      position: fixed;
      top: 0;
      z-index: 2;
      padding: 2rem 15rem;
      border: none;

      img {
        cursor: auto;
      }
    }

    nav {
      gap: 2rem;
    }

    nav ul {
      display: block;
    }

    nav ul, nav a {
      padding: 3.8rem 1rem;
    }
  }
`;

export const Main = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .home {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_2};
    color: ${({ theme }) => theme.COLORS.WHITE};
    width: 100%;
    height: 100vh;
    padding-bottom: 5rem;
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
      background-color: ${({ theme }) => theme.COLORS.PINK_200};
      background-size: cover;
      background-position: center;
      width: 30rem;
      height: 30rem;
      border-radius: 50%;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    }

    span {
      position: absolute;
    }
  }

  .icons_linguage {
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
    margin: 2rem 0;
  }

  .sobre_mim {
    color: ${({ theme }) => theme.COLORS.PURPLE_700};
    font-size: 1.8rem;
    text-align: justify;
    width: 100%;
    margin-bottom: 3rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
      height: 40px;
      transform: rotateZ(-3deg);
      bottom: -3rem;
    }
  }

  .flutuando {
    width: 100%;
    position: relative;
    opacity: 0.5 !important;

    > span {
      position: absolute;
    }
  }

  .projetos {
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    width: 100%;
    padding: 5rem 3rem 10rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10rem;
    flex-wrap: wrap;

    > div {
      opacity: 0;
    }
  }

  .contato {
    background-color: ${({ theme }) => theme.COLORS.PURPLE_200};
    color: ${({ theme }) => theme.COLORS.WHITE};
    width: 100%;
    height: 80vh;
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    > :first-child {
      background-color: ${({ theme }) => theme.COLORS.PURPLE_200};
      width: 100%;
      height: 35px;
      top: -1rem;
      transform: skew(82deg, -2deg);
    }

    > :nth-child(2) {
      padding: 5rem 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      opacity: 0;

      a {
        padding: 1rem;
      }
    }

    button {
      background: none;
      font-size: 2rem;
      border: none;
      padding: 0;
      margin-top: 5rem;

      a {
        color: ${({ theme }) => theme.COLORS.PINK_900};
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding: 1rem 2rem;
      }
    }

    a {
      color: ${({ theme }) => theme.COLORS.PINK_900};
      font-size: 2.2rem;
    }
  }

  @media(min-width: 500px) {
    .home > :last-child {
      transform: skew(-82deg, 3deg);
    }
  }

  @media(min-width: 1000px) {
    font-size: 1.6rem;

    .home {
      height: 90vh;
      padding: 0;
      flex-direction: row-reverse;

      > :first-child {
        text-align: left;
      }

      > :last-child {
        transform: skew(-82deg, 3deg);
        height: 75px;
      }
    }

    .sobre_mim {
      text-align: center;
      height: 80vh;
      padding: 10rem 0;
      gap: 5rem;
      margin: 0;

      p {
        width: 65rem;
        padding: 0;
      }

      > :last-child {
        height: 80px;
        bottom: 0;
        transform: skewY(2deg);
      }
    }

    .icons_linguage {
      flex-direction: row;
      gap: 10rem;
      margin: 0;

      svg {
        width: 10rem;
        height: 10rem;
      }
    }

    .projetos {
      padding: 13rem 5rem 20rem;
      gap: 15rem;

      > div:nth-of-type(even) {
        flex-direction: row-reverse;

        h2 {
          top: 0;
        }
      }
    }

    .contato {
      > :first-child {
        height: 56px;
      }
    }
  }
`;