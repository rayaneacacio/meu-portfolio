import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.WHITE};
  width: 30rem;
  height: 20rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  font-size: 1.8rem;
  border-radius: 5px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  &:hover {
    overflow: hidden;

    > :first-child, .mobile {
      animation: animateProjects 0.5s forwards;
      filter: blur(1px);
    }

    > :last-child {
      display: flex;
    }
  }

  > :first-child {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

  > :last-child {
    background: rgba(8, 8, 8, 0.64);
    width: 100%;
    height: 100%;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    border-radius: 5px;
    position: absolute;
    top: 0;
  }

  > h2 {
    font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
  }

  p {
    text-align: center;
  }

  .div_links {
    display: flex;
    gap: 3rem;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  /* .mobile {
    background-size: cover;
    width: 25%;
    height: 70%;
    position: absolute;
    bottom: -1rem;
    right: -2rem;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  } */

  @media(min-width: 1000px) {
    width: 50rem;
    height: 30rem;
  }
`;