import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  width: 296px;
  height: 50px;
  > div {
    display: flex;
    gap: 10px;
    margin-left: 10px;
  }
  > span {
    margin-right: 10px;
  }
`;
