import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 400px;
  font-size: 12px;

  header {
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #a8d5f4;
    font-size: 12px;
    font-weight: bold;
  }

  ul {
    width: 100%;
    max-height: 400px;
    display: flex;
    padding: 0;
    align-items: center;
    overflow-y: scroll;

    li {
      margin-top: 10px;
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border: 1px dashed #000;
      padding: 5px;
      background-color: #d3e9f8;
      > span {
        display: flex;
        align-items: center;
        gap: 5px;
      }
    }
  }
  @media screen and (min-width: 768px) {
    width: 500px;
    font-size: 16px;
    border-radius: 50%;
  }
`;
