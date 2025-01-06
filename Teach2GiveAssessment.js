// Question 1: FizzBuzz 
/* Write a program that prints the numbers from 1 to 100. For multiples of 3, print "Fizz"; for  multiples of 5, print "Buzz";
  and for numbers that are multiples of both 3 and 5, print  "FizzBuzz".
*/
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else {
    console.log(i);
  }
}

// Question 2: Fibonacci Sequence
// Write a program to generate the Fibonacci sequence up to 100. 

let a = 0;
let b = 1;

console.log(a); 
while (b <= 100) { 
  console.log(b); 
  let nextNum = a + b; 
  a = b; 
  b = nextNum; 

// Question 3: Power of Two  
// Write a program that takes an integer as input and returns true if the input is a power of two.  

function isPowerOfTwo(n) {

  if (n <= 0) {
    return false;
  }

  while (n % 2 === 0) {
    n = n / 2; 
  }
  return n === 1;

// Question 4: Capitalize Words 
/* Write a program that accepts a string as input, capitalizes the first letter of each word in the  string, and then returns the result string.   
Examples:
  
"hi"=> returns "Hi" 
"i love programming"=> returns "I Love Programming" */

function capitalizeWords(str) {
  
  let words = str.split(" "); 
  let capitalizedWords = [];
  
  for (let i = 0; i < words.length; i++) {
    let word = words[i]; 
    let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    
    capitalizedWords.push(capitalizedWord);
  }
  
  return capitalizedWords.join(" ");
}

// ### Question 5: Reverse Integer
/* Write a program that takes an integer as input and returns an integer with reversed digit  ordering. 
Examples:

For input 500, the program should return 5. 
For input -56, the program should return -65. 
For input -90, the program should return -9. 
For input 91, the program should return 19. 

*/

// ### Question 5: Reverse Integer
/* 
Write a program that takes an integer as input and returns an integer with reversed digit ordering.

Examples:
For input 500, the program should return 5.
For input -56, the program should return -65.
For input -90, the program should return -9.
For input 91, the program should return 19.
*/

function reverseInteger(num) {
    
    let negativeNum = num < 0;
    let positiveNum = Math.abs(num);
    let numStr = positiveNum.toString();
    let reversedStr = '';
  
    for (let i = numStr.length - 1; i >= 0; i--) {
        reversedStr += numStr[i];
    }

    
    let reversedNum = parseInt(reversedStr, 10);
    if (negativeNum) {
        reversedNum = -reversedNum;
    }
    return reversedNum;
}

/* Question 6: Count Vowels 
Write a program that counts the number of vowels in a sentence.   

eg " Hello World " => returns 2 
*/

function countVowels(sentence) {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];

        if (vowels.indexOf(char) !== -1) {
            count++;
        }
    }

    return count;
}

