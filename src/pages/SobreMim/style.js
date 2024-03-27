import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.PURPLE_700};
  text-align: left;
  width: 100%;
  padding-bottom: 2rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  p {
    width: 100%;
    padding: 3rem;
  }

  h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .blank {
    background: ${({ theme }) => theme.COLORS.BACKGROUND};
    width: 200%;
    height: 40px;
    transform: rotateZ(-3deg);
    bottom: -3rem;
  }

  .icons_linguage {
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
    margin: 2rem 0;
  }

  .flutuando {
    width: 100%;
    position: relative;
    opacity: 0.5 !important;

    > span {
      position: absolute;
    }
  }

  @media(min-width: 1000px) {
    text-align: center;
    min-height: 80vh;
    gap: 5rem;
    margin: 0;

    p {
      width: 75rem;
      padding: 0;
    }

    > :last-child {
      height: 80px;
      bottom: 0;
      transform: skewY(2deg);
    }

    .icons_linguage {
      flex-direction: row;
      gap: 10rem;
      margin: 0;
      z-index: 1;

      svg {
        width: 10rem;
        height: 10rem;
      }
    }
  }
`;