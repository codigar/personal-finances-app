const incomeExpense = document.querySelector('#income-expense');
const income = document.querySelector('#income');
const expense = document.querySelector('#expense');
const incomeForm = document.querySelector('#income-form');
const btnCancel = document.querySelector('#btn-cancel');

income.addEventListener('click', () => {
    incomeExpense.style.justifyContent = 'center';
    expense.style.display = 'none';
    incomeForm.style.display = 'flex';
});

btnCancel.addEventListener('click', () => {
    incomeExpense.style.justifyContent = 'space-between';
    expense.style.display = 'flex';
    incomeForm.style.display = 'none';
});