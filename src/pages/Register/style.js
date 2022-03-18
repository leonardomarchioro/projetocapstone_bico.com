import styled from "styled-components";

export const PageRegister = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const ContainerImg = styled.div`
  min-height: 100vh;
  width: 50%;
  background-color: var(--bg-color-register-1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    width: 490px;
  }

  @media (max-width: 1000px) {
    > img {
      width: 400px;
    }
  }
  @media (max-width: 850px) {
    display: none;
  }
`;
