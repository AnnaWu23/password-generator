export const generatePassword = ({
  length,
  useUppercase,
  useLowercase,
  useNumbers,
  useSymbols,
}) => {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  // Save the selected characters
  const selectedChars = [];
  if (useUppercase) selectedChars.push(upper);
  if (useLowercase) selectedChars.push(lower);
  if (useNumbers) selectedChars.push(numbers);
  if (useSymbols) selectedChars.push(symbols);

  // If no character set is selected, return an empty string
  if (selectedChars.length === 0) return "";

  // Ensure password contains at least one character from each selected character type
  let password = "";
  selectedChars.forEach((charSet) => {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  });

  // Fill the remaining length with all available characters
  const allChars = selectedChars.join("");
  for (let i = password.length; i < length; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }

  // Shuffle the password characters
  return password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
};
