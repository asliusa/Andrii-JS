
//promise

function calcArrProduct(arrNum) {
  return new Promise((result,reject) => {
    let product = 1;
    for (i=0; i<=arrNum.length-1; i++){
      if (typeof arrNum[i] !== "number") {
        console.log(arrNum[i] + " is not a number");
        reject(new Error("Error! Incorrect array!"))
      }
      product*=arrNum[i];
    }
    result(product);
  })
}

calcArrProduct([5,3,4]).then(function (result) { console.log(result); }, function (error) { console.log(error); });