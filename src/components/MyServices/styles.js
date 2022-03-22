import styled from "styled-components";

export const Container = styled.div`
  display: ${({ showService }) => !showService && "none"};
  min-width: 300px;
  height: 536px;
  margin: 0 auto;
  width: 90%;
  border-radius: 5px;
  background-color: inherit;
  border-radius: 5px;

  h1 {
    font-size: 0.8rem;
    height: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #9ccbf6;
    color: #1e637d;
    border-radius: 5px 5px 0 0;
  }

  ul {
    max-height: 400px;
    height: 400px;
    list-style: none;
    padding: 10px 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    background-color: #fff;
    border-radius: 0 0 5px 5px;
    overflow-y: scroll;
  }

  @media screen and (min-width: 1024px) {
    display: ${({ showService }) => (showService ? "flex" : "flex")};
    flex-direction: column;
    width: 700px;
    height: 342px;
    ul {
      width: 700px;
      height: 342px;
    }
  }
`;
