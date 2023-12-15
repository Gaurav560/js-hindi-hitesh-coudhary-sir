//var is never used now a days as it gives scoping error values
//so we use let and const instead.


//****************** mini hoisting***********************

//we define fn in two ways. 
//1st

//accessing before defining the fn 
console.log(addOne(5)); 

function addOne(num){
    return num+1;
}

//o/p-6

//2nd way
//accessing before defining the fn 
//Cannot access 'addTwo' before initialization-->return this type of error
console.log(addTwo(5));

//this addTwo is also called expression some times and by defining a fn like this we cant access it  above method defn

const addTwo=function(num){
    return num+2;
}