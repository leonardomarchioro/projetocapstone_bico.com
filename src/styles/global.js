import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        
    }

    body{
        font-size: 1rem;
        font-family: 'Montserrat', sans-serif;
        height: 100vh;
        width: 100vw;
    }

    button, input{
        font-family: 'Montserrat', sans-serif;
    }

    #root{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
   

    :root{
        --color-primary: #BADBF3;
        --color-primary-2: #78BCED;
        --color-primary-3: #3492D4;
        --color-primary-4: #A5D7FB;
        --color-scrollbar: #868E96;

        --primary-tittle: #003347;
        --secondary-tittle: #1E637D;
        
        --bg-color-register-1: #B9D9F0;
        --bg-color-register-2: #D5E3F8;

        --form-register: #DFEEFA;

        /*Página de contato e sobre iguais */
        --bg-color-contact-1: #D6E4F8;
        --bg-color-contact-2: #FCFCFC;

        --bg-input: #A1D2F5

        --color-sucess: #67DD81;
        --color-negative: #E83F5B;

        --title-1: 1rem;
        --title-2: calc(var(--title-1) - 0.25);
        --title-3: calc(var(--title-2) - 0.25);
    }

    .Toastify__toast-theme--light {
        background-color: var(--bg-color-register-2);
    }

    button{
        cursor: pointer;
        border: none;
        border-radius: 4px;

    }

    a{
        text-decoration: none;
    }

    // Está bugado resolver depois;

    /* * {
        scrollbar-width: thin;
        scrollbar-color: var(--color-scrollbar) var(--color-scrollbar);
    }

    /* Works on Chrome, Edge, and Safari */

    /* *::-webkit-scrollbar {
        width: 12px;
    }

    *::-webkit-scrollbar-track {
        background-color: var(--color-scrollbar);
    }

    *::-webkit-scrollbar-thumb {
        background-color: var(--color-scrollbar);
        opacity: 0.7;
        border-radius: 20px;
        border: 1px solid var(--color-scrollbar);
    } */

`;
export const colorPrimary = "#BADBF3";
export const colorPrimary2 = "#78BCED";
export const colorPrimary3 = "#3492D4";
export const colorPrimary4 = "#A5D7FB";

export const primaryTittle = "#003347";
export const secondaryTittle = "#1E637D";

export const bgColorRegister1 = "#B9D9F0";
export const bgColorRegister2 = "#D5E3F8";

export const formRegister = "#DFEEFA";

export const bgColorContact1 = "#D6E4F8";
export const bgColorContact2 = "#FCFCFC";

export const bgInput = "#A1D2F5";

export const colorSucess = "#67DD81";
export const colorNegative = "#E83F5B";
