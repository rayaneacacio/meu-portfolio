import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  color: ${({ theme }) => theme.COLORS.PINK};
  position: relative;

  main {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .blank {
    opacity: 1 !important;
    position: absolute;
  }

  .sobre_mim, .projetos > div {
    opacity: 0;
  }

  footer {
    background: ${({ theme }) => theme.COLORS.BACKGROUND};
    color: ${({ theme }) => theme.COLORS.PINK_900};
    font-size: 1.5rem;
    width: 100%;
    height: 5rem;
    padding: 3rem 2rem 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`;

export const DivHome = styled.div`
  background: ${({ theme }) => theme.COLORS.PURPLE_700};
  color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  min-height: 100vh;
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

  .blank {
    background: ${({ theme }) => theme.COLORS.PURPLE_700};
    width: 100%;
    height: 35px;
    bottom: -1rem;
    transform: skew(-82deg, 10deg);
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

  @media(min-width: 500px) {
    .blank {
      transform: skew(-82deg, 3deg);
    }
  }

  @media(min-width: 1000px) {
    min-height: 90vh;
    padding: 0;
    flex-direction: row-reverse;
    padding: 10rem 0;

    > div:not(.blank) {
      z-index: 1;
    }

    > :first-child {
      text-align: left;
    }

    > :last-child {
      transform: skew(-82deg, 3deg);
      height: 75px;
    }
  }
`;