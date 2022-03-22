import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 15px 15px 0px 15px;
  min-width: 300px;
  min-height: 138px;
  max-width: 700px;
  margin: 10px;

  h2 {
    font-size: 16px;
    font-weight: 500;
    padding-bottom: 2px;
    background: #78bced;
    border-radius: 5px 5px 0 0;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1e637d;
    min-width: 300px;
  }
  ul {
    background-color: #4f718d;
    border-radius: 0 0 5px 5px;
    padding: 10px;
    min-width: 300px;
    overflow-y: scroll;
    min-height: 400px;
    max-height: 600px;
  }
  @media screen and (min-width: 1024px) {
    height: 640px;
    width: 750px;
    padding: 0;
  }
`;
