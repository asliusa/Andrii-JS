const triangleArea = (a,b,c) => {
  isTriangleValid = Boolean((a<(b+c))&(b<(a+c))&(c<(a+b)))
  if (!isTriangleValid) {
    console.log('Invalid data')
    return 
  }
  function area(a,b,c){
     p = (a+b+c)/2
     area = Math.sqrt(p*(p-a)*(p-b)*(p-c))
     return +(Math.round(area + "e+2")  + "e-2")
  }
  return area(a,b,c);
} 
