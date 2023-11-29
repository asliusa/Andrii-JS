let randomNums = []
for (let i = 0; i<20; i++)  {
  //1. Create an array of 20 elements and fill it with random numbers from 1 to 100
  randomNums[i] = Math.round(Math.random(5) * 100)

  //2. Display each element of the array in the form [1] – 5  
  console.log('['+i+']-'+randomNums[i])

  //3. Check whether the array contains a number that is a multiple of 7
  if (randomNums[i]%7<1) {console.log('This element is dividable by 7')}
}

//4. Sort the array in descending order
randomNums.sort().reverse()

//5. Fill the second half of the array with zeros
semiZeroedArr = randomNums.map((elem,index) => {if (index>=10) {return 0}; if (index<10) {return elem}})

//6. Remove the first 3 elements from the array using one method
semiZeroedArr.slice(3)

//7. Check if the array has duplicates
for (let i = 0; i<randomNums.length; i++)  {
  if (randomNumns.indexOf(randomNums[i]) !== randomNums.lastIndexOf(randomNums[i])) {console.log(randomNums[i] + ' has duplicates in array')}
}
//8. Create a new array in which to write the second half of the main array
let newArr = randomNums.slice(Math.round(randomNums.length/2),randomNums.length)

//9. Count the number of even numbers in the array
let evenNumber = 0;
for (let i = 0; i<randomNums.length; i++)  {
  if (randomNums[i]%2==0) {evenNumber++}
}
console.log(evenNumber)
