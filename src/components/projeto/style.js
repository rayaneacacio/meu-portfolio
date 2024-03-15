import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 1.8rem;
  border-radius: 5px;
  display: flex;
  gap: 3rem;
  position: relative;

  > h2 {
    font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
    position: absolute;
    top: -4rem;
    left: -1rem;
  }

  > div {
    width: 45rem;
    height: 27rem;
    position: relative;
  }

  .imgDesktop {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 95%;
    border-radius: 5px;
  }

  .imgDesktop, .imgMobile {
    filter: drop-shadow(1px 2px 5px rgba(2,2,2,0.46495094619879207));
  }

  .imgMobile {
    background-size: cover;
    width: 23%;
    height: 74%;
    position: absolute;
    bottom: 0;
    right: -1rem;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }

  .description {
    width: 55rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 1rem;
  }

  .languages {
    display: flex;
    align-items: center;
    gap: 1rem;

    svg path {
      fill: ${({ theme }) => theme.COLORS.YELLOW};
    }
  }

  .links {
    display: flex;
    gap: 1rem;

    a {
      background-color: ${({ theme }) => theme.COLORS.PURPLE_200};
      color: ${({ theme }) => theme.COLORS.PURPLE};
      display: flex;
      align-items: center;
      gap: 5px;

      &:hover {
        background-color: ${({ theme }) => theme.COLORS.PURPLE};
        color: ${({ theme }) => theme.COLORS.PURPLE_200};
        filter: none;
      }
    }
  }

  @media(min-width: 1000px) {
    > div {
      width: 49rem;
      height: 29rem;
    }
  }
`;