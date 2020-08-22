
export function deductMoneyFromAllExpenses(expenses, money, dispatch) {
  console.log(expenses);

  const actualMoney = expenses.reduce((accu, current) => accu + current);
  console.log(actualMoney);
}