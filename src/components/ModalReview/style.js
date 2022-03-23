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
`;

export const Modal = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 20px;
  min-width: 300px;
  width: 90%;
  max-width: 400px;
  height: 400px;
  border-radius: 4px;
  background-color: rgba(120, 188, 237, 1);

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

      textarea {
        resize: none;
        margin: 10px 0;
      }
    }
  }
`;
