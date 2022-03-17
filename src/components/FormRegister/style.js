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
    height: 640px;
    width: 400px;
    background-color: var(--form-register);
    border-radius: 20px;
    padding-top: 40px;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      align-items: flex-start;
      height: 75px;
      width: 80%;

      > input {
        width: 100%;
        height: 39px;
        background-color: var(--bg-color-register-1);
        border: transparent;
        border-radius: 3px;
        padding-left: 10px;
        color: var(--title-1);

        &::placeholder {
          color: var(--color-scrollbar);
        }
      }
      > div {
        height: 25px;

        > label {
          font-size: 15px;
        }
        > span {
          font-size: 12px;
        }
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
  }
`;
