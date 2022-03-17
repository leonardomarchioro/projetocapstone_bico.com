import styled from "styled-components";

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;

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
