import styled from "styled-components";

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 50%;
  justify-content: center;

  background-color: var(--bg-color-register-2);

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 690px;
    width: 400px;
    background-color: var(--form-register);
    border-radius: 20px;
    padding-top: 40px;

    > section {
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      > button {
        width: 265px;
        height: 38px;
        border-radius: 4px;
        background: var(--color-primary-2);
        color: white;
        margin-bottom: 20px;
        transition: background 0.5s;
      }
      > button:hover {
        background: var(--color-primary-3);
      }
    }
  }

  @media (max-width: 850px) {
    width: 100%;
  }
  @media (max-width: 450px) {
    > form {
      width: 300px;
      margin-bottom: 20px;
    }
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;

  > h1 {
    color: var(--primary-tittle);
    font-size: 30px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  > h4 {
    color: var(--primary-tittle);
    font-size: 22px;
    font-weight: 500;

    > a {
      color: #1091ee;
    }
    > a:hover {
      text-decoration: underline;
    }
  }
`;
