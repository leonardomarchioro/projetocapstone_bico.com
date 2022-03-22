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
  height: 35;

  &:hover {
    background-color: ${({ available }) =>
      available ? "#f17e7ec4" : "#00800059"};
    color: #fff;
    font-weight: 700;

    h2 {
      font-weight: 600;
    }
  }
  h2 {
    font-weight: 400;
    font-size: 14px;
    transition: 0.5s;
  }
  .Supplier {
    width: 235px;
    display: flex;
    justify-content: space-around;
  }
  .Client {
    display: flex;
    width: 95px;
    justify-content: space-between;
  }
`;
