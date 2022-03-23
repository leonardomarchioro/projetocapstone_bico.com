import styled from "styled-components";

export const Container = styled.main`
  background: linear-gradient(
    90deg,
    rgba(120, 188, 237, 1) 0%,
    rgba(213, 227, 248, 1) 50%
  );

  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #12465a;
  overflow: none;

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
  align-items: center;
  width: 100%;

  .containerMobile {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }

  h2 {
    width: 100%;
    text-align: center;
    margin-bottom: 40px;
    text-transform: uppercase;
  }

  .principaisContatos ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      margin-bottom: 20px;
      max-width: 320px;
      width: 300px;

      h3 {
        text-transform: uppercase;
        margin-bottom: 5px;
        display: flex;
        justify-content: space-between;

        span {
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
      }
    }
  }

  .containerDesktop {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    .containerMobile {
      min-width: 60%;
    }
    .containerDesktop {
      display: block;
      min-width: 40%;
      figure {
        img {
          width: 350px;
        }
      }
    }
  }
`;
