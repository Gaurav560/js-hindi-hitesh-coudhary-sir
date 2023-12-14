//if u have to master js ,then u have to learn two things:objects and events
//ch-Objects
//objects can be made through literals and with constructor using new keyword.
//singleton -koi bhi constructor se object banate hain to wo object singelton kehlata hai .only one isntance of this object is created in the entire program.
//par jab aap dusre tareeke se(literals ki tarah) banate hain to multiple instances ban jaate hain us objects ki.

//two ways of creating object using js:
// through constrcutor->>>>  const ConstructorObj=Object.create;

//through literal
//objects contains key and value pair
//by default system interprets key as string

//symbol -another primitive data type
const mySymbol=Symbol("key1");

const JsObj={
    name:"Gaurav",
    location:"Gaya",
    email:"gsharma1154@gmail.com",
    lastLoginDays:["MONDAY","THRUSDAY"],

    //is value ko dot se kabhi access nahi kar paayenge
    "surname":"sharma",

    //using symbol the wrong way as type of symbol will throw string 
    //but we were expecting symbol
  
  //  mySymbol:"LinkKey",



     //using symbol the right way as type of symbol will throw string but we were expecting symbol
     [mySymbol]:"linkKey"

}

//TWO ways of accessing the object i.e. through key and string
    console.log(JsObj.email);
    console.log(JsObj["email"]);
    console.log(JsObj["surname"]);

    //wrong answer 
   // console.log(typeof JsObj.mySymbol);
    console.log(typeof JsObj[mySymbol]);

//to freeze an object so that its values can't be changed
//Object.freeze(JsObj);
console.log(JsObj);


//in js ,functions are treated normally just like variables and can be treated like variables.
JsObj.greeting=function(){
    console.log("Hello Js users");
}
JsObj.greetingTwo=function(){
    console.log(`heelo ,i am using backticks and my name is ::${this.name}`);
}


//returns function(anonymous )->a reference of that object
// console.log(JsObj.greeting);  
// console.log(JsObj.greetingTwo); 

    
//it returns the fn value
JsObj.greeting();
JsObj.greetingTwo();
 
