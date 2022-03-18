import styled from "styled-components";

export const Container = styled.div`
  margin-left: 10px;

  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    color: #12465a;
    transition: 0.5s;

    &:hover {
      filter: drop-shadow(10px 10px 4px var(--primary-tittle));
    }
  }
`;