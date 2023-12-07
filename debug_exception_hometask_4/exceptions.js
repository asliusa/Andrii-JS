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


//2.1 Implement the getUser(id) function
let users = 
[
  {'userId': 1, 'first_name': 'John'},
  {'userId': 2, 'first_name': 'Todd'},
  {'userId': 3, 'first_name': 'Threnton'}
]


function getUser(id) {
try{
 if (id<=0) {throw new Error('User id should be above 0')}
  for(var i=0; i<users.length; i++) {
   for(key in users[i]) {
     if(users[i][key] == id) {
       return users[i]
     }
    }
  }
 }
 catch(error) {
   console.error(error);
 }
}

//2.2 Implement the getUsers(ids) function

function getUsers(ids) {
   let validUsersList = [];
   for (i=0; i<=ids.length-1; i++){
     if (getUser(ids[i])!==undefined) {validUsersList.push(getUser(ids[i]))};
   }
   return validUsersList;
}

// 3. 

