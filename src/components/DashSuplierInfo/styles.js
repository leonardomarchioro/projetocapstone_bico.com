import styled from "styled-components";

export const ContainerService = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 10px;
  background: linear-gradient(180deg, #a8d5f4 0%, rgb(255 255 255 / 68%) 100%);
  margin: 10px 20px;
  border-radius: 5px;
  > span {
    margin-left: 20px;
  }
`;

export const Div = styled.p`
  width: 100%;
  padding: 5px 20px;
  max-height: 100px;
  word-break: break-word;
`;

export const ContainerInfos = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px 20px;

  > section {
    width: auto;
    button {
      background-color: #57de75;
      width: 96px;
      height: 28px;
      font-weight: 500;
      font-size: 12px;
      padding: 5px 5px;
      transition: 1s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
