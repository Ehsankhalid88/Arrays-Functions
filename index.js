//Assignment 4:

//Q1: the differences between mutating array methods and non-mutation array methods in JavaScript
//a: Mutating array methods are changing the array itself instead of returning a new array with the new changes.
//Array.pop()
//Array.push()
//Array.shift()
//Array.unshift()
//Array.splice()

//b:non-mutation array methods don't changeing the original array, but return a new array instead:
//Array.slice()
//Array.concat()
//Array.map()
//Array.filter()
//Array.includes()


//Q2: Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 
let arrayOfLanguges = ["C#", "JavaScript", "Ruby", "PHP", "Python"];

//1: Add ‘Kotlin’ to the end of the array.
arrayOfLanguges.push("Kotlin");
console.log(arrayOfLanguges);

//2: Add ‘Java’ after ‘Ruby’

arrayOfLanguges.splice(3, 0, 'Java')
console.log(arrayOfLanguges);

//3: Remove the first item in the array: there are two way to remove the first item
//a: using splice(start,item)
arrayOfLanguges.splice(0, 1);
console.log(arrayOfLanguges);
//b:using .shift()
//arrayOfLanguges.shift();
//console.log(arrayOfLanguges);

//4: Add ’Scala’ and ‘Swift’ to the beginning of the array.
//a:using the splice(start,deletecount,item1,item2)
arrayOfLanguges.splice(0, 0, "Scala", "Swift");
console.log(arrayOfLanguges);
//b: using .unshift
//arrayOfLanguges.unshift("Scala","Swift");
//console.log(arrayOfLanguges);



//5: Replace ‘PHP’ with ‘Go’ and ‘Rust’
arrayOfLanguges.splice(5, 1, "GO", "Rust");
console.log(arrayOfLanguges);


//Q3:What will be the value of fruit after calling the function changeFruit?
let fruit = ['apple', 'mango', 'banana'];
function changeFruit(fruit) {
    fruit[2] = "orange";// Changes the third element of fruits to "orange"
    console.log(fruit)
    return fruit;

}
let changeFruit1 = changeFruit(fruit);
console.log(changeFruit1)
//after calling the function changeFruit the resalt will be [ 'apple', 'mango', 'orange' ]



//Q4: Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.



function findMax(arrayNo) {
    let i;
    let max = -Infinity;
    for (i = 0; i < arrayNo.length; i++) {
        if (arrayNo[i] > max) {
            max = arrayNo[i];
        }
    }
    return max;
}
let arrayNo = [15, 36, 50, 101];
console.log(findMax(arrayNo));


//Q5: Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:

function valTimesIndex(arr) {
    return arr.map((num, index) => num * index);
}
let arr = [9, 8, 7, 5];
let newarray = valTimesIndex(arr);
console.log(newarray);