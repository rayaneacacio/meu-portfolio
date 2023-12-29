import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  color: ${({ theme }) => theme.COLORS.PINK_300};
  position: relative;

  header {
    background: ${({ theme }) => theme.COLORS.BACKGROUND};
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px 0px;
    padding: 2rem;
  }

  header > div {
    display: flex;
    gap: 1rem;
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
      color: ${({ theme }) => theme.COLORS.BACKGROUND};
    }
  }

  button:last-of-type {
    background: none;
    border: 1px solid ${({ theme }) => theme.COLORS.PINK_300};
    margin-left: 1rem;

    > a {
      color: ${({ theme }) => theme.COLORS.PINK_300};
    }
  }

  /* footer {
    background: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.WHITE};
    width: 100%;
    height: 5rem;
    text-align: end;
    padding: 1rem 2rem 0;
  } */

  @media(min-width: 1000px) {
    header {
      height: 10rem;
      position: fixed;
      top: 0;
      z-index: 2;
      padding: 2rem 15rem;
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
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;

  .home {
    width: 80%;
    height: calc(100vh - 10rem);
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 5rem;

    img {
      width: 30rem;
      height: 30rem;
      border-radius: 50%;
    }

    > :first-child {
      text-align: center;
    }
  }

  .icons_linguage {
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: flex;
    gap: 3rem;
    margin: 2rem 0;
  }

  .sobre_mim {
    font-size: 1.8rem;
    text-align: justify;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

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
  }

  .flutuando {
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
    padding-top: 5rem;
    margin-bottom: 20rem;

    display: flex;
    justify-content: center;
    gap: 7rem;
    flex-wrap: wrap;

    > div {
      opacity: 0;
    }
  }

  @media(min-width: 1000px) {
    > div {
      height: 80rem !important;
    }

    .home {
      flex-direction: row;
      justify-content: space-around;

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
      background: ${({ theme }) => theme.COLORS.GRAY};
      width: 90%;
      border-radius: 30px;
      margin-top: -20rem;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    }
  }
`;