import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);

  > div {
    background: linear-gradient(
      90deg,
      rgba(120, 188, 237, 1) 0%,
      rgba(213, 227, 248, 1) 50%
    );
    width: 500px;
    height: 150px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    > h2 {
      font-size: 12px;
      margin-top: 1rem;
    }
    > div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      height: 100%;
      button {
        padding: 1rem 0;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        color: #fff;
        flex: 0.25;
        font-size: 16px;
        font-weight: 600;
        :first-child {
          background-color: #38b000;
        }
        :last-child {
          background-color: #e01e37;
        }
      }
    }
  }
  @media screen and (min-width: 768px) {
    > div {
      width: 400px;
      padding: 1rem;
      > h2 {
        font-size: 15px;
      }
    }
  }
`;
