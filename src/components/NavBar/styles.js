import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 100%;
  height: 80px;
  transition: all 0.3s linear;
  font-family: "Josefin Sans", sans-serif;
  background-color: var(--color-primary-4);
  color: #12465a;
  font-weight: 700;
  font-size: 12px;
  align-items: center;
  line-height: 22px;
  letter-spacing: 0.1rem;
  display: ${({ open }) => (open ? "flex" : "none")};
  border-radius: 0 0 15px 15px;
  box-shadow: 1px 10px 8px -2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 1px 10px 8px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 10px 8px -2px rgba(0, 0, 0, 0.75);
  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0;
    padding: 0;

    li {
      list-style: none;
      margin-bottom: 10px;
      > div {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex: 1;
      }
      a {
        color: var(--primary-tittle);
      }
    }
  }
  @media screen and (min-width: 620px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1024px) {
    display: ${({ open }) => (open ? "flex" : "flex")};
    box-shadow: ${({ open }) => (open ? "none" : "none")};
  }
`;

export const ContainerUpLink = styled.li`
  display: flex;
  justify-content: space-around;
  flex: 1;

  button {
    background-color: var(--color-primary-4);
    font-family: "Josefin Sans", sans-serif;
    font-size: 12px;
    letter-spacing: 0.1rem;
    color: var(--primary-tittle);
  }
  @media screen and (min-width: 620px) {
    button {
      font-size: 16px;
    }
  }
`;

export const ContainerDownLink = styled.li`
  display: flex;
  justify-content: space-around;
  flex: 1;
`;
