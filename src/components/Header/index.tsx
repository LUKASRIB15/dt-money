import Logo from '../../assets/Logo.svg'
import { ContentHeader, LayoutHeader } from './styles'
import * as Dialog from "@radix-ui/react-dialog"
import { NewTransactionModal } from '../NewTransactionModal'

export function Header(){
    return(
        <LayoutHeader>
            <ContentHeader>
                <img src={Logo}/>
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <button>Nova transação</button>
                    </Dialog.Trigger>
                    <NewTransactionModal/>
                </Dialog.Root>
            </ContentHeader>
        </LayoutHeader>
    )
}