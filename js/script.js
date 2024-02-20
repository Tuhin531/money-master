document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeSalary = document.getElementById('income-input');
    const newIncomeSalaryString = incomeSalary.value;
    const newIncomeSalary = parseFloat(newIncomeSalaryString);
    incomeSalary.value = '';
    // console.log(newIncomeSalary);

    // total food expenses
    const foodExpenses = document.getElementById('food-expenses');
    const foodExpensesString = foodExpenses.value;
    const newFoodExpenses = parseFloat(foodExpensesString);
    foodExpenses.value = '';
    // console.log(newFoodExpenses);

    // total Rent expenses
    const rentExpenses = document.getElementById('rent-expenses');
    const rentExpensesString = rentExpenses.value;
    const newRentExpenses = parseFloat(rentExpensesString);
    rentExpenses.value = '';
    // console.log(newRentExpenses);

    // total clothes expenses
    const clothesExpenses = document.getElementById('clothes-expenses');
    const clothesExpensesString = clothesExpenses.value;
    const newClothesExpenses = parseFloat(clothesExpensesString);
    clothesExpenses.value = '';
    // console.log(newClothesExpenses);

    const totalExpenses = newFoodExpenses + newRentExpenses + newClothesExpenses;

    // console.log(totalExpenses);
    // total Expenses count 
    const totalExpensesOutput = document.getElementById('total-expense');
    const totalExpensesOutputString = totalExpensesOutput.innerText;
    const newTotalExpensesOutput = parseFloat(totalExpensesOutputString);

    totalExpensesOutput.innerText = totalExpenses;



})
