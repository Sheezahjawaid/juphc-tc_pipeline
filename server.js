const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Tax Calculator Home');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

app.post('/calculate', (req, res) => {
  const { income, deductions = 0 } = req.body;
  if (income === undefined || typeof income !== 'number' || income < 0) {
    return res.status(400).json({ error: 'Invalid income' });
  }
  const taxableIncome = Math.max(0, income - deductions);
  res.status(200).json({ tax: taxableIncome * 0.15 });
});

if (require.main === module) {
  app.listen(8080, () => console.log('Server running on port 8080'));
}

module.exports = app;