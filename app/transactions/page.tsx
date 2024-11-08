import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { Transactioncolumns } from "./_columns";
import UpsertTransactionButton from "../_components/add-transaction-button";
import Navbar from "../_components/navbar";


const TransactionsPage = async () => {
    const transactions = await db.transaction.findMany({})

    return (
        <>
            <Navbar />
            <div className="space-y-6 overflow-hidden p-6">
                <div className="p-6 space-y-6">
                    <div className="flex w-full justify-between items-center">
                        <h1 font-bold text-2xl>Transações</h1>
                        <UpsertTransactionButton />
                    </div>
                    <DataTable columns={Transactioncolumns} data={transactions} />
                </div>
            </div>
        </>
    );
}

export default TransactionsPage;