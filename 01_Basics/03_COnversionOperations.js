let score="33ab";
let score1=null;
let score3=undefined;
console.log(typeof score);
console.log(typeof(score));

let valueInNumber=Number(score3);
console.log(typeof valueInNumber);
console.log(typeof(valueInNumber));
console.log(valueInNumber);//converting 33ab string into number will result in 
//NaN but its type will change .as typeof fn gives number as a result.

console.log(score1);

//observations for converting into number
//33->33
//"33abc"->Nan but typeof gives number
//true->1 and false->0

let isLoggedIn=1;
let isLoggedInn=" ";
let isBoolean=Boolean(isLoggedInn);
console.log(isBoolean);
console.log(typeof isBoolean);

//observations while converting string to boolean

//""->false
//" " or " anything "->true
