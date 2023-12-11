//array -different from java as it can store different data type values
//javascript arrays are resizable
//js copy-operations create shallow copies. means they all share the same reference.if u change at one place ,it will be changed at other place also.
//has a push method to add the values in array.

//index based accessing.
//pop() to remove the last value in the array.
//can be declared in two types.

//unshift() method bahut hi bekaar hai kyunki wo value starting mein add karta hai .aur maan lo 10000 value hain  to saare values ko 1 place shift krna padta aur computer pe kaafi load aata.

//shift() removes the first element

//includes() checks if the elementis present in the array or not.


//indexOf() gives the value of index at which element is stored in array.if no element is stored in array ,then it will return -1 .


const myArray=[3,5,4,6,7,"Gaurav",true,7.5];
const my2ndArray=new Array(1,2,3,4,5,6,"Gs");
my2ndArray.push(333333);
my2ndArray.pop();

console.log(typeof my2ndArray);
console.log(my2ndArray.includes(5555));

const newArrrr=my2ndArray.join();
console.log(typeof newArrrr);

//slice() and spice()
//slice  returns a sub array .parameters include initial and final index of subarray with endIndex not included.andoriginal array is not manipulated
//but in splice end index is considered and original array is manipulated.

console.log(my2ndArray.slice(1,3));
console.log(my2ndArray);

console.log(my2ndArray.splice(1,3));
console.log(my2ndArray);