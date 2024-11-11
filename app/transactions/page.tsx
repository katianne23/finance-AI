import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { Transactioncolumns } from "./_columns";
import UpsertTransactionButton from "../_components/add-transaction-button";
import Navbar from "../_components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ScrollArea } from "../_components/ui/scroll-area";


const TransactionsPage = async () => {
    const { userId } = await auth()
    if (!userId) {
        redirect('/login')
    }

    const transactions = await db.transaction.findMany({
        where: {
            userId,
        }
    });

    return (
        <>
            <Navbar />
            <div className="space-y-6 overflow-hidden p-6">
                <div className="p-6 space-y-6">
                    <div className="flex w-full justify-between items-center">
                        <h1 className="font-bold text-2xl">Transações</h1>
                        <UpsertTransactionButton />
                    </div>
                    <ScrollArea>
                        <DataTable columns={Transactioncolumns} data={transactions} />
                    </ScrollArea>
                </div>
            </div>
        </>
    );
}

export default TransactionsPage;