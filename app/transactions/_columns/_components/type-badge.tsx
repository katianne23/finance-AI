import { Transaction, TransactionType } from "@prisma/client";
import { Badge } from "@/app/_components/ui/badge";
import { CircleIcon } from "lucide-react";


interface TransactionTypeBadgeProps {
    transaction: Transaction;
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
    if (transaction.type === TransactionType.DEPOSIT) {
        return (
            <Badge className="bg-muted text-primary hover:bg-muted font-bold">
                <CircleIcon className="fill-primary mr-2" size={10} />
                Depósito
            </Badge>
        );
    }
    if (transaction.type === TransactionType.EXPENSE) {
        return (
            <Badge className="bg-danger bg-opacity-10 text-danger hover:bg-muted font-bold">
                <CircleIcon className="fill-danger mr-2" size={10} />
                Despesas
            </Badge>
        );
    }
    return (
        <Badge className="bg-white bg-opacity-10 text-white hover:bg-muted font-bold">
            <CircleIcon className="fill-white mr-2" size={10} />
            Investimento
        </Badge>
    );
}

export default TransactionTypeBadge;