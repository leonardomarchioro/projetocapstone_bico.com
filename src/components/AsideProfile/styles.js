import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  display: ${({ profile }) => (profile ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    display: ${({ profile }) => (profile ? "flex" : "flex")};
    width: 303px;
    height: 678px;
    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 90%;
  margin-bottom: 10px;

  > div {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    figure {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;

      img {
        border-radius: 80%;
        width: 100%;
        height: 100%;
      }
    }
    span {
      text-align: center;
    }
  }
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    width: 40%;
    margin-bottom: 10px;

    button {
      border-radius: 50%;
      width: 50px;
      height: 50px;
    }
  }

  @media screen and (min-width: 1024px) {
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;

    > div {
      gap: 1rem;
    }
  }
`;
