function sayMyName(){
    console.log("Gaurav");
    console.log("Gaurav");
    console.log("Gaurav");
    console.log("Gaurav");
    console.log("Gaurav");
    console.log("Gaurav");
    console.log("Gaurav");
}


//sirf naam hai fn ka withour parenthesis to uska reference kahleaga
let myFunction = sayMyName; 
//used in react,on click and dom manipualtion
 //fn ko without calling directly assign kr skte ho



 myFunction();   //calling the fn by using its reference


 //defining a fn naed loginUser aur ab argument ki value kabhi bhi undefined nahi hogi kyunki hmne gaurav pass kar diya hai default value
 function loginUser(username="Gaurav"){
    return `${username} just logged in `;
 }

 //calling that function but not passing an argument(waise  case mein undefined print hota hai)
 console.log(loginUser());
 
 
 //passing an arguement
 console.log(loginUser("amar"));

 //

 
