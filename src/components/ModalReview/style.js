import styled from "styled-components";

export const ContainerModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  overflow-x: none;
  z-index: 9;
`;

export const Modal = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
  border-radius: 4px;
  background: white;
  width: 300px;

  .Header {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 4px 4px 0 0;
    h1 {
      background-color: #9ccbf6;
      width: 100%;
    }
    > svg {
      position: relative;
      top: -34px;
      left: 267px;
      color: #d30000;
      transition: 0.4s;
      cursor: pointer;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 80%;
    justify-content: space-between;
    margin: 10px 0;

    .containerTextarea {
      width: 100%;
      display: flex;
      flex-direction: column;
      label {
        margin: 20px;
      }

      textarea {
        resize: none;
        margin: 10px 20px;
        padding: 5px;
        border-radius: 4px;
        border: transparent;
        background-color: #d3e9f8;
      }
    }
    > button {
      width: 200px;
      height: 30px;
      background-color: #10ab06d4;
      color: white;
      font-weight: 600;
      transition: 0.4s;
      margin-bottom: 10px;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  @media screen and (min-width: 768px) {
    width: 500px;

    .Header {
      svg {
        left: 455px;
      }
    }
  }
`;
