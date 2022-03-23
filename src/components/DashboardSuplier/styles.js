import styled from "styled-components";

export const Container = styled.div`
  min-width: 300px;
  min-height: 138px;
  width: 90%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
    width: 100%;
  }
  ul {
    background-color: #fff;
    border-radius: 0 0 5px 5px;
    min-width: 300px;
    width: 100%;
    overflow-y: scroll;
    min-height: 400px;
    max-height: 600px;
    padding-left: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    .svgEmpty {
      width: 100%;
      min-height: 375px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      img {
        width: 200px;
        opacity: 0.5;
      }
      h3 {
        text-align: center;
        opacity: 0.5;
        color: grey;
        font-weight: 500;
      }
    }
  }
  .empty {
    color: red;
  }
  @media screen and (min-width: 1024px) {
    height: 600px;
    min-width: 600px;
    padding-right: 30px;
    width: 95%;

    margin: 0;

    ul {
      height: 560px;
      .svgEmpty {
        width: 90%;
      }
    }
  }

  @media screen and (min-width: 1316px) {
    min-width: 700px;
  }
`;
