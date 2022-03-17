import styled from "styled-components";

export const PageRegister = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const ContainerImg = styled.div`
  height: 100%;
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
