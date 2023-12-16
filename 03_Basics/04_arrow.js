//this keyword refers to the current context
//making an object called user
const user={
    //in object data gets stored in json
 username:"Gaurav",
price:999,
welcomeMessage:function(){
    console.log(`${this.username} welcome to our website`);
    console.log(this);
}

}

console.log(user);
user.welcomeMessage();
//changing the current context of usernmame(here context means value.so current context means value)
user.username="sharma";
user.welcomeMessage();

//in node environment ,currently this refers to empty object
//browser ke andar jo global object hai wo hai windows object.
//and console.log(this) return window object in browser.

console.log(this);



//***********************ARROW FUNCTION**************************/
//jab kisi function ke andar this ko print karte hain(node environment ke andar) to hme kaafi values milti hai jaise microtask,perormance evaluation etc.



//agar fn ke andar kisi variable ko define karke usse this keyword se
//use this keyword se access nahi kar pate hain.

//normal fn

// const one=function(){
//    let username="Gauravv";
//     console.log(this.username);
// }


//one();


//arrow function(parethesis phir arrow then curly braces)
//we can use this keyword inside arrow fn
const two=()=>{
    console.log(`i am inside arrow function`+this);
}
two();

const three=(num1,num2)=>{
    console.log(num1*num2);
}

three(3,5);

//concept of implicit return .isme aapko curly braces use nahi karna padta hai aur return keyword bhi nahi likhna padta hai bus single line ka body hona chahiye.
const four=(num1,num2,num3) =>num1*num2*num3;
console.log(four(4,6,5));


//curly braces mein logic body wrap kara to return keyword likhna padega but agar without curly braces ke return keyword nahi likhna padega.
const five=(num1,num2) =>{ return num1-num2};
console.log(five(4,6));


//returning an object from arrow fn->parenthesis mein wrap karna padta hai 
const six=(num1,num2)=>({username:`Gaurav`});
console.log(six(9,8));


