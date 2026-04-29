export function isValidCardNumber(cardNumber: string): boolean {
    
  const cleanedCardNumber = cardNumber.replace(/\s+/g, "");

  if (!/^\d+$/.test(cleanedCardNumber)) {
    return false;
  }

  if (cleanedCardNumber.length < 12 || cleanedCardNumber.length > 19) {
    return false;
  }

  let sum = 0;
  let shouldDouble = false;

  for (let i = cleanedCardNumber.length - 1; i >= 0; i--) {
    let digit = Number(cleanedCardNumber[i]);

    if (shouldDouble) {
      digit = digit * 2;

      if (digit > 9) {
        digit = digit - 9;
      }
    }

    sum = sum + digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}