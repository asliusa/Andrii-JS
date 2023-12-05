//1. Implement the calcRectangleArea(width, height) function
function isNumber(value) {
  return typeof value === 'number';
}

function calcRectangleArea(width, height) {
  try {
   if (!isNumber(width)) {throw new Error('Width is not a number')}
   if (!isNumber(height)) {throw new Error('Height is not a number')}
   if (width<=0 || height<=0) {throw new Error('Width or height less or equal to zero')}
   return width* height
  }
  catch(error) {
    console.error(error);
  }
}
