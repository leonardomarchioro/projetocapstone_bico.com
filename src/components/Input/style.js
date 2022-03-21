import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
`;

export const LabCont = styled.div`
  width: 85%;
  height: 25px;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: flex-start;
  width: 85%;

  > input {
    width: 100%;
    height: 39px;
    background-color: var(--bg-color-register-1);
    border: transparent;
    border-radius: 3px;
    text-indent: 10px;
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
    width: 100%;
    display: flex;
    align-items: center;

    > label {
      font-size: 15px;
    }
    > span {
      font-size: 12px;
    }
  }
`;
