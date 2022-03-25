import styled from "styled-components";

export const Btn = styled.button`
  height: 39px;
  width: 100%;
  background-color: var(--color-primary-3);
  color: white;
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0px 3px 3px 0px rgb(0 0 0 / 25%);
`;

export const Sec = styled.section`
  width: 85%;
  margin-bottom: 40px;
  > span {
    position: absolute;
    opacity: 0;
    display: block;
    text-align: center;
    transition: 0.4s;
    transform: translate(0, 40px);
    font-size: 14px;
    color: #3b87b0;
  }
  :hover > span {
    opacity: 1;
  }
`;
