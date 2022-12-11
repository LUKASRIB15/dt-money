import styled from "styled-components";

export const TransactionsContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 1.5rem auto 0;
    padding: 0 2.3rem;

`
export const LayoutTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;

    td{
        padding: 1.25rem 2rem;
        background-color: ${props=>props.theme["gray3"]};

        &:nth-child(1){
            width: 45%;
            border-bottom-left-radius: 6px;
            border-top-left-radius: 6px;
        }

        &:nth-child(4){
            border-bottom-right-radius: 6px;
            border-top-right-radius: 6px;
            text-align: center;
        }
    }
`

interface PriceProps{
    variant?: "input" | "output";
}

export const Price = styled.span<PriceProps>`
    color: ${props=>props.variant == "input" ? props.theme["green"] : props.theme["red"]};
`