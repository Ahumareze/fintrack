export const dummyData : DummyDataType = {
    summary: {
        totalBalance: 12345,
        totalCredits: 7890,
        totalDebits: 4455,
        transactionCount: 150,
        balanceChange: 5,
        creditsChange: 3,
        debitsChange: -2,
        transactionChange: 10,
    },
    transactions: [
        {
            date: '2023-10-01',
            remark: 'Salary',
            amount: 3000,
            currency: 'USD',
            type: 'Credit',
            id: '001'
        },
        {
            date: '2023-10-02',
            remark: 'Groceries',
            amount: 150,
            currency: 'USD',
            type: 'Debit',
            id: '002'
        },
        {
            date: '2023-10-03',
            remark: 'Gym Membership',
            amount: 50,
            currency: 'USD',
            type: 'Debit',
            id: '003'
        },
        {
            date: '2023-10-04',
            remark: 'Dinner',
            amount: 40,
            currency: 'USD',
            type: 'Debit',
            id: '004'
        },
        {
            date: '2023-10-05',
            remark: 'Movie Tickets',
            amount: 30,
            currency: 'USD',
            type: 'Debit',
            id: '005'
        },
        {
            date: '2023-10-06',
            remark: 'Rent',
            amount: 1200,
            currency: 'USD',
            type: 'Debit',
            id: '006'
        },
        {
            date: '2023-10-07',
            remark: 'Utilities',
            amount: 100,
            currency: 'USD',
            type: 'Debit',
            id: '007'
        },
        {
            date: '2023-10-08',
            remark: 'Car Payment',
            amount: 400,
            currency: 'USD',
            type: 'Debit',
            id: '008'
        },
        {
            date: '2023-10-09',
            remark: 'Insurance',
            amount: 200,
            currency: 'USD',
            type: 'Debit',
            id: '009'
        }
    ]
}