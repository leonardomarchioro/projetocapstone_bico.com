import styled from "styled-components";

export const Container = styled.main`
  background-color: var(--color-primary);
  min-width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-bottom: 50px;

  > div:nth-child(1) {
    padding: 20px;
    width: 100%;
  }

  > div:nth-child(2) {
    margin-bottom: 23px;
    width: 90%;
  }
`;
