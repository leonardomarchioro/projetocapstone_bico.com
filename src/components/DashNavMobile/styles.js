import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 296px;
  height: 50px;
  background-color: var(--form-register);
  border-radius: 10px;
  margin: 0 auto;
  padding: 0 20px;
  box-shadow: 0px 2px 2px black;
  > div {
    display: flex;
    gap: 10px;
  }

  button {
    background-color: var(--form-register);
    color: #3b87b0;
  }
`;
