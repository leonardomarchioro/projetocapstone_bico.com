import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background-color: var(--color-primary);
  border-radius: ${({ open }) => open && "0 0 15px 15px"};
  position: relative;

  .cont2 {
    background-color: var(--color-primary-4);
  }

  section {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10px;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;

    .cont2 {
      background-color: var(--color-primary);
    }

    section {
      display: flex;
      width: 100%;
      position: relative;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding: 40px;
    }
  }
`;
