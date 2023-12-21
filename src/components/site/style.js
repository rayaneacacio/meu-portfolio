import styled from "styled-components";

export const Container = styled.div`
  width: 50rem;
  height: 30rem;
  padding: 5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  font-size: 1.8rem;
  text-align: center;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  > :first-child {
    background-repeat: no-repeat;
    background-position: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    background-blend-mode: luminosity;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    opacity: 0.2;
    z-index: -1;
  }

  > h2 {
    font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
  }

  .div_links {
    display: flex;
    gap: 3rem;

    a {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`;