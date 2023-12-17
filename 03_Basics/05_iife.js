//iife stands for immediately invoked function expression 
//this is a way to create an anonymous function and execute it right away.
//jab hm chahte hain koi code program ke run hote ke saath hi chal jaaye to use iffe kehte hain.jaise java mein static block.
//we can use it for our db connections or other important things such as ki global variable ya method ki scope se local scope mein pollution na aaye.

//the iife has two parts, the function declaration and invocation of that function

//syntax
//saara fn parenthesis ke andar jaayega aur wahi pe call bhi ho jaayega open parenthesis se.

//()->first parenthesis for fn defn
//()->second parenthesis for execution call
//important->u have to end iife using semicolon


//iife with normal fn (also called named iife)
(function iifeSyntax(){
    console.log(`db connected`);
})();


//iife with arrow fn
(()=>console.log("db connected two"))();

//iife with passing parameters in arrow fn

((name)=>console.log(name))(`gaurav`);
