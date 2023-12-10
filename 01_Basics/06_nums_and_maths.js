//it is type castingfrom string to number
const score=400.545343;
console.log(score);



//but when we create a number with new keyword,it purposely generatesa numbertype value
const newNumber=new Number(score);
console.log(newNumber);

console.log(typeof(score)); 
console.log(typeof(newNumber));

//converting the number into String and calling length property to find the length of the string

console.log(newNumber.toString().length);

//applying toFixed() method used in finding precision of decimal numbers.toFixed(pass precision number) works directly on number and not on string
//toFixed mein decimal ke baad vali ko count kar ke return karte hain String format mein
console.log(newNumber.toFixed(7));
console.log(typeof(newNumber))

//using toPrecision method on a number.returns a string
//toPrecision mein pele decimal ke left side aur jab left side mein khatm ho jaaye tab right side mein check hoti hai 
console.log(newNumber.toPrecision(11));

//toLocaleString()->if a number has amy zeros ,then for counting zeros and avoiding confusion, we use this method
const hundreds=100000000;
console.log(hundreds.toLocaleString('en-IN'));

