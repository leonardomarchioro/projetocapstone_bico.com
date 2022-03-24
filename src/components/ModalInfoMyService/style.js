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
  gap: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  z-index: 9;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Modal = styled.section`
  background: linear-gradient(180deg, #a8d5f4 0%, rgb(255 255 255 / 68%) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 60px 18px;
  height: 400px;
  border-radius: 4px;
  min-width: 300px;
  width: 300px;

  .Infos {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-around;
    margin: 45px 0;
    span {
      padding: 5px;
      width: 100%;
      font-weight: 600;
      line-height: 22px;
      font-size: 12px;
    }

    .div-info {
      display: flex;
      flex-direction: column;
    }
    .button-info {
      background-color: #67b3dd;
      width: 72px;
      height: 30px;
      color: white;
    }
  }

  .button-modal {
    background-color: #008000b8;
    width: 100px;
    height: 30px;
    color: white;
    font-weight: 00;
    transition: 0.5s;
    margin: 0 10px;
    &:hover {
      transform: scale(1.1);
    }
  }
  .fechar {
    background-color: #f86060;
  }

  .logo {
    position: relative;
    top: -53px;
    right: -128px;

    svg {
      color: #f86060;
      cursor: pointer;
      transition: 0.5s;
    }

    &:hover {
      color: red;
      transform: scale(1.1);
    }
  }
  .averageName {
    display: flex;
    flex-direction: row;
    align-items: center;

    > h2 {
      width: 100%;
      text-align: center;
      color: black;
      text-align: initial;
      font-weight: 500;
      font-size: 18px;

      .h2-span {
        color: #333;
        font-size: 18px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    width: 500px;

    .Infos > span {
      font-size: 18px;
    }

    .logo {
      position: relative;
      top: -53px;
      right: -231px;
    }
  }
`;

export const Div = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
