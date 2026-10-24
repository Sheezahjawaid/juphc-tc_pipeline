function calculateTax(income, deductions = 0) {
  const taxableIncome = Math.max(0, income - deductions);
  const taxAmount = taxableIncome * 0.15;
  return {
    taxableIncome,
    taxAmount
  };
}