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
  height: 50px;

  &:hover {
    background-color: ${({ available }) =>
      available ? "#f17e7ec4" : "#00800059"};
    color: #fff;
    font-weight: 700;
    transform: scale(1.02);

    h2 {
      font-weight: 600;
    }
  }
  h2 {
    transition: 0.5s;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
  }
  .Supplier {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 10px;
  }
  .Client {
    display: flex;
    width: 70px;
    justify-content: space-between;
    align-items: center;
    font-size: 10px;
  }

  @media screen and (min-width: 768px) {
    h2 {
      font-size: 14px;
    }

    .Supplier {
      width: 250px;
      justify-content: space-between;
      flex-direction: row;
      font-size: 12px;
    }

    .Client {
      font-size: 12px;
      width: 100px;
    }
  }
`;
