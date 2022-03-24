import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  display: ${({ profile: { profile } }) => (profile ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  .buttonDesktopLogout {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    display: ${({ profile: { profile } }) => (profile ? "flex" : "flex")};
    width: 250px;
    height: 680px;
    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    margin-left: 20px;
    .buttonDesktopLogout {
      display: flex;
      background-color: transparent;
      color: #3b87b0;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 310px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 90%;
  margin-bottom: 10px;

  .avatarContainer {
    width: 60%;
    display: flex;
    flex-direction: row;
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
      font-weight: 600;
      text-align: center;
      margin-left: 10px;
    }
  }
  section {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    justify-items: center;
    width: 40%;
    margin-bottom: 10px;

    button {
      border-radius: 50%;
      width: 50px;
      height: 50px;
      display: none;
    }
  }
  .avatar-container {
    cursor: pointer;
    transition: 0.4s;

    &:hover {
      transform: scale(1.1);
    }
  }
  @media screen and (min-width: 1024px) {
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    width: 50%;

    .avatarContainer {
      width: 100%;
      flex-direction: column;
      align-items: center;

      span {
        margin-top: 5px;
        margin-left: 0%;
      }
    }

    section {
      width: 100%;
      display: flex;
      justify-content: center;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.4s;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
    button {
      transition: 0.4s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
