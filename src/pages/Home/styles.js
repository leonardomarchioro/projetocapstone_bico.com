import styled from "styled-components";

export const Container = styled.main`
  background-color: #badbf3;
  min-height: 100vh;
  display: flex;
  align-items: center;
  color: #12465a;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 30px;

  .containerMobile {
    max-width: 320px;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
      font-weight: normal;
    }

    p {
      font-size: 0.8rem;
      width: 100%;
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
    padding: 0 60px;

    .containerMobile {
      margin-top: 0;
      min-width: 60%;
      height: 400px;
      margin-left: 20px;
      margin-right: 20px;

      h2 {
        font-size: 3rem;
      }

      p {
        font-size: 1.2rem;
        font-weight: bold;
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
      margin-left: 20px;
      margin-right: 20px;

      figure {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 340px;
        img {
          width: 310px;
          height: 292px;
        }

        figcaption {
          font-size: 1.4rem;
        }
      }
    }
  }
`;
