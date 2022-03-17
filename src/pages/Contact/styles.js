import styled from "styled-components";
import wave from "../../img/wave1.png";

export const Container = styled.main`
  background-color: #badbf3;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: #12465a;
  background-image: url(../../img/wave1.png);
  background-size: 150px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 30px;

  .containerMobile {
  }
`;
