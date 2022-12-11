import styled from "styled-components"
import * as Dialog from "@radix-ui/react-dialog"
import * as RadioGroup from "@radix-ui/react-radio-group"

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0; // Mesma coisa que fazer top:0, bottom:0, left:0, right:0
    background: rgba(0,0,0,0.75);
`
export const Content = styled(Dialog.Content)`
    min-width: 32rem;
    border-radius: 6px;
    padding: 2.5rem 3rem;
    background-color:${props=>props.theme["gray2"]};

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    form{
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`

export const InputFormModal = styled.input`
    padding: 1rem;
    background: ${props=>props.theme["gray1"]};
    border: none;
    border-radius: 6px;
    color: ${props=>props.theme["gray7"]};
`

export const ButtonFormModal = styled.button`
    padding: 1rem 2rem;
    background-color:${props=>props.theme["green"]};
    color: ${props=>props.theme["white"]};
    font-weight: bold;
    border: none;
    border-radius: 6px;
    margin-top: 1.5rem;
    cursor: pointer;

    transition: background-color 0.2s;

    &:disabled{
        opacity: 0.7;
        cursor: not-allowed;
    }
    &:not(:disabled):hover{
        background-color: ${props=>props.theme["green-light"]};
    }
`

export const Close = styled(Dialog.Close)`
    margin: -1rem -1.5rem;
    float: right;
`

export const Title = styled(Dialog.Title)`
    font-weight: bold;
    font-size: 1.5rem;
`

export const TransactionType = styled(RadioGroup.Root)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 0.5rem;
`
interface TransactionTypeButtonProps{
    variant: "input" | "output";
}
export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
    background-color: ${props=>props.theme["gray3"]};
    color: ${props=>props.theme["gray6"]};
    padding: 1rem 1.5rem;
    border-radius: 6px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: background-color 0.2s;

    svg{
        color: ${
            props=>props.variant == "input" ?
            props.theme["green"]
            :
            props.theme["red"]
        }
    }
    &[data-state='unchecked']:hover{
        background-color: ${props=>props.theme["gray4"]};
    }

    &[data-state='checked']{
        background-color: ${
            props=>props.variant == "input"?
            props.theme["green-dark"]
            :
            props.theme["red-dark"]
        };
        color: ${props=>props.theme["white"]};
        svg{
            color: ${props=>props.theme["white"]};
        }
    }
`