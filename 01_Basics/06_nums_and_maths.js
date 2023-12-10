
//              nums

//it is type castingfrom string to number
const score=400.545343;
//console.log(score);



//but when we create a number with new keyword,it purposely generatesa numbertype value
const newNumber=new Number(score);
//console.log(newNumber);

//console.log(typeof(score)); 
//console.log(typeof(newNumber));

//converting the number into String and calling length property to find the length of the string

//console.log(newNumber.toString().length);

//applying toFixed() method used in finding precision of decimal numbers.toFixed(pass precision number) works directly on number and not on string

//toFixed mein decimal ke baad vali ko count kar ke return karte hain String format mein

//console.log(newNumber.toFixed(7));
//console.log(typeof(newNumber))

//using toPrecision method on a number.returns a string
//toPrecision mein pele decimal ke left side aur jab left side mein khatm ho jaaye tab right side mein check hoti hai 

//console.log(newNumber.toPrecision(11));

//toLocaleString()->if a number has amy zeros ,then for counting zeros and avoiding confusion, we use this method

const hundreds=100000000;

//console.log(hundreds.toLocaleString('en-IN'));



//                       maths


//Math is an object in js that has many  properties and methods

console.log(Math);
const randomVal=45.55;
//abs() do not touches the egative part .it just gives positive value for any negative number and +ve value for positive number.
//console.log(Math.abs(randomVal));

//round gives value based on values on right side of decimal
console.log(Math.round(randomVal));


//ceil rounds off to uper value
console.log(Math.ceil(randomVal));

//floor rounds of to lower value
console.log(Math.floor(randomVal));


//Min and Max in an array
console.log(Math.min(3,4,5,1,6,0));
console.log(Math.max(3,4,5,1,6,0));

//Math.random()->always gives the value between 0 and 1
console.log(Math.random());
console.log(Math.floor((Math.random()*10)+1));

const min=1
const max=6
//suppose we have to find a formula with math.random like dice ,that whenver u try to find a number with math.random u always want to get between 1 and 6 both inclusive
 const randValue=Math.floor((Math.random()*(max-min+1))+min);
 console.log(`rand value is ${randValue}`)



