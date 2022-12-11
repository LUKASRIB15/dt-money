import styled from "styled-components";

export const LayoutSearchTransaction = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 0 auto;
    padding: 0 2.3rem;

    form{
        display: flex;
        align-items: center;
        gap: 1rem;
    }
` 

export const InputForm = styled.input`
    width: 100%;
    padding: 1rem;
    background-color: ${props=>props.theme["gray1"]};
    border-radius: 6px;
    border: none;
    color: ${props=>props.theme["gray6"]};
`

export const ButtonForm = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 0.875rem 2rem;
    border-radius: 6px;
    background-color: transparent;
    border: 1px solid ${props=>props.theme["green-light"]};
    color: ${props=>props.theme["green-light"]};
    font-weight: bold;
    
    transition: color 0.2s, background-color 0.2s;

    &:disabled{
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover{
        background-color: ${props=>props.theme["green-light"]};
        color: ${props=>props.theme["white"]};
    }
`