
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 7850;

app.use(bodyParser.json());

app.post('/convert', async (req, res) => {
  const data = req.body;


  if (!data.toConvert || !data.amount || !data.from || !data.to) {
    return res.status(400).json({ error: 'Invalid request' });
  }

  const { toConvert, amount, from, to } = data;
  const conversions = [];


  for (const targetCurrency of to) {
    try {
      const response = await axios.get( `);
      if (response.status === 200) {
        const exchangeRate = response.data.in;
        const convertedAmount = amount * exchangeRate;
        conversions.push({ to: targetCurrency, value: convertedAmount });
      } else {

        return res.status(500).json({ error: 'Failed to fetch exchange rate' });
      }
    } catch (error) {
      
      return res.status(500).json({ error: 'Failed to fetch exchange rate' });
    }
  }

  res.json({ conversions });
});

app.listen(port, () => {
  console.log(`Currency converter API is listening on port ${port}`);
});
