import styled from "styled-components";

export const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100%;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
