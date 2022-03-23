import styled from "styled-components";

export const Container = styled.main`
  background-color: var(--color-primary);
  width: 100%;
  display: flex;
  flex-direction: column;
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
    }

    > div:nth-child(2) {
      margin-bottom: 23px;
      width: 90%;
    }
  }

  @media screen and (min-width: 1024px) {
    > section {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      margin: 0;

      > div:nth-child(2) {
        width: 250px;
      }

      > div:nth-child(4) {
        margin: 0;
        margin-right: 30px;
      }
    }
  }
  @media screen and (min-width: 1440px) {
    > section {
      > div:nth-child(2) {
        width: 400px;
      }
    }
  }
`;
