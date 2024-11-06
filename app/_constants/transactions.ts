import { TransactionCategory, TransactionPaymentMethod, TransactionType } from "@prisma/client";

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

export const Transaction_type_option = [
    {
        value: TransactionType.EXPENSE,
        label: "Despesa",
    },
    {
        value: TransactionType.DEPOSIT,
        label: "Receita",
    },
    {
        value: TransactionType.INVESTMENT,
        label: "Investimento",
    }
];

export const Transaction_Payment_Method_Options = [
    {
        value: TransactionPaymentMethod.BANK_TRANSFER,
        label:
            Transaction_Payment_Method_Labels[TransactionPaymentMethod.BANK_TRANSFER],
    },
    {
        value: TransactionPaymentMethod.BANK_SLIP,
        label:
            Transaction_Payment_Method_Labels[TransactionPaymentMethod.BANK_SLIP],
    },
    {
        value: TransactionPaymentMethod.CASH,
        label: Transaction_Payment_Method_Labels[TransactionPaymentMethod.CASH],
    },
    {
        value: TransactionPaymentMethod.CREDIT_CARD,
        label:
            Transaction_Payment_Method_Labels[TransactionPaymentMethod.CREDIT_CARD],
    },
    {
        value: TransactionPaymentMethod.DEBIT_CARD,
        label:
            Transaction_Payment_Method_Labels[TransactionPaymentMethod.DEBIT_CARD],
    },
    {
        value: TransactionPaymentMethod.OTHER,
        label: Transaction_Payment_Method_Labels[TransactionPaymentMethod.OTHER],
    },
    {
        value: TransactionPaymentMethod.PIX,
        label: Transaction_Payment_Method_Labels[TransactionPaymentMethod.PIX],
    },
];

export const Transaction_Category_Option = [
    {
        value: TransactionCategory.EDUCATION,
        label: TransactionCategory_Label[TransactionCategory.EDUCATION],
      },
      {
        value: TransactionCategory.ENTERTAINMENT,
        label: TransactionCategory_Label[TransactionCategory.ENTERTAINMENT],
      },
      {
        value: TransactionCategory.FOOD,
        label: TransactionCategory_Label[TransactionCategory.FOOD],
      },
      {
        value: TransactionCategory.HEALTH,
        label: TransactionCategory_Label[TransactionCategory.HEALTH],
      },
      {
        value: TransactionCategory.HOUSING,
        label: TransactionCategory_Label[TransactionCategory.HOUSING],
      },
      {
        value: TransactionCategory.OTHER,
        label: TransactionCategory_Label[TransactionCategory.OTHER],
      },
      {
        value: TransactionCategory.SALARY,
        label: TransactionCategory_Label[TransactionCategory.SALARY],
      },
      {
        value: TransactionCategory.TRANSPORTATION,
        label: TransactionCategory_Label[TransactionCategory.TRANSPORTATION],
      },
      {
        value: TransactionCategory.UTILITY,
        label: TransactionCategory_Label[TransactionCategory.UTILITY],
      },
];