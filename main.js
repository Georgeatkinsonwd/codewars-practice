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
  // your code
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