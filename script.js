function calculateAndDisplayTax() {
  const incomeInput = parseFloat(document.getElementById('income').value);
  const deductionsInput = parseFloat(document.getElementById('deductions').value) || 0;

  if (isNaN(incomeInput) || incomeInput < 0) {
    alert("Please enter a valid positive income amount.");
    return;
  }

  const result = calculateTax(incomeInput, deductionsInput);

  document.getElementById('taxableOutput').innerText = `$${result.taxableIncome.toLocaleString()}`;
  document.getElementById('taxOutput').innerText = `$${result.taxAmount.toLocaleString()}`;

  document.getElementById('result').classList.remove('hidden');
}