import styled from "styled-components";

export const Li = styled.li`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: var(--primary-tittle);
  background-color: #d3e9f8;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  transition: 0.8s;

  &:hover {
    /* background-color: red; */
    background-color: ${({ available }) => (available ? "red" : "green")};
    color: white;
    font-weight: 700;
  }
  h2 {
    font-weight: 400;
    font-size: 14px;
  }
  .supplier {
    width: 245px;
    display: flex;
    justify-content: space-between;
  }
  .Client {
    width: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export const Div = styled.div``;
