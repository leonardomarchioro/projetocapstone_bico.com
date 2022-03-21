import styled from "styled-components";

export const ContainerPassword = styled.div`
  width: 100%;

  > div {
    height: 25px;
    width: 85%;

    > label {
      font-size: 15px;
    }
    > span {
      font-size: 12px;
    }
  }
`;

export const InputEye = styled.section`
  width: 85%;
  display: flex;

  input {
    width: 100%;
    height: 39px;
    background-color: var(--bg-color-register-1);
    border: transparent;
    border-radius: 3px;
    text-indent: 10px;
    color: var(--title-1);
    position: relative;

    &::placeholder {
      color: var(--color-scrollbar);
    }
  }
  input:focus {
    border: 1px solid #000;
    color: #000;
  }

  input:focus::-webkit-input-placeholder {
    color: #000;
  }
  button {
    position: absolute;
    background: transparent;
    right: 15.3%;
    top: 60%;
    > svg {
      color: #3492d4;
    }

    @media only screen and (min-width: 768px) {
      right: 12%;
      top: 63%;
    }

    @media only screen and (min-width: 1024px) {
      right: 14.5%;
      top: 51%;
    }

    @media only screen and (min-width: 1440px) {
      right: 15.3%;
      top: 24.5%;
    }
  }
`;
