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

console.log(printerError3('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'))

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

console.log(countSheep(3))


// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){
let answer = 0
numbers.forEach(el=>{
   answer +=el**2
})
return answer
}

console.log(squareSum([1,2,2]))

// using reduce

function squareSum2(numbers){
  return numbers.reduce((acc,c)=>acc += c**2,0) 
}

console.log(squareSum2([1,2,2]))

