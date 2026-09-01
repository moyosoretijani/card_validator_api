# Card Validator API

A lightweight, clean-code RESTful API built with **Node.js**, **TypeScript**, and **Express** that validates payment card numbers using the **Luhn Algorithm (Mod 10)**.

## Features
- **Luhn Algorithm Validation**: Accurate verification of card numbers (13–19 digits).
- **Strict Input Sanitization**: Rejects missing fields, invalid types, and non-numeric strings with detailed 400 Bad Request responses.
- **TypeScript**: Strict type checking with clean separation of concerns.
- **Automated Testing**: Unit and integration test suite using **Jest** and **Supertest**.

---

## API Documentation

### Endpoint
`POST /api/validate-card`

#### Request Body
```json
{
  "cardNumber": "4532015112830366"
}
```

#### Responses

**200 OK (Valid / Invalid Result)**
```json
{
  "success": true,
  "data": {
    "cardNumber": "4532015112830366",
    "isValid": true
  }
}
```

**400 Bad Request (Validation Error)**
```json
{
  "success": false,
  "error": "Invalid format: cardNumber must contain only numerical digits"
}
```

---

## Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build & Start
```bash
npm run build
npm start
```

### Run Tests
```bash
npm test
```
