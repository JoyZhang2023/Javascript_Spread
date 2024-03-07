/**
 * AD 320 Assignment Exploring JavaScript Spread Syntax
 */

// Task 1 Function Argument Expansion
function sum (a, b, c) {
    return a+b+c;
}
const numbers=[3,6,4];
console.log([sum(...numbers)]); //expecting 13

//Task 2 Merging Arrays
const array1=[1,2,3];
const array2=[4,5,6];
const mergeArray=[...array1,...array2];
console.log(mergeArray);

//Task 3 Array Element Insertion
const colors=['red','green','blue'];
const extendedColors=['yellow',...colors,'purple'];
console.log(extendedColors);

//Task 4 Cloning and Modifying an Object
const person={name:'John',age:30};
const newPerson={...person};
newPerson.name='Jane';
newPerson.gender='female';
console.log(person);
console.log(newPerson);

//Task 5 Combining Objects
const object1={a:1, b:2};
const object2={b:3, c:4};
const combinedObject={...object1,...object2};
console.log(combinedObject);

