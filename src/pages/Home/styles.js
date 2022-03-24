import styled from "styled-components";
export const Container = styled.main`
  background-color: #badbf3;
  min-height: 100vh;

  color: #12465a;
`;
export const Content = styled.div`
  display: ${({ modalLoginUp }) => (modalLoginUp ? "none" : "flex")};
  flex-direction: column;
  align-items: center;
  height: 500px;
  justify-content: space-around;
  padding: 15px;
  h3 {
    font-weight: 500;
  }
  p {
    font-size: 0.8rem;
    font-weight: 500;
  }
  .ImagemContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    figure {
      img {
        width: 260px;
        height: 200px;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    display: flex;
    .TextContainer {
      width: 400px;
      position: relative;
      left: -150px;
      top: ${({ modalLoginUp }) => (modalLoginUp ? "120px" : "169px")};
    }
    h2 {
      font-size: 1.5rem;
    }
    h3 {
      margin-bottom: 20px;
      font-weight: 500;
    }
    p {
      font-size: 0.9rem;
      font-weight: bold;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    span {
      font-size: 1rem;
      width: 90%;
    }
    .ImagemContainer {
      figure {
        display: ${({ modalLoginUp }) => (modalLoginUp ? "none" : "flex")};
        img {
          position: relative;
          top: 21px;
          left: 194px;
          width: 300px;
        }
      }
      span {
        width: 400px;
        position: relative;
        left: -160px;
        top: ${({ modalLoginUp }) => (modalLoginUp ? "none" : "-50px")};
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    span {
      font-weight: 500;
    }
    h3 {
      font-weight: 500;
    }
    h2 {
      font-size: 2rem;
    }
    .ImagemContainer {
      figure {
        img {
          top: -41px;
          left: 251px;
          width: 330px;
        }
      }
    }
  }

  @media only screen and (min-width: 1440px) {
    .TextContainer {
      width: 670px;
      left: -245px;
      top: ${({ modalLoginUp }) => (modalLoginUp ? "83px" : "159px")};

      h2 {
        width: 100%;
        font-size: 4rem;
        font-family: "Josefin Sans", sans-serif;
      }
    }

    h3 {
      margin-bottom: 1.5rem;
      font-size: 22px;
      font-weight: 500;
    }
    p {
      font-size: 1.1rem;
      font-weight: bold;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .ImagemContainer {
      figure {
        img {
          left: 400px;
        }
      }

      span {
        left: -379px;
        top: ${({ modalLoginUp }) => (modalLoginUp ? "28px" : "none")};
        font-weight: 500;
        font-size: 1.2em;
      }
    }
  }
`;
