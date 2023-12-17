//for of
//these loops are array specific loops
const myArr=[1,2,4,5,6,7];
for (const num of myArr) {
    console.log(num);
}

const greeting=`Hello World`;
for (const greetChar of greeting) {
    console.log(`each character of greeting is:${greetChar}`);
}

//Maps
//Maps and objects both store data in key vlaue pair but map insertion order ko yaad rakhta hai but object insertion order ko yaad nahi rakhta hai .
//map doesnot contains duplicate

const map=new Map();
map.set(`Gaurav`,`1`);
map.set(`Sharma`,`2`);
map.set(`Amar`,`3`);
for (const key of map) {
    console.log(key);
}


//key value iteration works on map not on object
for (const [key,value] of map) {
    console.log(key,value);
}


const myObj={
    name:"Gs",
    "value":100
}

//for object,key-valye iteration does not work
for (const [keyOfObj,value] of myObj) {
    console.log(keyOfObj,value);
}


