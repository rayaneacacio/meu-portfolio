import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: relative;

  > h2 {
    color: ${({ theme }) => theme.COLORS.PINK_200};
    font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
  }

  > div {
    width: 30rem;
    position: relative;
  }

  > div:first-of-type {
    height: 18rem;
  }

  .imgDesktop {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 95%;
    border-radius: 5px;
  }

  .imgDesktop,
  .imgMobile {
    filter: drop-shadow(1px 2px 5px rgba(2, 2, 2, 0.46495094619879207));
  }

  .imgMobile {
    background-size: cover;
    width: 23%;
    height: 74%;
    position: absolute;
    bottom: 0;
    right: -1rem;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }

  .description {
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
  }

  .links {
    width: 100%;
    display: flex;
    gap: 1rem;

    a {
      background-color: ${({ theme }) => theme.COLORS.PINK_200};
      color: ${({ theme }) => theme.COLORS.PINK_900};
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;

      &:hover {
        background-color: ${({ theme }) => theme.COLORS.PINK_900};
        color: ${({ theme }) => theme.COLORS.PINK_200};
        filter: none;
      }
    }
  }

  @media (min-width: 1000px) {
    flex-direction: row;

    > h2 {
      position: absolute;
      top: -4rem;
      left: -1rem;
    }

    > div,
    > div:first-of-type {
      width: 49rem;
      height: 29rem;
    }

    .description {
      max-width: 40rem;
    }

    .links {
      width: auto;
    }
  }
`;
