"use client";
import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import TransactionTypeBadge from "./_components/type-badge";
import { Button } from "@/app/_components/ui/button";
import { PencilIcon, TrashIcon } from "lucide-react";

export const TransactionCategory_Label = {
    EDUCATION: "Educação",
    ENTERTAINMENT: "Entretenimento",
    FOOD: "Alimentação",
    HEALTH: "Sáude",
    HOUSING: "Moradia",
    OTHER: "Outros",
    SALARY: "Salário",
    TRANSPORTATION: "Transporte",
    UTILITY: "Utilidades"
};

export const Transaction_Payment_Method_Labels = {
    BANK_TRANSFER: "Transferência Bancária",
    BANK_SLIP: "Boleto Bancário",
    CASH: "Dinheiro",
    CREDIT_CARD: "Cartão de Crédito",
    DEBIT_CARD: "Cartão de Débito",
    OTHER: "Outros",
    PIX: "Pix"
}

export const Transactioncolumns: ColumnDef<Transaction>[] = [
    {
        accessorKey: "name",
        header: "Nome",
    },
    {
        accessorKey: "type",
        header: "Tipo",
        cell: ({ row: { original: transaction } }) => <TransactionTypeBadge transaction={transaction} />

    },
    {
        accessorKey: "category",
        header: "Categoria",
        cell: ({ row: { original: transaction } }) =>
            TransactionCategory_Label[transaction.category]
    },
    {
        accessorKey: "paymentMethod",
        header: "Método de Pagamento",
        cell: ({ row: { original: transaction } }) =>
            Transaction_Payment_Method_Labels[transaction.paymentMethod]
    },
    {
        accessorKey: "date",
        header: "Data",
        cell: ({ row: { original: transaction } }) =>
            new Date(transaction.date).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
            }),
    },
    {
        accessorKey: "amount",
        header: "Valor",
        cell: ({ row: { original: transaction } }) =>
            new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
            }).format(Number(transaction.amount)),
    },
    {
        accessorKey: "actions",
        header: "Ações",
        cell: () => {
            return (
                <div className="space-x-1">
                    <Button variant="ghost" size="icon" className="text-muted-foreground">
                        <PencilIcon />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-muted-foreground">
                        <TrashIcon />
                    </Button>
                </div>
            );
        },
    },

]