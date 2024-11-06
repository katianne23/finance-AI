import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { Transactioncolumns } from "./_columns";


const TransactionsPage = async () => {
    const transactions = await db.transaction.findMany({})

    return (
        <div className="p-6 space-y-6">
            <div className="flex w-full justify-between items-center">
                <h1 font-bold text-2xl>Transações</h1>
                <Button className="rounded-full">
                    Adicionar Transações
                    <ArrowDownUpIcon />
                </Button>
            </div>
            <DataTable columns={Transactioncolumns} data={transactions} />
        </div>
    );
}

export default TransactionsPage;