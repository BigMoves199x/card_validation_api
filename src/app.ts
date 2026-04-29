import express, { Request, Response } from "express";
import { isValidCardNumber } from "./utils/validateCard";

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// POST endpoint to validate a card number
app.post("/api/validate-card", (req: Request, res: Response) => {

  // Extract cardNumber from request body (can be unknown initially)
  const { cardNumber } = req.body as { cardNumber?: unknown };

  // Check if card number is provided
  if (!cardNumber) {
    return res.status(400).json({
      success: false,
      message: "Card number is required"
    });
  }

  // Ensure the card number is a string
  if (typeof cardNumber !== "string") {
    return res.status(400).json({
      success: false,
      message: "Card number must be a string"
    });
  }

  // Validate the card number using Luhn algorithm
  const isValid = isValidCardNumber(cardNumber);

  // Return validation result
  return res.status(200).json({
    success: true,
    cardNumber,
    isValid
  });
});

export default app;