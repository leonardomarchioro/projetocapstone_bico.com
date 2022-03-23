import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  display: ${({ profile }) => (profile ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  .buttonDesktopLogout {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    display: ${({ profile }) => (profile ? "flex" : "flex")};
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
    flex-direction: column;
    align-items: flex-start;
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
      text-align: center;
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
      display: flex;
      align-items: center;
    }

    section {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;
