/**
 * Checks if a password meets the following requirements:
 * - Must be a string
 * - Must be at least 8 characters long
 * - Must be at most 20 characters long
 * - Must contain at least one lowercase letter
 * - Must contain at least one uppercase letter
 * - Must contain at least one digit
 * - Must contain at least one special character
 *
 * @param {string} password - The password to be checked
 * @throws {Error} If the password does not meet any of the requirements
 */
export function checkPassword(password) {
  if(typeof password !== 'string') {
    throw new Error('Password must be a string');
  }
  if(password.length < 8) {
    throw new Error('Password must be at least 8 characters long');
  }
  if(password.length > 20) {
    throw new Error('Password must be at most 20 characters long');
  }
  if(!/[a-z]/.test(password)) {
    throw new Error('Password must contain at least one lowercase letter');
  }
  if(!/[A-Z]/.test(password)) {
    throw new Error('Password must contain at least one uppercase letter');
  }
  if(!/[0-9]/.test(password)) {
    throw new Error('Password must contain at least one digit');
  }
  if(!/[^a-zA-Z0-9]/.test(password)) {
    throw new Error('Password must contain at least one special character');
  }
}

/**
 * Checks if a password meets the following criteria:
 * - Must be a string
 * - Must be at least 8 characters long
 * - Must be at most 20 characters long
 * - Must contain at least one lowercase letter
 * - Must contain at least one uppercase letter
 * - Must contain at least one digit
 * - Must contain at least one special character
 *
 * @param {string} password - The password to be checked
 * @throws {Error} If the password does not meet the criteria
 */
export function checkPasswordWithoutRegEx(password) {
  if (typeof password !== 'string') {
    throw new Error('Password must be a string');
  }
  if (password.length < 8) {
    throw new Error('Password must be at least 8 characters long');
  }
  if (password.length > 20) {
    throw new Error('Password must be at most 20 characters long');
  }
  let hasLowercase = false;
  let hasUppercase = false;
  let hasDigit = false;
  let hasSpecialChar = false;
  for (let i = 0; i < password.length; i++) {
    const char = password[i];
    if (char >= 'a' && char <= 'z') {
      hasLowercase = true;
    } else if (char >= 'A' && char <= 'Z') {
      hasUppercase = true;
    } else if (char >= '0' && char <= '9') {
      hasDigit = true;
    } else {
      hasSpecialChar = true;
    }
  }
  if (!hasLowercase) {
    throw new Error('Password must contain at least one lowercase letter');
  }
  if (!hasUppercase) {
    throw new Error('Password must contain at least one uppercase letter');
  }
  if (!hasDigit) {
    throw new Error('Password must contain at least one digit');
  }
  if (!hasSpecialChar) {
    throw new Error('Password must contain at least one special character');
  }
}