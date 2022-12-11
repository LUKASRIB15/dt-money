import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 1px ${props=>props.theme["green"]};
    }

    body{
        background-color: ${props=>props.theme["gray2"]};
        color: ${props=>props.theme["gray7"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
    }
`