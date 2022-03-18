import styled from "styled-components";

export const Container = styled.main`
  background-image: linear-gradient(#d5e3f8, var(--color-primary-2));

  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: #12465a;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  h2 {
    width: 100%;
    text-align: center;
    margin-bottom: 40px;
    text-transform: uppercase;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      margin-bottom: 20px;
      width: 320px;

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
    }
  }
`;
