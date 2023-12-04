
//datatypes is defined on the basis of where it is stored in memory area.
//if data types are stored in stack ,it means these are primitive types eg:reference variable,int etc
//if datatypes are stored in heap area,then it is called non-primitive data types.like objects,array,class

let myHomeName="Gaurav";
let myAnotherName=myHomeName;
 myAnotherName="Sharma";
console.log(myAnotherName)
console.log(myHomeName)


//in Primitive datatypes,original value is not passed when u assign it to any other variable,instead a copy of that value is 
//passed to perform the operation.so no modification on original variable and its value.
//but that is not the case in non primitive datatypes.
//reference variable is passed when assigning the non-primitive variable ,so if we change the variable to which non primitive  is assigned,the original data will also be change.

//eg:
 let studentDetail={
     studentName:"Gaurav",
 studentNumber:9523849635
 }
 console.log(studentDetail);
 //if we assign studentDetail to some other variable and change
 //that variable  ,our studentDetail variable will be also changed.

 let gauravDetail=studentDetail;
 gauravDetail.studentNumber=987787;
 console.log(studentDetail);