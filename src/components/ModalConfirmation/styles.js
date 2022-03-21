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
    background-color: #fff;
    width: 500px;
    height: 250px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
