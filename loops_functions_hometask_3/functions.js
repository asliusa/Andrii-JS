//1. Write a function createArray(start, end)
function createArray(start, end) {
    let numArr = [];
    for (i=start; i<=end; i++){
        numArr.push(i);
    }
    return numArr;
}

//2. Given two integers, a and b (a < b).
function duplicateElem(a, b) {
    let arr = createArray(a-1,b-1);
    for (i=0; i<=arr.length-1; i++){
        for (j=i; j>0; j--){
           console.log(arr[i])
        }
    }
}

//3.Write a function named compact(arr)
function compact(arr){
  let uniqArr = []
  for (i=0; i<arr.length; i++){
    for (j=i+1; j<arr.length; j++){
        console.log('comparint elements '+arr[i]+' and '+arr[j])
        if (arr[i] == arr[j]) {
          console.log('removing '+arr[j]+' at position '+j)
          arr.splice(j,1);
          j--;
          console.log('new array '+arr)
        }
    }
  }
  return arr;  
}