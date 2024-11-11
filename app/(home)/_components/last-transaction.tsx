import { Button } from "@/app/_components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { Transaction_Payment_Method_Icons } from "@/app/_constants/transactions";
import { formatCurrency } from "@/app/_utils/currency";
import { Transaction, TransactionType } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface LastTransactionProps {
    lastTransaction: Transaction[];
}

const LastTransaction = ({ lastTransaction }: LastTransactionProps) => {
    const getAmountColor = (transaction: Transaction) => {
        if (transaction.type === TransactionType.EXPENSE) {
            return "text-red-500";
        }
        if (transaction.type === TransactionType.DEPOSIT) {
            return "text-primary";
        }
        return "text-white";
    };

    const getAmountPrefix = (transaction: Transaction) => {
        if (transaction.type === TransactionType.DEPOSIT) {
            return "+"
        }

        return "-"
    };

    return (
        <ScrollArea className="rounded-md border">
            <CardHeader className="flex-row items-center justify-between">
                <CardTitle className="font-bold">Últimas Transações</CardTitle>
                <Button variant="outline" className="rounded-full font-bold">
                    <Link href="/transactions">Ver mais</Link>
                </Button>
            </CardHeader>
            <CardContent className="space-y-6">
                {lastTransaction.map((transaction) => (
                    <div className="flex justify-between items-center" key={transaction.category}>
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-opacity-[3%] bg-white rounded-lg">
                                <Image
                                    src={Transaction_Payment_Method_Icons[transaction.paymentMethod]}
                                    alt="pix"
                                    height={20}
                                    width={20}
                                />
                            </div>
                            <div>
                                <p className="text-sm font-bold">{transaction.name}</p>
                                <p className="text-sm text-muted-foreground">
                                    {new Date(transaction.date).toLocaleDateString("pt-BR", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                    })}
                                </p>
                            </div>
                        </div>
                        <p className={`text-sm font-bold ${getAmountColor(transaction)}`}>
                            {getAmountPrefix(transaction)}
                            {formatCurrency(Number(transaction.amount))}
                        </p>
                    </div>
                ))}
            </CardContent>
        </ScrollArea>
    );
}

export default LastTransaction;