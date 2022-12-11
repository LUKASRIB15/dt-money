import { LayoutContainer, LayoutSection } from "./styles";
import {ArrowCircleUp, ArrowCircleDown, CurrencyDollar} from 'phosphor-react'
import { TransactionContext } from "../../contexts/TransactionsContext";
import { useSummary } from "../../hooks/useSummary";
import { useContextSelector } from "use-context-selector";
export function Summary(){
    const formatValue = useContextSelector(TransactionContext,(context)=>{
        return context.FormatValue
    })
    const summary = useSummary()
    return(
        <LayoutSection>
            <LayoutContainer backgroundContainer="gray">
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp color="#00B37E" size={32}/>
                </header>
                <strong>R$ {formatValue(summary.input)}</strong>
            </LayoutContainer>
            <LayoutContainer backgroundContainer="gray">
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown color="#F75A68" size={32}/>
                </header>
                <strong>R$ {formatValue(summary.output)}</strong>
            </LayoutContainer>
            <LayoutContainer backgroundContainer="greenDark">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32}/>
                </header>
                <strong>R$ {formatValue(summary.total)}</strong>
            </LayoutContainer>
        </LayoutSection>
    )
}