import styled from "styled-components";

export const ContainerService = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 0;
  width: 95%;
  background: linear-gradient(180deg, #a8d5f4 0%, rgb(151 203 244) 100%);
  border-radius: 5px;
  padding: 10px 0 20px 0;
  font-size: 14px;

  .informationButton {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
    align-items: center;

    > section {
      width: 70%;
      margin: 0;
      button {
        background-color: #57de75;
        width: 120px;
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

    > span {
      font-size: 14px;
    }
  }
`;

export const Div = styled.p`
  width: 100%;
  padding: 5px 20px;
  min-height: 100px;
  word-break: break-word;
`;

export const ContainerInfos = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px 20px;

  .informationContainer {
    h3 {
      font-size: 14px;
      margin-bottom: 5px;
    }
  }
`;
