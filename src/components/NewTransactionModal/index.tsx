import * as Dialog from "@radix-ui/react-dialog"
import { Overlay, Content, InputFormModal, Close, Title, ButtonFormModal, TransactionType, TransactionTypeButton } from "./styles"
import {ArrowCircleDown, ArrowCircleUp, X} from "phosphor-react"
import {Controller, useForm} from "react-hook-form"
import * as z from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import { TransactionContext } from "../../contexts/TransactionsContext"
import { useContextSelector } from "use-context-selector"

export function NewTransactionModal(){
    const createTransaction = useContextSelector(TransactionContext, (context)=>{
        return context.createTransaction
    })

    const newTransactionFormSchema = z.object({
        description: z.string(),
        price: z.number(),
        category: z.string(),
        type: z.enum(['input', 'output']),
    })
    
    type NewTransactionsInputs = z.infer<typeof newTransactionFormSchema>

    const {
        //Uso quando o input usado não é próprio do HTML
        control,
        reset,
        register, 
        handleSubmit,
        formState: {isSubmitting}
    } = useForm<NewTransactionsInputs>({
        resolver: zodResolver(newTransactionFormSchema),
        defaultValues:{
            type: 'input',
        }
    })
    
    async function handleCreateNewTransaction(data: NewTransactionsInputs){
        //Simular uma leve lentidão
       /*await new Promise(resolve=>setTimeout(resolve,1000))*/

       //Desestruturação dos dados
        const {description, price, category, type} = data
        await createTransaction({
            description,
            price,
            category,
            type,
        })
        reset()
    }
    return(
        <Dialog.Portal>
            <Overlay/>
            <Content>
                <Close asChild>
                    <X size={24}/>
                </Close>
                <Title>Nova transação</Title>
                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <InputFormModal 
                        type="text" 
                        placeholder="Descrição"
                        required
                        {...register('description')}
                    />
                    <InputFormModal 
                        type="number" 
                        placeholder="Preço"
                        required
                        {...register('price', {valueAsNumber: true})}
                    />
                    <InputFormModal 
                        type="text" 
                        placeholder="Categoria"
                        required
                        {...register('category')}
                    />
                    <Controller
                        control={control}
                        name="type"
                        render={({field})=>{
                            return(
                                <TransactionType onValueChange={field.onChange} value={field.value}>
                                    <TransactionTypeButton variant="input" value="input">
                                        <ArrowCircleUp size={24}/>
                                        Entrada
                                    </TransactionTypeButton>
                                    <TransactionTypeButton variant="output" value="output">
                                        <ArrowCircleDown size={24}/>
                                        Saída
                                    </TransactionTypeButton>
                                </TransactionType>
                            )
                        }}
                    />
                    <ButtonFormModal type="submit" disabled={isSubmitting}>Cadastrar</ButtonFormModal>
                </form>
            </Content>
        </Dialog.Portal>
    )
}