import styled from "styled-components";

export const ContainerPassword = styled.div`
  width: 80%;

  > div {
    height: 25px;

    > label {
      font-size: 15px;
    }
    > span {
      font-size: 12px;
      color: #ff0033;
    }
  }
`;

export const InputEye = styled.section`
  width: 100%;
  display: flex;

  input {
    width: 100%;
    height: 39px;
    background-color: var(--bg-color-register-1);
    border: ${({ error }) => (error ? "1px solid #ff0033" : "transparent")};
    border-radius: 3px;
    padding-left: 10px;
    color: var(--title-1);
    position: relative;
    left: 4px;

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
    position: relative;
    right: 20px;
    background: transparent;
    > svg {
      color: #3492d4;
    }
  }
`;
