import express, { Request, Response } from 'express';
import { validateLuhn } from './utils/luhn.js';

export const app = express();
app.use(express.json());

app.post('/api/validate-card', (req: Request, res: Response) => {
  const { cardNumber } = req.body;

  if (cardNumber === undefined || cardNumber === null) {
    return res.status(400).json({
      success: false,
      error: 'Missing required field: cardNumber',
    });
  }

  if (typeof cardNumber !== 'string') {
    return res.status(400).json({
      success: false,
      error: 'Invalid input type: cardNumber must be a string',
    });
  }

  const cleanedNumber = cardNumber.replace(/\s+/g, '');

  if (!/^\d+$/.test(cleanedNumber)) {
    return res.status(400).json({
      success: false,
      error: 'Invalid format: cardNumber must contain only numerical digits',
    });
  }

  const isValid = validateLuhn(cleanedNumber);

  return res.status(200).json({
    success: true,
    data: {
      cardNumber: cleanedNumber,
      isValid,
    },
  });
});
