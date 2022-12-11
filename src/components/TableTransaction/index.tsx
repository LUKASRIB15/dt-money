import { useContext } from "react";
import { useContextSelector } from "use-context-selector";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { dateFormatter } from "../../utils/formatter";
import { LayoutTable, Price, TransactionsContainer } from "./styles";

export function TableTransaction(){
    const transactions = useContextSelector(TransactionContext, (context)=>{
        return context.transactions
    })

    const formatValue = useContextSelector(TransactionContext, (context)=>{
        return context.FormatValue
    })
    return(
        <TransactionsContainer>
            <LayoutTable>
                <tbody>
                    {transactions.map(transaction=>{
                        return(
                            <tr key={transaction.id}>
                                <td>{transaction.description}</td>
                                <td>{
                                    transaction.type=="input"?
                                    <Price variant={transaction.type}>R$ {formatValue(transaction.price)}</Price>
                                    :
                                    <Price variant={transaction.type}>- R$ {formatValue(transaction.price)}</Price>
                                }</td>
                                <td>{transaction.category}</td>
                                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </LayoutTable>
        </TransactionsContainer>
    )
}