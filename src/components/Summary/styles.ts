import styled from "styled-components";

export const LayoutSection = styled.section`
    display: flex;
    /*display: grid;
    grid-template-columns: repeat(3, 1fr);
    */ 
    //Outra forma de criar as três colunas 
    gap: 2rem;
    justify-content: center;
    align-items: center;
    margin-top: -5.5rem;
    padding-left: 10rem;
    padding-right: 10rem;
`
export const BaseContainer = styled.div`
   padding: 1.5rem 1.5rem 1.5rem 2rem;
   border-radius: 6px;
   flex: 1;

   header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
   }

   strong{
    font-size: 2rem;
   }
`

const BACKGROUND_DIV = {
    gray: "gray4",
    greenDark: "green-dark", 
} as const

interface LayoutContainerProps{
    backgroundContainer: keyof typeof BACKGROUND_DIV;
}

export const LayoutContainer = styled(BaseContainer)<LayoutContainerProps>`
    background-color: ${props=>props.theme[BACKGROUND_DIV[props.backgroundContainer]]};
`