// This function checks if a card number is valid using the Luhn algorithm
export function isValidCardNumber(cardNumber: string): boolean {
  
  // Remove all spaces from the input (e.g. "4234 1111" → "42341111")
  const cleaned = cardNumber.replace(/\s+/g, "");

  // Ensure the card number contains only digits
  // If it contains letters or symbols, return false
  if (!/^\d+$/.test(cleaned)) return false;

  // Check if the length is within valid card number range (12–19 digits)
  if (cleaned.length < 12 || cleaned.length > 19) return false;

  let sum = 0;               // Will store the total sum
  let shouldDouble = false;  // Controls when to double digits

  // Loop through the digits from right to left
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = Number(cleaned[i]); // Convert string digit to number

    // Double every second digit
    if (shouldDouble) {
      digit *= 2;

      // If doubling results in a number greater than 9,
      // subtract 9 (Luhn rule)
      if (digit > 9) digit -= 9;
    }

    sum += digit; // Add digit to total sum

    // Flip the flag (true ↔ false) for next iteration
    shouldDouble = !shouldDouble;
  }

  // If the total sum is divisible by 10, the card is valid
  return sum % 10 === 0;
}