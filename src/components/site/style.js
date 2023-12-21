import styled from "styled-components";

export const Container = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  width: 50rem;
  height: 30rem;
  padding: 5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  > h2 {
    font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
  }

  .div_buttons {
    display: flex;
    gap: 3rem;
  }

  button {
    color: ${({ theme }) => theme.COLORS.PINK}
  }
`;