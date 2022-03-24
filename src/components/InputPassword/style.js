import styled from "styled-components";

export const ContainerPassword = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  > div {
    height: 25px;
    width: 85%;

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
  width: 90%;
  display: flex;

  input {
    width: 100%;
    height: 39px;
    background-color: var(--bg-color-register-1);
    border: ${({ error }) => (error ? "1px solid #ff0033" : "transparent")};
    border-radius: 3px;
    text-indent: 10px;
    color: var(--title-1);
    position: relative;
    right: -8px;

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
    background: transparent;
    position: relative;
    top: ${({ style }) => (style ? "13px" : "3px")};
    right: 25px;
    > svg {
      color: #3492d4;
    }
  }
`;
