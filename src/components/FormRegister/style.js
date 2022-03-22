import styled from "styled-components";

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  /* width: 50%; */
  justify-content: center;

  background-color: var(--bg-color-register-2);

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 400px;
    background-color: var(--form-register);
    border-radius: 20px;
    padding-top: 30px;
    padding-bottom: 10px;

    @media (min-width: 1024px) {
      width: 350px;
    }

    > section {
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      > button {
        width: 265px;
        height: 38px;
        border-radius: 4px;
        background: #4f9bd1;
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

    @media (min-width: 320px) {
      font-size: 1.2rem;
    }

    @media (min-width: 375px) {
      font-size: 1.3rem;
    }

    @media (min-width: 768px) {
      font-size: 1.6rem;
    }

    @media (min-width: 1024px) {
      font-size: 1.5rem;
    }

    > a {
      color: #1091ee;
    }
    > a:hover {
      text-decoration: underline;
    }
  }
`;
