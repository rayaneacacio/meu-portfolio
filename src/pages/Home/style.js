import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  color: ${({ theme }) => theme.COLORS.PINK_300};
  position: relative;

  header {
    background: ${({ theme }) => theme.COLORS.BACKGROUND};
    width: 100%;
    height: 10rem;
    display: flex;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px 0px;
    padding: 2rem 15rem;

    position: fixed;
    top: 0;
    z-index: 2;
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
    gap: 2rem;
    font-weight: bold;
  }

  nav ul, nav a {
    color: ${({ theme }) => theme.COLORS.PINK_300};
    padding: 3.8rem 1rem;
  }

  nav a:hover, nav ul:hover {
    border-bottom: 3px solid transparent; 
  }

  /* button {
    background: ${({ theme }) => theme.COLORS.PINK};
    font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
    font-size: 1.7rem;
    font-weight: bold;
    padding: 1rem 2rem;
    border-radius: 8px;
    margin-top: 3rem;
  }

  footer {
    background: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.WHITE};
    width: 100%;
    height: 5rem;
    text-align: end;
    padding: 1rem 2rem 0;
  } */
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;

  > div {
    height: 80rem;
  }

  .home {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    img {
      width: 30rem;
      height: 30rem;
      border-radius: 50%;
    }

    > :first-child {
      animation: inicio 1s forwards;
    }
  }

  .icons_linguage {
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: flex;
    gap: 10rem;
  }

  .sobre_mim {
    background: ${({ theme }) => theme.COLORS.PINK_300};
    color: ${({ theme }) => theme.COLORS.BACKGROUND};
    font-size: 1.8rem;
    text-align: center;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;

    padding: 10rem 0;

    p {
      width: 50%;
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
    background: ${({ theme }) => theme.COLORS.GRAY};
    width: 90%;
    padding-top: 5rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    border-radius: 30px;
    margin-top: -20rem;
    margin-bottom: 20rem;

    display: flex;
    justify-content: center;
    gap: 7rem;
    flex-wrap: wrap;

    > div {
      opacity: 0;
    }
  }
`;