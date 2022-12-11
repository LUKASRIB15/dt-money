import { TransactionContext } from "../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

export function useSummary(){
    const transactions = useContextSelector(TransactionContext, (context)=>{
        return context.transactions
    })

    //Reduce recebe um acumulador e um objeto da lista como argumentos respectivamente
    const summary = transactions.reduce(
        (acc, transaction)=>{
            if(transaction.type == "input"){
                acc.input += transaction.price
                acc.total += transaction.price
            }else{
                acc.output += transaction.price
                acc.total -= transaction.price
            } 
            return acc
        }, 
        {
            input:0, 
            output:0, 
            total:0
        })

        return summary
}