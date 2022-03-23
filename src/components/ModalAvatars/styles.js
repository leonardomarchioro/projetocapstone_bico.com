import styled from "styled-components";

export const Wrapper = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: fixed;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  align-items: center;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Content = styled.div`
  /* background-color: #badbf36b; */
  background-color: rgba(255, 255, 255, 0.5);
  margin: 0 auto;
  width: 295px;
  height: 415px;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0px 0px 20px 6px rgb(9 9 9 / 30%);
  > button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 92%;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    transition: 0.5s;
    background-color: transparent;
    font-weight: bold;
    font-size: 16px;
    &:hover {
      background-color: #ff0033;
      color: white;
    }
  }
  ul {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 5px;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 3px;
      margin-bottom: 3px;
      cursor: pointer;
      transition: 0.4s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
