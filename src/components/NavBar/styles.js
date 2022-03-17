import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  height: 60.88px;
  transition: all 0.3s linear;
  color: #12465a;
  font-weight: 700;
  font-size: 13px;
  line-height: 22px;
  letter-spacing: 0.1rem;
  display: ${({ open }) => (open ? "flex" : "none")};

  ul {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin: 0;
    padding: 0;

    li {
      list-style: none;

      a {
        text-decoration: none;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    display: ${({ open }) => (open ? "flex" : "flex")};
  }
`;
