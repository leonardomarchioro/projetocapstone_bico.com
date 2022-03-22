import styled from "styled-components";

export const Container = styled.main`
  background-color: var(--color-primary);
  min-width: 320px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  min-height: 100vh;
  padding-bottom: 50px;
  > div:first-child {
    padding: 1.5rem;
  }
  > section {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    > div:nth-child(1) {
      padding: 20px;
      width: 100%;
    }

    > div:nth-child(2) {
      margin-bottom: 23px;
      width: 90%;
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 1rem;
    > section {
      display: flex;
      flex-direction: row;
    }
  }
`;
