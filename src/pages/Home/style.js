import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  /* height: 100vh; */
  color: ${({ theme }) => theme.COLORS.PINK};
  position: relative;

  /* overflow-y: hidden; */

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
    z-index: 1;
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

  ul, a {
    color: ${({ theme }) => theme.COLORS.PINK};
    padding: 3.8rem 1rem;
  }

  ul:hover, a:hover {
    border-bottom: 3px solid ${({ theme }) => theme.COLORS.PINK};
  }

  .home button {
    background: ${({ theme }) => theme.COLORS.PINK};
    font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
    font-size: 1.7rem;
    font-weight: bold;
    padding: 1rem 2rem;
    border-radius: 8px;
    margin-top: 3rem;
  }
`;

export const Main = styled.main`
  /* height: 200rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;

  > div {
    /* height: calc(100vh - 10rem); */
    height: 100vh;
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
    display: flex;
    gap: 5rem;
    margin-top: 5rem;
  }

  .projetos {
    display: flex;
    gap: 5rem;
    flex-wrap: wrap;
  }
`;