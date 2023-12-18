const coding =["js","ruby","Java","Python","cpp"];
//coding.forEach((item)=>console.log(item));
//this forEach always returns undefined.for Each is used for iteration purposes.

// const val=coding.forEach((it)=> it);
// console.log(val);


//does not changes the original array

//filter() used to filter the array based on some conditions and return an array.
const myValues=[1,2,4,55,7,8,56,31,232,2,2,42,20,0,-3];
 //const myFilterReturn=myValues.filter((item)=>item>4);
 //console.log(myFilterReturn);

 //without the use of filter by using forEach

// const newNums=[];
// myValues.forEach((num)=>{if(num>4){
//     newNums.push(num);
// }})
//console.log(newNums);

//use filter for searching purpose
const books=[
    {
        "title": "The C Programming Language",
        "author": "Dennis M. Ritchie & Brian W. Kernighan",
        "year": 1988,
        "genre": "coding"
    },
    {
        "title": "Programming in C",
        "author": "Stephen G. Kochan",
        "year": 1983,
        "genre": "coding"
    },
    {
        "title": "C Programming Absolute Beginner's Guide",
        "author": "Perry, Miller, and Vine",
        "year": 2014,
        "genre": "coding"
    },
    {
        "title": "Learn C the Hard Way",
        "author": "Zed A. Shaw",
        "year": 2015,
        "genre": "coding"
    },
    {
        "title": "C Programming for the Absolute Beginner",
        "author": "Michael Vine",
        "year": 2002,
        "genre": "coding"
    },
    {
        "title": "JavaScript: The Good Parts",
        "author": "Douglas Crockford",
        "year": 2008,
        "genre": "web development"
    },
    {
        "title": "Python Crash Course",
        "author": "Eric Matthes",
        "year": 2015,
        "genre": "programming"
    },
    {
        "title": "Ruby on Rails Tutorial",
        "author": "Michael Hartl",
        "year": 2010,
        "genre": "web development"
    },
    {
        "title": "Java: The Complete Reference",
        "author": "Herbert Schildt",
        "year": 1996,
        "genre": "coding"
    },
    {
        "title": "Clean Code: A Handbook of Agile Software Craftsmanship",
        "author": "Robert C. Martin",
        "year": 2008,
        "genre": "coding"
    },
    {
        "title": "Eloquent JavaScript",
        "author": "Marijn Haverbeke",
        "year": 2011,
        "genre": "web development"
    },
    {
        "title": "Code: The Hidden Language of Computer Hardware and Software",
        "author": "Charles Petzold",
        "year": 1999,
        "genre": "coding"
    },
    {
        "title": "Algorithms in C",
        "author": "Robert Sedgewick",
        "year": 1990,
        "genre": "coding"
    },
    {
        "title": "Head First Design Patterns",
        "author": "Eric Freeman and Elisabeth Robson",
        "year": 2004,
        "genre": "design patterns"
    },
    {
        "title": "Introduction to Algorithms",
        "author": "Thomas H. Cormen et al.",
        "year": 1990,
        "genre": "coding"
    },
    {
        "title": "C# in Depth",
        "author": "Jon Skeet",
        "year": 2008,
        "genre": "coding"
    },
    {
        "title": "The Pragmatic Programmer",
        "author": "Andrew Hunt and David Thomas",
        "year": 1999,
        "genre": "programming"
    },
    {
        "title": "Effective Java",
        "author": "Joshua Bloch",
        "year": 2001,
        "genre": "coding"
    },
    {
        "title": "Programming Pearls",
        "author": "Jon Bentley",
        "year": 1986,
        "genre": "coding"
    },
    {
        "title": "Code Complete",
        "author": "Steve McConnell",
        "year": 1993,
        "genre": "coding standards"
    }
];

const searchBasedOnGenre=books.filter((gnere)=>{ return gnere.genre==='coding'});
//console.log(searchBasedOnGenre);

//map() in js
const mapResult=myValues.map((num)=>{ return num+10});
//console.log(mapResult);

//chaining in  js
let result=myValues.map((num)=>{return num+20}).filter((num)=>{return num>35});

//reduce method
const finalValueAfteReduce=myValues.reduce(function(acc,currVal){
    console.log(`acc:${acc}+currVal:${currVal}`);
    return acc+currVal},0
);

console.log(finalValueAfteReduce);


//reduce practical example
let shoppingCart=[
    {
        "item": "Java Full Stack Course 1",
        "price": 17000
    },
    {
        "item": "Comprehensive Full Stack Java Development",
        "price": 18999
    },
    {
        "item": "Java Enterprise Full Stack Training",
        "price": 15500
    },
    {
        "item": "Advanced Java Full Stack Bootcamp",
        "price": 20000
    },
    {
        "item": "Full Stack Development with Spring and Angular",
        "price": 17500
    },
    {
        "item": "Java and React Full Stack Certification",
        "price": 16000
    },
    {
        "item": "Full Stack Web Development Masterclass",
        "price": 21000
    },
    {
        "item": "Java Spring Boot and Vue.js Full Stack Program",
        "price": 18000
    },
    {
        "item": "Modern Java Full Stack Development",
        "price": 19500
    },
    {
        "item": "Full Stack Development with Java and JavaScript",
        "price": 17000
    }
];

let totalPrice=shoppingCart.reduce((acc,item)=>{return acc+item.price},0);
console.log("Total Price: "+totalPrice);
