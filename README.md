

# Card Validator API

This is a simple backend API for validating card numbers.

## Technology Used

- Node.js
- TypeScript
- Express.js
- pnpm
- Jest
- Supertest

## Project Description

This API exposes one POST endpoint that accepts a card number and returns whether the card number is valid or not.

The validation uses the Luhn algorithm, which is commonly used to check card number validity.

## Endpoint

### POST /api/validate-card

Request body:

```json
{
  "cardNumber": "4111111111111111"
}