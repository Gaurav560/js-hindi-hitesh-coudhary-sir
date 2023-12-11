//date is an object in js 
//it represents single moment in time in a platform independent format.
//calcualted in milliseconds from 1 jan 1970.
//TC39  RELEASES ALL NEW FEATURES OF JS. AND THEY ARE CURRENTLY WORKING ON TO IMPROVE THE DATE AND TIME UNDER THE NAME OF TEMPORAL API.
//default date is given in yyyy-mm-dd
//for comparisons of date and time,we convert it into milliseconds and then use it.
let myDate=new Date();
/*
console.log(myDate);
console.log(myDate.toString());
 console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
 console.log(myDate.toJSON());
 console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
 console.log(myDate.toISOString());
console.log(myDate.toTimeString());

*/
//console.log(typeof(myDate));


//Decalring dates
//yyyy-mm-dd and mm starts from index 0 by default but we can change it.
//let myNewCreatedDate=new Date(2023,8,23,5,3,270);

//when you write the month in single digit ,it starts from 0 but when you write date in double digit ,the date starts from 01
//let myNewCreatedDate1=new Date("2023-09-23");

//for india ,we prefer mm-dd-yyyy
let myNewCreatedDate2=new Date("09-23-2023");
//console.log(myNewCreatedDate2.toString());



//time stamps to decides winner in quizes ,polls .it is used to calcualte time in milliseconds and through it comparison is done.
let myTimeStamp=Date.now();
// console.log(myTimeStamp);

//any created date with getTime() gives timeStamp in milliseconds.
//console.log(myDate.getTime());

//to convert the milliseconds in second divide by 1000

// console.log(`the date in seconds is ${Math.floor(myDate.getTime()/1000)}`);



//some more methods that we get with time and date


let newDate=new Date();
//suppose u want to know only month or year from  a date object, then
//have certain methods to know it specifically.
//monday starts from 0
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.getMilliseconds());
console.log(newDate.getSeconds());

//it gives total time from 1970 in mill seconds
console.log(newDate.getTime());


//discussing special method called tolocaleString().
//this method takes an object as parameter.
console.log(newDate.toLocaleString("default",
{
    weekday:"long",
    day:"numeric",
    timeZone: 'Asia/Kolkata'
   

}
))




