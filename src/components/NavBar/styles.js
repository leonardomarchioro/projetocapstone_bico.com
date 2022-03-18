import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 100%;
  height: 80px;
  transition: all 0.3s linear;
  font-family: "Josefin Sans", sans-serif;
  background-color: var(--color-primary-4);
  color: #12465a;
  font-weight: 700;
  font-size: 16px;
  align-items: center;
  line-height: 22px;
  letter-spacing: 0.1rem;
  display: ${({ open }) => (open ? "flex" : "none")};

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
      a {
        color: var(--primary-tittle);
      }
    }
  }

  @media screen and (min-width: 1024px) {
    display: ${({ open }) => (open ? "flex" : "flex")};
    background-color: #78bced;
  }
`;

export const ContainerUpLink = styled.div`
  display: flex;
  justify-content: space-around;

  button {
    background-color: var(--color-primary-4);
    font-family: "Josefin Sans", sans-serif;
    font-size: 16px;
    margin-bottom: 10px;
    color: var(--primary-tittle);
  }
`;

export const ContainerDownLink = styled.div`
  display: flex;
  justify-content: space-around;
`;
