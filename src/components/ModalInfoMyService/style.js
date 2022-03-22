import styled from "styled-components";

export const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
`;

export const Modal = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 0px;
  width: 350px;
  height: 400px;
  border-radius: 4px;
`;
