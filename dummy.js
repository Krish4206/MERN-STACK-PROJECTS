function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  const str = 'Hello, Version control system!';

  const reversedStr = reverseString(str);
  console.log(reversedStr); // Output:!dlroW,olleH