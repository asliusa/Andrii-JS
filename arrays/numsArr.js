const primeNumbers = numsArr => {
  function isDividable(value) {
    dividers = [3,5,7,11,13]
    div_result = false
    for (i = 0; i<=dividers.length; i++ )
    {
      if (value%dividers[i]<1) {console.log(value+" is dividable by "+ dividers[i]);   div_result = true; break}
    }
    return div_result;
  }
  result = numsArr.filter(i => isDividable(i));
  return result;
}
