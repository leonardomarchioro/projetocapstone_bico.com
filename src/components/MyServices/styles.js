import styled from "styled-components";

export const Container = styled.div`
  display: ${({ showService }) => !showService && "none"};
  min-width: 300px;
  width: 90%;
  height: 536px;

  margin: 0 auto;
  border-radius: 5px;
  background-color: inherit;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);

  h1 {
    font-size: 0.8rem;
    height: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #9ccbf6;
    color: #1e637d;
    border-radius: 5px 5px 0 0;
    width: 100%;
  }

  ul {
    max-height: 499px;
    height: 499px;
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
    min-width: 500px;
    height: 342px;
    margin: 0;
    width: 100%;
    ul {
      width: 100%;
      height: 342px;
    }
  }

  @media screen and (min-width: 1316px) {
    min-width: 700px;
  }
`;
