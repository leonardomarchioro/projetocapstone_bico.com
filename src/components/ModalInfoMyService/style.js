import styled from "styled-components";

export const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
`;

export const Modal = styled.section`
  background: linear-gradient(180deg, #a8d5f4 0%, rgb(255 255 255 / 68%) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 60px 18px;
  min-width: 350px;
  height: 400px;
  border-radius: 4px;


  .button-close{
    position: relative;
    left: 147px;
    bottom: 201px;
  }

  .icon{
background-color: #a8d5f4;
color: red;
width: 100%;
height: 100%;
  }

  .button-modal{
    background-color:${(props) => props.backgroundColor ? props.backgroundColor : "green"};
    width: 100px;
    height: 30px;
    color: white;
    font-weight: 00;
  }
`;


export const Div = styled.div`
width: 70%;
display: flex;
flex-direction: row;
justify-content: space-between;
`
