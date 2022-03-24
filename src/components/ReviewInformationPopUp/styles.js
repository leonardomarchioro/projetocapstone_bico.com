import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 400px;
  font-size: 12px;

  header {
    /* height: 30px; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #a8d5f4;
    font-size: 12px;
    font-weight: bold;
    border-radius: 5px 5px 0 0;
    padding-top: 15px;
  }
  .svg-icon {
    position: relative;
    top: -25px;
    right: -130px;
    color: #f86060;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      color: red;
      transform: scale(1.1);
    }
  }
  ul {
    width: 100%;
    max-height: 400px;
    display: flex;
    padding: 0;
    align-items: center;
    overflow-y: scroll;

    li {
      margin-top: 10px;
      width: 85%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-radius: 5px;
      padding: 10px;
      background-color: #d3e9f8;
      > span {
        display: flex;
        align-items: center;
        gap: 5px;
      }
      > p {
        width: 90%;
        margin-top: 10px;
        color: #333;
      }
    }
  }

  .review-average {
    width: 100%;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > span {
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    > h2 {
      font-size: 16px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 500px;
    font-size: 16px;
    border-radius: 50%;
    .svg-icon {
      right: -226px;
    }
  }
`;
