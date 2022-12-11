import { ReactNode, useEffect, useState, useCallback } from "react";
import { api } from "../lib/axios";
//Ajudar na performance da aplicação
import {createContext} from "use-context-selector"

interface Transaction{
    category: string;
    createdAt : string;
    description: string;
    id: number;
    price: number;
    type: "input" | "output";
}

interface TransactionContextType{
    transactions: Transaction[]; 
    FormatValue: (value: number)=>string;
    //função assíncrona
    fetchTransactions: (query?: string)=> Promise<void>;
    createTransaction: (data:createTransactionProps)=> Promise<void>;
}

export const TransactionContext = createContext({} as TransactionContextType)

interface TransactionProviderProps{
    children: ReactNode;
}

interface createTransactionProps{
    description: string;
    price: number;
    category: string;
    type: "input" | "output";
}

export function TransactionProvider({children}: TransactionProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([])
    //Acessando a API por meio de uma função assíncrona
    async function fetchTransactions(query?:string){
       //Usando o Axios
       const response = await api.get("/transactions", {
        params: {
            //Ordenando a lista
            _sort: "createdAt",
            _order: 'desc',
            q: query,
        }
       })

        setTransactions(response.data)
    }
    //useCallback tem um array de dependencia igual ao useEffect. Se não
    //houver nenhum valor de dependência, ela irá renderizar somente uma vez 
    const createTransaction = useCallback(async (data: createTransactionProps)=>{
        const {description, price, category, type} = data
        const response = await api.post("/transactions", {
            description,
            price,
            category,
            type,
            createdAt: new Date()
        })
        setTransactions(state=>{
            return [response.data, ...state]
        })
    },[])

    //Usando o useEffect com array empty faço com que esse fetch execute apenas uma
    //vez em minha aplicação
    useEffect(()=>{
        fetchTransactions()
    }, [])

    function FormatValue(value: number){
        const valueToString = value.toLocaleString('pt-BR', {minimumFractionDigits: 2});
        return valueToString
    }

    return(
        <TransactionContext.Provider value={{
            transactions,
            FormatValue,
            fetchTransactions,
            createTransaction,
        }}>
            {children}
        </TransactionContext.Provider>
    )
}