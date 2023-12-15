//object creation using constrcutor

const tinder={};
tinder.id="1";
tinder.userName="Gs540";
tinder.isLoggedIn=false

//console.log(tinder);

//object inside an object
const regularuserDetails={
    email:"1809157@sbsstc.ac.in",
    fullName:{
        userFullName:{
            firstName:"Gaurav",
            lastName:"Sharma"
        }
    }
}

//chaining
//console.log(regularuserDetails.fullName.userFullName.firstName);

//using Object.assign method
const obj1={1:'a',2:'b'};
const obj2={3:'c',4:'d'};

//wrong way of merging two or more object.it creates 2d objects of objects just like 2 d arrays.
const obj3={obj1,obj2};
//console.log(obj3);

//right way of merging objects i.e.. Object.assign
const obj4=Object.assign({},obj1,obj2);
//console.log(obj4)

//but we are not going to useassign method to merge tow or more objects. We aregoing to use sprwead operator. also used in samaary.
const obj5={...obj1,...obj2};
console.log(obj5);