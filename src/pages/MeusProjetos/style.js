import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BLACK};
  width: 100%;
  padding: 5rem 3rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10rem;
  flex-wrap: wrap;

  > div {
    opacity: 0;
  }

  @media (min-width: 750px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  @media (min-width: 1000px) {
    display: flex;
    padding: 13rem 5rem 20rem;
    gap: 15rem;

    > div:nth-of-type(even) {
      flex-direction: row-reverse;

      h2 {
        top: -1rem;
      }
    }
  }
`;
