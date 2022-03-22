
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
    transition: 0.5s;
    

    &:hover {
      /* background-color: red; */
      background-color: ${(props) => props.backgroundColor ? props.backgroundColor : "green"};
      color: white;
      font-weight: 700;
    }
    h2 {
      font-weight: 400;
      font-size: 14px;
    }
  
`

export const Div = styled.div`


`


