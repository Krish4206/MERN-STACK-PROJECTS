function sum(numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  const numbers = [1, 2, 3, 7, 5];
  const sumOfNumbers = sum(numbers);
  console.log(sumOfNumbers); // Output: 15