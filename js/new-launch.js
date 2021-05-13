const incomeExpense = document.querySelector('#income-expense');
const form = document.querySelector('#form');
const income = document.querySelector('#income');
const expense = document.querySelector('#expense');
const launchForm = document.querySelector('#launch-form');
const launchType = document.querySelector('#launchtype');
const btnLaunchForm = document.querySelector('#btn-launch-form');
const btnCancel = document.querySelector('#btn-cancel');
let launches = JSON.parse(localStorage.getItem('launches')) || [];
let launchId = Number(localStorage.getItem('id')) || 1;

income.addEventListener('click', () => {
    expense.style.display = 'none';
    incomeExpense.style.justifyContent = 'center';
    launchForm.style.display = 'flex';
    launchType.setAttribute('value', 'income');
});

expense.addEventListener('click', () => {
    income.style.display = 'none';
    incomeExpense.style.justifyContent = 'center';
    launchForm.style.display = 'flex';
    launchType.setAttribute('value', 'expense');
    btnLaunchForm.style.backgroundColor = 'red';
});

btnCancel.addEventListener('click', () => {
    income.style.display = 'flex';
    expense.style.display = 'flex';
    incomeExpense.style.justifyContent = 'space-between';
    launchForm.style.display = 'none';
    btnLaunchForm.style.backgroundColor = '#0059ff';
});

const sendLaunchObject = launchObject => {
    launches.push(launchObject);
    localStorage.setItem('launches', JSON.stringify(launches));
    localStorage.setItem('id', launchId);
    location = '/new-launch';
}

const createLaunchObject = (launchType, description, amount) => {
    const launchObject = Object.create(null);
    launchObject.id = launchId;
    launchId++; // increase id value
    launchObject.launchType = launchType;
    launchObject.description = description;
    launchObject.amount = amount;

    sendLaunchObject(launchObject);
}

form.addEventListener('submit', e => {
    e.preventDefault();

    const launchType = e.target.launchtype.value;
    const description = e.target.description.value;
    const amount = Number(e.target.amount.value);

    createLaunchObject(launchType, description, amount);
});

console.log(launches);