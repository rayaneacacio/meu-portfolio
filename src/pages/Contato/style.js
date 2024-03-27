import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.PURPLE_200};
  color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  min-height: 80vh;
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .blank {
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
      color: ${({ theme }) => theme.COLORS.WHITE};
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      padding: 1rem 2rem;

      &:hover {
        filter: brightness(1);
      }
    }
  }

  a {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2.2rem;
  }

  .borderEmail {
    background-color: ${({ theme }) => theme.COLORS.PURPLE};
    height: 2px;
    opacity: 0;
  }

  .divRedesSociais {
    display: flex;
    opacity: 0;
  }

  @media(min-width: 1000px) {
    .blank {
      height: 56px;
    }
  }
`;