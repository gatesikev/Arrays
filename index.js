// Exercise one: arrray initialization and property access
const productCategories= ["Books", "Electronics", "Clothing", "Home & Kitchen", "Toys & Games"];
//a
console.log(productCategories[0]);
//b
console.log(productCategories[productCategories.length - 1]);
//c
console.log(productCategories.length);
//d
productCategories[1]= "Pens";
//e
console.log(productCategories);


//Exercise two: Push, Pop, Shift, Unshift, Splice
let invetory=[10,20,30];

//a
invetory.push(40);
console.log(invetory);

//b
invetory.pop(40);
console.log(invetory);

//c
invetory.unshift(0);
console.log(invetory);

//d
invetory.shift(0);
console.log(invetory);

//e
invetory.splice(1,1,25,35);
console.log(invetory);

//Exercise three: Shallow Copying of Arrays and the reference trap


//a
const originalScores=[90,85,78];
//b
const referenceCopy= originalScores; // reference copy, not a new array
console.log(referenceCopy);
//c 
referenceCopy[0]= 100;
console.log("Original Scores:", originalScores);
console.log("Reference Copy:", referenceCopy);

//d
const spreadCopy= [...originalScores]; // creates a new array with the same elements
//e
spreadCopy[0]= 50;
console.log("Original Scores:", originalScores);
console.log("Spread Copy:", spreadCopy);

//SECTION 3: Searching and Checking
//Exercise 4: Finding Elements by Index and Value

const studentNames= ["Alice", "Bob", "Charlie", "Alice", "David"];

//a 
//the indexof, lastindex = if the first condition is successful it print out true then the condition stops
console.log(studentNames.indexOf("Alice"));
//b
console.log(studentNames.lastIndexOf("Alice"));
//c
console.log(studentNames.includes("Charlie"));
//d
console.log(studentNames.includes("Eve")); 

//Exercise 5: Advanced Searching with find and findIndex
const products= [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Smartphone", price: 499 },
    { id: 3, name: "Tablet", price: 299 },
    { id: 4, name: "Headphones", price: 199 },
    { id: 5, name: "Speaker", price: 1500 }
];

//a 
let foundProduct= products.find(product => product.id === 2); //"==="strictly equal operators checks datatypes and "== "compares the datatypes and values
console.log(foundProduct);

//b
let foundIndex= products.findIndex(product => product.price > 1000);
console.log(foundIndex); // returns -1 if no product is found with price greater than 1000

// Exercise 6: Checking Integrity(some,every)
//a
const userAges= [18, 24, 33, 16, 40];
let age;
console.log(userAges.some(age => age < 18));
//b
console.log(userAges.every(age => age >= 18));
//c
console.log(userAges.some(age => age % 5 === 0));


//SECTION C: Transformation and Reordering
//Exercise 7: Sorting and Reversing

const dataPoints=[42, 10, 500, 2, 77];
//a
const ascendingSorted = [...dataPoints].sort((a, b) => a - b); // sorts in ascending order
console.log(ascendingSorted);

//b
const descendingSorted = [...dataPoints].sort((a, b) => b - a); // sorts in descending order
console.log(descendingSorted);
//c
const reversed = [...dataPoints].reverse(); // reverses the original array order
console.log(reversed);

