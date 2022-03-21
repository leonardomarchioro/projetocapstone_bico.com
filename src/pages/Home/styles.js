import styled from "styled-components";

export const Container = styled.main`
  background-color: #badbf3;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #12465a;
  > div {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: ${({ modalLoginUp }) => (modalLoginUp ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  padding: 0 30px;
  margin-top: 100px;

  .containerMobile {
    max-width: 320px;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
      font-weight: 500;
    }

    p {
      font-size: 0.8rem;
      width: 100%;
      font-weight: 500;
    }

    figure {
      max-width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 30px 0;

      img {
        width: 150px;
        height: 132px;
      }
    }
  }

  .containerDesktop {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0 5%;
    margin-top: 90px;

    .containerMobile {
      margin-top: 0;
      min-width: 60%;
      height: 400px;
      margin-left: 20px;
      margin-right: 20px;
      display: flex;
      justify-content: center;

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

      figure {
        display: none;

        img {
          width: 310px;
          height: 292px;
        }
      }
    }

    .containerDesktop {
      display: flex;
      justify-content: center;
      width: 40%;
      margin-right: 50px;
      height: 300px;

      figure {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;

        img {
          width: 230px;
          height: 220px;
          margin-bottom: 20px;
        }

        figcaption {
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 1px;
        }
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    .containerMobile {
      span {
        font-weight: 500;
      }

      h3 {
        font-weight: 500;
      }

      h2 {
        font-size: 2rem;
      }
    }
  }

  @media only screen and (min-width: 1440px) {
    .containerMobile {
      margin-top: 0;
      min-width: 60%;
      height: 400px;
      margin-left: 20px;
      margin-right: 20px;
      display: flex;
      justify-content: center;

      h2 {
        font-size: 4rem;
        font-family: "Josefin Sans", sans-serif;
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

      figure {
        display: none;

        img {
          width: 310px;
          height: 292px;
        }
      }

      span {
        font-weight: 500;
        width: 90.4%;
        font-size: 1.2em;
      }
    }

    .containerDesktop {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-right: 5%;

      figure {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        height: 320px;
        width: 100%;

        img {
          width: 72%;
          height: 85%;
          margin-bottom: 20px;
        }

        figcaption {
          font-size: 1.1rem;
          font-weight: 600;
          letter-spacing: 1px;
        }
      }
    }
  }
`;
