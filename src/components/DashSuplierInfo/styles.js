
import styled from "styled-components";



export const ContainerService = styled.div`
display: flex;
flex-direction: column;
align-items: center;

padding-bottom: 10px;
background: linear-gradient(180deg, #A8D5F4,rgba(214, 231, 243, 0));

button{
    background-color: #57DE75;
    width: 96px;
    height: 28px;
    font-weight: 500;
    font-size: 12px;
    padding: 5px 5px;
}
`



export const Container = styled.div`
background: linear-gradient(180deg, #A8D5F4,rgba(214, 231, 243, 0));
display: flex;
flex-direction: column;
justify-content: flex-start;
padding: 15px 15px 0px 15px;
max-width: 417px;
min-height: 138px;

h3{
    font-size: 16px ;
    font-weight: 500;
    padding-bottom: 2px;
}

`

export const Div = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
min-width: 320px;
`
