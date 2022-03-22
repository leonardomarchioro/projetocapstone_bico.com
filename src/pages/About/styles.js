import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #12465a;
  background-image: linear-gradient(#d5e3f8, var(--color-primary-2));

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 30px;

    > div > section > button {
      display: flex;
      background-color: transparent;
      color: #12465a;
      transition: 0.5s;
      border-radius: 50%;
      padding: 5px;

      &:hover {
        color: #fff;
        background-color: #12465a;
        border-radius: 50%;
      }
    }
  }

  .containerLogo {
    width: 100%;
    display: flex;
    align-items: flex-start;
  }

  @media only screen and (min-width: 768px) {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 50%,
      rgba(213, 227, 248, 1) 100%
    );

    .containerLogo {
      h1 {
        font-size: 2rem;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  align-items: flex-start;

  .containerMobile {
    max-width: 320px;

    h3 {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 50px;
    }
    p {
      line-height: 25px;
      font-weight: 500;
    }
  }

  .containerDesktop {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    .containerMobile {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
    }

    .containerDesktop {
      display: flex;
      flex-direction: column;
      margin: 0 auto;

      figure {
        img {
          width: 400px;
          margin-bottom: 100px;
        }
      }
    }
  }
`;
