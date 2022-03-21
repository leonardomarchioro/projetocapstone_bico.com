import styled from "styled-components";

export const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100%;

  form {
    display: flex;
    width: 90%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    justify-content: flex-start;
    background-color: var(--color-primary-2);
    border-radius: 10px;
    box-shadow: 0px 3px 3px 0px rgb(0 0 0 / 35%);

    h3 {
      padding: 50px 0px 30px;
    }

    section {
      margin-bottom: 0px;
    }

    h4 {
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 5px;
    }

    a {
      font-size: 14px;
      font-weight: 500;
    }
    button {
      margin-bottom: 20px;
    }

    h4 {
      font-size: 0.8rem;
    }

    a {
      font-size: 0.8rem;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  @media only screen and (min-width: 768px) {
    form {
      width: 38%;
      height: 90%;
    }
  }

  @media only screen and (min-width: 1024px) {
    z-index: 1;
    width: 100%;
    margin-top: 100px;

    form {
      width: 27%;
      height: 92%;

      h3 {
        padding: 40px 0px 30px;
      }

      h4 {
        font-size: 0.8rem;
      }

      a {
        font-size: 0.8rem;
      }

      section {
        margin-bottom: 0;
      }

      button {
        margin-bottom: 25px;
      }
    }
  }

  @media only screen and (min-width: 1440px) {
    z-index: 1;
    width: 100%;
    height: 100%;
    margin-top: 100px;

    form {
      width: 23%;
      height: 100%;

      h3 {
        padding: 40px 0px 30px;
      }

      section {
      }

      button {
        margin-bottom: 20px;
      }
    }
  }
`;

export const Welcome = styled.h3`
  margin: 25px;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 400;

  @media only screen and (min-width: 768px) {
    display: none;
  }

  @media only screen and (min-width: 1024px) {
    display: none;
  }
`;

export const ContainerForm = styled.div`
  width: 100%;
  display: flex;
  height: 434px;
  align-content: center;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    margin-right: 14%;
    justify-content: flex-end;
    margin-top: 15%;
  }

  @media only screen and (min-width: 1024px) {
    margin-right: 22.6%;
    display: flex;
    margin-top: 0;
    width: 100%;
    justify-content: flex-end;
  }

  @media only screen and (min-width: 1440px) {
    margin-right: 25%;
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
`;
