import styled from "styled-components";

export const Container = styled.div`
  min-width: 300px;
  height: 536px;
  background-color: #dfeefa;
  width: 90%;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
  display: ${({ showService }) => showService && "none"};

  h1 {
    font-size: 0.8rem;
    height: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #9ccbf6;
    color: #1e637d;
    border-radius: 5px 5px 0 0;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    background-color: #dfeefa;
    align-items: center;
    border-radius: 0 0 5px 5px;
    .inputArea {
      margin-top: 30px;
      width: 95%;
    }

    .textArea {
      margin: 0 auto;
      width: 80%;

      textarea {
        width: 100%;
        background-color: #b9d9f0;
        border: ${({ error }) => (error ? "1px solid #ff0033" : "transparent")};
        border-radius: 3px;
        text-indent: 10px;
        color: var(--title-1);
        padding: 10px 5px;
        resize: none;
        margin-top: 5px;

        &::placeholder {
          color: var(--color-scrollbar);
        }
      }
    }

    .errorMessage {
      height: 16px;
      font-size: 12px;
      display: flex;
      justify-content: flex-start;
      margin-bottom: 10px;
      color: #ff0033;
    }
  }

  .buttonDesktop {
    display: none;
    transition: 0.5s;
    &:hover {
      filter: drop-shadow(2px 2px 2px grey);
    }
  }

  .buttonMobile {
    transition: 0.5s;
    &:hover {
      filter: drop-shadow(2px 2px 2px grey);
    }
  }

  @media screen and (min-width: 1024px) {
    min-width: 500px;
    height: 321px;
    width: 100%;
    display: block;
    form {
      padding: 0 10px;

      .inputArea {
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        > div {
        }
      }
      .textArea {
        width: 60%;
        > textarea {
          height: 160px;
          width: 95%;
        }
      }

      > section {
        :last-child {
          display: none;
        }
      }
      flex-direction: row;
      .buttonDesktop {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
      }
    }
  }

  @media screen and (min-width: 1316px) {
    min-width: 700px;
  }
`;
