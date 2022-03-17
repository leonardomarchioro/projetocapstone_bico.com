import styled from "styled-components";

export const Container = styled.div`
  width: 27px;
  height: 1rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  transform-origin: 1px;

  cursor: pointer;

  div {
    width: 27px;
    position: ${({ open }) => open && "fixed"};
    height: 0.25rem;
    background-color: #12465a;
    border-radius: 10px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open && "rotate(45deg)"};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open && "translateX(100%)"};
      opacity: ${({ open }) => open && "0"};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open && "rotate(-45deg)"};
    }
  }
`;
