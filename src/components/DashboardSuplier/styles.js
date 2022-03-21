import styled from "styled-components";

export const Container = styled.div`

display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: flex-start;
padding: 15px 15px 0px 15px;
max-width: 1000px;
min-height: 138px;

h3{
    font-size: 16px ;
    font-weight: 500;
    padding-bottom: 2px;
}
span{
    font-size: 12px;
    font-weight: 500;
    padding-bottom: 2px;
    color: #003347;
}
p{
   
}

`

export const DivPar = styled.p`
    word-wrap: break-word;
    font-size: 12px;
    font-weight: 500;
    color: #003347;
    max-width: 350px;
    max-height: 50px;
    margin-bottom: 15px;
`


export const DivPai = styled.div`
display: flex;
flex-direction: row;

`
