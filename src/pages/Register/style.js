import styled from "styled-components";

export const PageRegister = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;

  section {
    @media (min-width: 768px) {
      form {
        div {
          label {
            color: #003347;
            font-size: 1rem;
          }
          section {
            button {
              width: auto;
            }
          }
        }
      }
    }

    @media (min-width: 1024px) {
      width: 45%;
    }

    form {
      div {
        label {
          color: #003347;
          font-size: 1rem;
        }
        section {
          width: 88.335%;

          @media (max-width: 425px) {
            width: 89.435%;
          }
          button {
            width: auto;
          }
        }
      }
      section {
        width: 85%;
        button {
          width: 100%;
        }

        @media (min-width: 1024px) {
          width: 85%;
        }

        @media (min-width: 1440px) {
          width: 85%;
        }
      }
    }
  }

  > section:nth-child(2) {
    flex: 1;
  }
`;

export const ContainerImg = styled.div`
  min-height: 100vh;

  background-color: var(--bg-color-register-1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    width: 490px;

    @media (max-width: 1024px) {
      width: 390px;
    }
  }

  @media (max-width: 1000px) {
    > img {
      width: 400px;
    }
  }
  @media (max-width: 850px) {
    display: none;
  }
`;
