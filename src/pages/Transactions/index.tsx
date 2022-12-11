import { useEffect, useState } from "react";
import { FormSearch } from "../../components/FormSearch";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TableTransaction } from "../../components/TableTransaction";

export function Transactions(){
    return(
        <div>
            <Header/>
            <Summary/>
            <FormSearch/>
            <TableTransaction/>
        </div>
    )
}