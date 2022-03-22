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

        &::placeholder {
          color: var(--color-scrollbar);
        }
      }
    }

    .errorMessage {
      height: 16px;
      font-size: 12px;
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
      color: #ff0033;
    }
  }

  .buttonDesktop {
    display: none;
  }

  .buttonMobile {
  }
`;
