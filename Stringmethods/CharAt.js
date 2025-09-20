// javaScript  STRING METHODS

/* 


You’re building a simple login system for a retro-style game. 
The game requires usernames to start with a capital letter and end with a number. 
You’ve been asked to write a function that validates usernames based on these rules.

✅ Requirements:
Write a function isValidUsername(username) that returns true if:

The first character is an uppercase letter.

The last character is a digit (0–9).

Otherwise, return false.
 */
/* Write a function that checks whether the first character of a given string is a
 vowel (a, e, i, o, u). Return true if it is, otherwise return false.

Example Input: "Apple" Example Output: true

Example Input: "banana" 
Example Output: false

Use charAt(0) to access the first character of the string and compare it to a list of vowels. */

const isValidCharacters = (characters) => {
  const firstChar = characters.charAt(0);
  const pattern = /^[A-Za-z]$/;
  const isLetter = pattern.test(firstChar);

  return isLetter ? "Valid Username" : "Not Valid";
};

console.log(isValidCharacters("1mark"));
