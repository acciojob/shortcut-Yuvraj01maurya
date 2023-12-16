function shortcut(s1, s2) {
  // your code here
	if (!s1 || !s2) {
    // If either string is empty, return an empty string.
    return '';
  }
  // Get the first character of each string.
  const firstChar1 = s1[0];
  const firstChar2 = s2[0];
  // Concatenate the first characters of the two strings and return the result.
  return firstChar1 + firstChar2;
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
