//fn with object and aaray

//case1 :when we dont know how many arguments are going to be passed in this fn (these cases generally arises in shopping cart of e-commerce application)

//... dots are called rest and spread operators .ab kab rest bolte hain aur kab spread bolte hain ye to use case par depend kartah hai.
//below is rest operator
 function calculateCartPrice(val1,val2,...num1){
    return num1;
 }
 console.log(calculateCartPrice(200,400,500,100));