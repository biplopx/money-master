// get input vale
function getInputValue(inputField) {
  getInput = document.getElementById(inputField);
  getInputAmount = getInput.value;
  getInputNum = parseFloat(getInputAmount);
  return getInputNum;
}
// Calculate button event handeler
document.getElementById("calculate-btn").addEventListener("click", function () {
  //get income
  const income = getInputValue("income-input");

  // get expenses amount
  const food = getInputValue("food-input");
  const rent = getInputValue("rent-input");
  const clothes = getInputValue("clothes-input");

  const totalExpenses = document.getElementById("total-expenses");
  const balance = document.getElementById("balance");

  //   Caught Error
  const error = document.getElementById("error");

  // error condition

  if (isNaN(income)) {
    error.style.display = "block";
    error.innerText = "Please Input Income In Number.";
    totalExpenses.innerText = "N/A";
    balance.innerText = "N/A";
  } else if (income == 0) {
    error.style.display = "block";
    error.innerText = "Please Input Al Least Some Income.";
    totalExpenses.innerText = "N/A";
    balance.innerText = "N/A";
  } else if (isNaN(food) || isNaN(rent) || isNaN(clothes)) {
    error.style.display = "block";
    error.innerText = "Please Input Number Only.";
    totalExpenses.innerText = "N/A";
    balance.innerText = "N/A";
  } else if (food < 0 || rent < 0 < clothes < 0) {
    error.style.display = "block";
    error.innerText = "Please Input Positive Number.";
    totalExpenses.innerText = "N/A";
    balance.innerText = "N/A";
  } else if (food + rent + clothes > income) {
    error.style.display = "block";
    error.innerText = "Your Income exceede Expenses.";
    totalExpenses.innerText = "N/A";
    balance.innerText = "N/A";
  } else {
    error.style.display = "none";
    const totalExpensesSum = food + rent + clothes;
    totalExpenses.innerText = totalExpensesSum;
    const balanceAfterExpenses = income - totalExpensesSum;
    balance.innerText = balanceAfterExpenses;
  }
});

// Saving buton event handeler
document.getElementById("saving-btn").addEventListener("click", function () {
  const savingInput = getInputValue("saving-input");
  const income = getInputValue("income-input");
  const balance = document.getElementById("balance").innerText;

  const savingAmount = document.getElementById("saving-amount");
  const remainingBalance = document.getElementById("remaining-balance");

  //   Caught Error
  const savingError = document.getElementById("saving-error");

  const saving = (savingInput / 100) * balance;
  const remaining = balance - saving;
  // saving amount error condition
  if (savingInput.length == 0) {
    savingError.style.display = "block";
    savingError.innerText = "Please Input 0 or some number.";
    savingAmount.innerText = "N/A";
    remainingBalance.innerText = "N/A";
  } else if (isNaN(savingInput)) {
    savingError.style.display = "block";
    savingError.innerText = "Please Input Number Only.";
    savingAmount.innerText = "N/A";
    remainingBalance.innerText = "N/A";
  } else if (savingInput < 0) {
    savingError.style.display = "block";
    savingError.innerText = "Please Input Positive Number.";
    savingAmount.innerText = "N/A";
    remainingBalance.innerText = "N/A";
  } else if (balance < saving) {
    savingError.style.display = "block";
    savingError.innerText = "Please Input Less Percentage. Your saving exceede your balance.";
    savingAmount.innerText = "N/A";
    remainingBalance.innerText = "N/A";
  } else {
    savingError.style.display = "none";
    savingAmount.innerText = saving;
    remainingBalance.innerText = remaining;
  }
});