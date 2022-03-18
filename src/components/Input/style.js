import styled from "styled-components";

export const ContainerInput = styled.div`
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
    border: ${({ error }) => (error ? "1px solid #ff0033" : "transparent")};
    border-radius: 3px;
    padding-left: 10px;
    color: var(--title-1);

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
