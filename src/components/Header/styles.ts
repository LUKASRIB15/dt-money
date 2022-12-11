import styled from "styled-components";

export const LayoutHeader = styled.header`
    background-color: ${props=>props.theme["gray1"]};
    height: 13.25rem;
    display: flex;
    justify-content: center;
    padding: 2.5rem 10.013rem 7.625rem 10rem;
`

export const ContentHeader = styled.div`
    width: 100%;
    max-width: 1120px; //Se o dispositivo tiver menos de 1120px ele mantém 100% da div.
    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
        padding: 0.75rem 1.25rem;
        border: none;
        font-weight: bold;
        border-radius: 6px;
        background-color: ${props=>props.theme["green"]};
        color: ${props=>props.theme["white"]};
        cursor: pointer;

        transition: background-color 0.2s;

        &:hover{
            background-color: ${props=>props.theme["green-light"]};
        }
    }

`