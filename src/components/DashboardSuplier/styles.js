import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(180deg, #a8d5f4, rgba(214, 231, 243, 0));
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 300px;
  width: 80%;

  h2 {
    font-size: 0.8rem;
    height: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #78bced;
    color: #1e637d;
    border-radius: 5px 5px 0 0;
  }

  ul {
    background: rgba(79, 113, 141, 0.54);
    max-height: 400px;
    overflow-y: scroll;
  }

  h3 {
    font-size: 16px;
    font-weight: 500;
    padding-bottom: 2px;
  }
  span {
    font-size: 12px;
    font-weight: 500;
    padding-bottom: 2px;
    color: #003347;
  }
  p {
    font-size: 12px;
    font-weight: 500;
    color: #003347;
  }
`;
