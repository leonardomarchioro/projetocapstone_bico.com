import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 1024px) {
    align-items: flex-start;
    width: 100%;
    padding-right: 30px;
  }
`;
