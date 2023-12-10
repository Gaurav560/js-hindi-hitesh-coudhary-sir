//it is type castingfrom string to number
const score=400;
console.log(score);



//but when we create a number with new keyword,it purposely generatesa numbertype value
const newNumber=new Number(score);
console.log(newNumber);

console.log(typeof(score)); 
console.log(typeof(newNumber));

//converting the number into String
newNumber.toString();
console.log(typeof(newNumber))