// get input vale
function getInputValue(inputField) {
  getInput = document.getElementById(inputField);
  getInputAmount = getInput.value;
  getInputNum = parseFloat(getInputAmount);
  if (!isNaN(getInputNum)) {
    return getInputNum;
  } else {
    return;
  }
}

// Get Tag InnerText
// function targetDisplay(tagId) {
//   const getTag = document.getElementById(tagId).innerHTML;
//   const getTagValue = parseFloat(getTag);
//   return getTagValue;
// }

// Calculate Button Event
document.getElementById("calculate-btn").addEventListener("click", function () {
  //get income
  const income = getInputValue("income-input");
  // get expenses amount
  const food = getInputValue("food-input");
  const rent = getInputValue("rent-input");
  const clothes = getInputValue("clothes-input");
  // total expenses sum
  const totalExpensesSum = food + rent + clothes;
  // condition
  if (!isNaN(totalExpensesSum)) {
    // show total expenses
    const totalExpenses = document.getElementById("total-expenses");
    totalExpenses.innerText = totalExpensesSum;
    // get Balance
    const balance = document.getElementById("balance");
    // const balanceNum = parseFloat(balance);
    const balanceAfterExpenses = income - totalExpensesSum;
    balance.innerText = balanceAfterExpenses;
    error.style.display = "none";
  } else if (income > totalExpensesSum) {
    const error = document.getElementById("error");
    error.innerText = "Expense amount bigger than your income";
    error.style.display = "block";
  } else {
    const error = document.getElementById("error");
    error.innerText = "Please give number";
    error.style.display = "block";
  }
});
// Saving buton event
document.getElementById('saving-btn').addEventListener('click', function () {
  const savingInput = getInputValue('saving-input');
  const income = getInputValue('income-input');
  const balance = getInputValue('balance');
  const savingAmount = document.getElementById('saving-amount');
  const remainingBalance = document.getElementById('reamining-balance');
  // const remainingText = parseFloat(remainingBalance);
  const saving = (savingInput / 100) * income;
  savingAmount.innerText = saving;
  const remaining = balance - saving;
  console.log(remaining);
});