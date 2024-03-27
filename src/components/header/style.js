import styled from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme.COLORS.PURPLE_700};
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px 0px;
  padding: 5px 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY};
  position: relative;

  > img {
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