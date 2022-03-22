import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 300px;
  height: 50px;
  background-color: var(--form-register);
  border-radius: 10px;
  margin: 0 auto;
  padding: 0 20px;
  box-shadow: 0px 4px 4px rgba(9, 9, 9, 0.2);

  > div {
    display: flex;
    gap: 10px;
  }

  button {
    background-color: var(--form-register);
    color: #3b87b0;
  }
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
