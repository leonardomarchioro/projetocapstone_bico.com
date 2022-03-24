import styled from "styled-components";

export const PageRegister = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: var(--bg-color-register-1);

  > section:nth-child(2) {
    flex: 1;
  }
  @media (min-width: 1024px) {
    > section {
      width: 50%;
    }
  }

  @media (min-width: 1440px) {
    > section {
      width: 50%;
    }
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    width: 490px;
  }
  @media (max-width: 850px) {
    display: none;
  }

  @media (max-width: 1000px) {
    > img {
      width: 400px;
    }
  }
`;
