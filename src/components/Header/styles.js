import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background-color: #78bced;
  border-radius: ${({ open }) => open && "0 0 50px 0"};

  .cont2 {
    background-color: var(--color-primary-4);
  }

  section {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10px;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
  }
`;
