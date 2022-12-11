import { LayoutSearchTransaction, InputForm, ButtonForm } from "./styles";
import {MagnifyingGlass} from "phosphor-react"
import {useForm} from "react-hook-form"
import  * as z from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import { TransactionContext } from "../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

export function FormSearch(){
    const fetchTransactions = useContextSelector(TransactionContext, (context)=>{
        return context.fetchTransactions
    })

    const searchFormSchema = z.object({
        query: z.string(),
    })
    type SearchFormInputs = z.infer<typeof searchFormSchema>
    const {
        register, 
        handleSubmit,
        formState: {isSubmitting},
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema), 
    })
    async function handleSearchTransactions(data:SearchFormInputs){
        //Espera 1 segundo para realizar o resolve
        /*await new Promise(resolve => setTimeout(resolve, 1000))
        console.log(data)*/
        await fetchTransactions(data.query)
    }

    return(
        <LayoutSearchTransaction>
            <form onSubmit={handleSubmit(handleSearchTransactions)}>
                <InputForm 
                    type="text" 
                    placeholder="Busque uma transação"
                    {...register('query')}
                />
                <ButtonForm type="submit" disabled={isSubmitting}>
                    <MagnifyingGlass size={20}/>
                    Buscar
                </ButtonForm>
            </form>
        </LayoutSearchTransaction>
    )
}