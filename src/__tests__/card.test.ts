import request from 'supertest';
import { app } from '../app.js';
import { validateLuhn } from '../utils/luhn.js';

describe('Luhn Validation Utility', () => {
  it('should return true for valid Luhn card numbers', () => {
    expect(validateLuhn('4532015112830366')).toBe(true);
  });

  it('should return false for invalid Luhn card numbers', () => {
    expect(validateLuhn('4532015112830367')).toBe(false);
  });
});

describe('POST /api/validate-card Endpoint', () => {
  it('should return 400 if cardNumber is missing', async () => {
    const res = await request(app).post('/api/validate-card').send({});
    expect(res.status).toBe(400);
    expect(res.body.success).toBe(false);
  });

  it('should return 400 if cardNumber is not a string', async () => {
    const res = await request(app).post('/api/validate-card').send({ cardNumber: 123456789 });
    expect(res.status).toBe(400);
  });

  it('should return 200 and isValid: true for a valid card', async () => {
    const res = await request(app)
      .post('/api/validate-card')
      .send({ cardNumber: '4532015112830366' });
    expect(res.status).toBe(200);
    expect(res.body.data.isValid).toBe(true);
  });
});
