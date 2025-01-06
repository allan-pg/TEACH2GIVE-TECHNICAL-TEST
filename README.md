# TEACH2GIVE-TECHNICAL-TEST

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



