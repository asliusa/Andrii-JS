numsArr = []
for (let i = 0; i<50; i++)  {
  numsArr[i] = Math.round(Math.random(5) * 100)	
}

function isDividable(value) {
  dividers = [3,5,7,11,13]
  result = false
  for (i = 0; i<=dividers.length; i++ )
    {
      if (value%dividers[i]<1) {console.log(value+" is dividale by "+ dividers[i]); result=true; break}
    }
  return result;
} 

const primeNumbers = numsArr => {
  result = numsArr.filter(i => isDividable(i)); 
  return result;
}
