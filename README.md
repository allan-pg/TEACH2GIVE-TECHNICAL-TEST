# TEACH2GIVE-TECHNICAL-TEST
## Introduction
This is a technical test for teach2give internship. 

Language used:-  
- JavaScript


### Question 1: FizzBuzz 
 - Write a program that prints the numbers from 1 to 100. For multiples of 3, print "Fizz"; for  multiples of 5, print "Buzz";
  and for numbers that are multiples of both 3 and 5, print  "FizzBuzz".

```javascript
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
```
### Question 2: Fibonacci Sequence
- Write a program to generate the Fibonacci sequence up to 100. 

```javascript
let a = 0, b = 1;

console.log(a); 

while (b <= 100) {
  console.log(b); 
  let nextFib = a + b; 
  a = b; 
  b = nextFib; 
}
```

### Question 3: Power of Two  
- Write a program that takes an integer as input and returns true if the input is a power of two. -->

```javascript
function isPowerOfTwo(n) {
  
  if (n <= 0) {
    return false;
  }

  
  while (n % 2 === 0) {
    n = n / 2; 
  }

  
  return n === 1;
}
```
### Question 4: Capitalize Words 
- Write a program that accepts a string as input, capitalizes the first letter of each word in the  string, and then returns the result string.   
Examples:
  
"hi"=> returns "Hi" 
"i love programming"=> returns "I Love Programming" 

```javascript
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
```

### Question 5: Reverse Integer
- Write a program that takes an integer as input and returns an integer with reversed digit  ordering. 
Examples:

For input 500, the program should return 5. 
For input -56, the program should return -65. 
For input -90, the program should return -9. 
For input 91, the program should return 19. 

```javascript
function reverseInteger(num) {
    
    const isNegative = num < 0;
    const numStr = Math.abs(num).toString();
    
    
    const reversedStr = numStr.split('').reverse().join('');
    
    const reversedNum = parseInt(reversedStr, 10);
    return isNegative ? -reversedNum : reversedNum;
}
```
### Question 6: Count Vowels 
Write a program that counts the number of vowels in a sentence.   

eg " Hello World " => returns 2 

```javascript
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
```


