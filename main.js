// Implement a function which convert the given boolean value into its string representation
// function booleanToString(b){
//   return b.toString()
// }



// return number of people who are still in the bus after the last bus station when taking in an array where first index is people getting on and 2nd people getting off


let number = function(busStops){
  // Good Luck!
  let people = 0
  busStops.forEach(el=>{
    people = (people + el[0]) - (el[1])
  })
  return people
}
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]))

// codewars answer
const number2 = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);



// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. 
//Don't reduce this fraction to a simpler expression.
// the printer can only take in letters a-m.



function printerError(s) {
  // your code
  let length = s.length
  const errorLetters = ['n','o','p','q','r','s','t','u','v','w','x','y','z']
  let errorCount = 0
  for (let letter of s){
    if (errorLetters.includes(letter)){
      errorCount++
    }
  }
  return `${errorCount}/${length}`
}

console.log(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'))


// 2 codewars answers
function printerError2(s) {
  var count = 0;
  for(var i = 0; i < s.length; i++) {
    if (s[i] > "m") {
      count++;
    }
  }
  return count+"/"+s.length;
}


const printerError3 = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;


// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2)
{
  // Code
  if (operation === '+'){
    return value1 + value2
  }
  else if (operation === '-'){
    return value1 - value2
  }
  else if (operation === '*'){
    return value1 * value2
  }
  else if(operation ==='/'){
    return value1 / value2
  }
}

// switch case
function basicOp(operation, value1, value2) {
  switch (operation) {
      case '+':
          return value1 + value2;
      case '-':
          return value1 - value2;
      case '*':
          return value1 * value2;
      case '/':
          return value1 / value2;
      default:
          return 0;
  }
}


// Count sheep, take in a num and count that many sheep.


const countSheep = function(num){
  let sheep = ``
  for (i=1;i<=num;i++){
    sheep += `${i} sheep...`
  }
  return sheep
}


// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){
let answer = 0
numbers.forEach(el=>{
   answer +=el**2
})
return answer
}


// using reduce

function squareSum2(numbers){
  return numbers.reduce((acc,c)=>acc += c**2,0) 
}




// Take in 2 numbers and return true if one is even and one is odd


function lovefunc(flower1, flower2){
  if(flower1%2 ===0 && flower2%2 !=0 || flower2%2===0 && flower1%2 !=0){
    return true
  }
  else {
    return false
  }
}


// cleaner code
function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}



// Given an array of integers your solution should find the smallest integer.


class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min.apply(null,args)
  }
}

// Return the next square if sq is a perfect square, -1 otherwise

function findNextSquare(sq) {
  return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
}

console.log(findNextSquare(9))


// return the minimum and the maximum number in an array 

function minMax(arr){
let min = Math.min(...arr)
let max = Math.max(...arr)
let array = [min,max]
return array
}

// cleaner code
function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}


// return a greetings that takes in a name
function greet(name){
  return `Hello, ${name} how are you doing today?`
}


// Write a function to split a string and convert it into an array of words.

function stringToArray(string){
  return string.split(" ")

}

// Given a non-empty array of integers, return the result of multiplying the values together in order

function grow(x){
  return x.reduce((acc,c) => acc * c)
  }


 // Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.


function feast(beast, dish) {
    return beast[0]===dish[0] && beast[beast.length-1]===dish[dish.length-1]? true : false
    }



function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(Boolean).length
    
  }


// create a function which returns an RNA sequence from the given DNA sequence

 function DNAtoRNA(dna) {

  return dna.replace(/T/g, 'U')
  }

   


// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive.
    

function XO(str) {
    let x = str.toLowerCase().split('').filter(letter => letter == 'x')
    let o = str.toLowerCase().split('').filter(letter => letter =='o')
    if (x.length === o.length){
      return true
    }
    else return false
  }
  

// codewars answer

function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}



class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length*width*height
  }
}

console.log(Kata.getVolumeOfCuboid(10,10,10))



// if name same as owner return hello boss

function greet (name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest'
}


// work out if your car can make the distance

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump ? true : false
};

// return an intverted array of numbers

function invert(array) {
  return array.map(function(array){return array * -1})
   
}

// create a function that returns a sentence in order reversed.

function reverseWords(str){
let arr = str.split(" ")
let reversed = arr.map(el=>{
  return el.split('').reverse().join("")
})
return reversed.join(" ")
  
}

// return an array as full sentence
function smash (words) {
  return words.join(' ')
};

// count positive numbers and add negative numbers to an array


function countPositivesSumNegatives(input) {
    if (!input || input.length == 0) return [];
    let sum = 0, count = 0;
    input.forEach(function(el){ if (el > 0) count++; else sum+=el});
    return [count, sum];
  }



// check to see if a contains x

function check(a, x) {
  return x === a.find(el => el === x)
}
// could also use include()


// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()


function expressionMatter(a, b, c) {
  let arrayAns = []
  arrayAns.push(a * (b+c))
  arrayAns.push(a * b * c)
  arrayAns.push(a + b * c)
  arrayAns.push((a + b) * c)
  arrayAns.push(a+b+c)
  return Math.max(...arrayAns)
}

// capitalize the start of every letter

function toJadenCase(sentence) {
  //...
  let jadenCase = sentence.split(" ")
  return jadenCase.map(el => el[0].toUpperCase() + el.slice(1)).join(" ")
};

console.log(toJadenCase('hello i am jaden smith'))


// suppose to do it 
String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}