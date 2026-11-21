const students = ["Ali", "Ahmed", "Sara", "Ayesha", "Usman"];
for(let i = 0; i < students.length; i++){  
    console.log(students[i] , i);
}

const colors = ["Red", "Blue", "Green", "Yellow", "Purple"];

for(let i = 0; i < colors.length; i++){
    console.log(colors[i] , i);
}

const countries = ["Pakistan", "India", "Japan", "Turkey", "Canada"];

for(let i = 0; i < countries.length; i++){
    console.log(countries[i] , i);
    
}
const cars = ["Toyota", "Honda", "BMW", "Audi", "Suzuki"];

for(let i = 0; i < cars.length; i++){
    console.log(cars[i] , i);
    
}

const languages = ["JavaScript", "Python", "Java", "C++", "PHP"];

for(let i = 0; i < languages.length; i++){
    console.log(languages[i], i);
        
}
const animals = ["Lion", "Tiger", "Elephant", "Cat", "Dog"];

for(let i = 0; i < animals.length; i++){
    console.log(animals[i], i);
    
}

const cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

for(let i = 0; i < cities.length; i++){
    console.log(cities[i], i);
    
}
const subjects = ["Math", "English", "Science", "Computer", "History"];
for(let i = 0; i < subjects.length; i++){
    console.log(subjects[i], i);
    
}
const movies = ["Avatar", "Titanic", "Inception", "Interstellar", "Joker"];
for(let i = 0; i < movies.length; i++){
    console.log(movies[i], i);
    
}










// javascript loops assignment



// 1. Create an array of fruits like ["apple", "banana", "cherry"] and use a loop to log each fruit
// in the console.


// const fruits = ["apple", "banana", "cherry",];

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i] , i );
    
// }


// 2. Given an array of colors ["red", "green", "blue"], use a loop to add all the color names to
// a paragraph with the ID output using document.querySelector.



// const colors = ["red", "green", "blue"];

// for(let i = 0; i < colors.length; i++){
//     console.log(colors[i] , i);
    
// }


// 3. Use a for loop to print numbers from 1 to 10 in the browser console.


// for(let i = 1; i <= 10; i++){
//     console.log(i);
    
// }


// 4. Use a while loop to print numbers from 5 to 1 in the console.


// let i = 5;

// while(i >= 1){
//     console.log(i);
//     i--;
// }



// Question 5
// Given an array of names, show all names separated by commas in div ID names.

// javascript
// const names = ["Ali", "Sara", "Ahmed"];

// let result = "";

// for(let i = 0; i < names.length; i++){
//     result = result + names[i] + ", ";
// }

// document.querySelector("#names").textContent = result;

// console.log(result);
// Question 6
// Change the text of paragraph with ID status to Loading.

// javascript
// document.querySelector("#status").textContent = "Loading...";

// console.log("Loading...");
// Question 7
// Calculate the sum of numbers in an array and display total in paragraph ID sum.

// javascript
// const numbers = [5, 10, 15];

// let sum = 0;

// for(let i = 0; i < numbers.length; i++){
//     sum = sum + numbers[i];
// }

// document.querySelector("#sum").textContent = sum;

// console.log(sum);
// Question 8
// Loop through an array of cities and display them in a single string.



// javascript
// const cities = ["Karachi", "Lahore", "Quetta"];

// let result = "";

// for(let i = 0; i < cities.length; i++){
//     result = result + cities[i] + " ";
// }

// document.querySelector("#cities").textContent = result;

// console.log(result);





// Question 9
// Count from 1 to 20 and log only even numbers.

// javascript
// for(let i = 1; i <= 20; i++){

//     if(i % 2 === 0){
//         console.log(i);
//     }

// }
// Question 10
// Find the largest number in an array and display it in paragraph ID max.

// javascript
// const numbers = [45, 22, 89, 100];

// let max = numbers[0];

// for(let i = 0; i < numbers.length; i++){

//     if(numbers[i] > max){
//         max = numbers[i];
//     }

// }

// document.querySelector("#max").textContent = max;

// console.log(max);
// Question 11
// Select a div with ID result and change its text.

// javascript
// document.querySelector("#result").textContent = "Task Complete";

// console.log("Task Complete");
// Question 12
// Calculate average of temperatures and display in averageTemp.

// javascript
// const temperatures = [30, 35, 32, 40];

// let sum = 0;

// for(let i = 0; i < temperatures.length; i++){
//     sum = sum + temperatures[i];
// }

// let average = sum / temperatures.length;

// document.querySelector("#averageTemp").textContent = average;

// console.log(average);
// Question 13
// Add all numbers from 1 to 100.

// javascript
// let sum = 0;

// for(let i = 1; i <= 100; i++){
//     sum = sum + i;
// }

// document.querySelector("#totalSum").textContent = sum;

// console.log(sum);
// Question 14
// Print all animals into a single paragraph.

// javascript
// const animals = ["dog", "cat", "bird"];

// let result = "";

// for(let i = 0; i < animals.length; i++){
//     result = result + animals[i] + " ";
// }

// document.querySelector("#animals").textContent = result;

// console.log(result);
// Question 15
// Change heading text using document.querySelector.

// javascript
// document.querySelector("#title").textContent = "Welcome to JavaScript!";

// console.log("Welcome to JavaScript!");
// Question 16
// Print numbers between 1 and 50 that are divisible by 5.

// javascript
// for(let i = 1; i <= 50; i++){

//     if(i % 5 === 0){
//         console.log(i);
//     }

// }
// Question 17
// Count scores above 75 and display in div highScores.

// javascript
// const scores = [80, 60, 90, 70];

// let count = 0;

// for(let i = 0; i < scores.length; i++){

//     if(scores[i] > 75){
//         count++;
//     }

// }

// document.querySelector("#highScores").textContent = count;

// console.log(count);
// Question 18
// Change the text of element with ID message.

// javascript
// document.querySelector("#message").textContent = "Updated successfully";

// console.log("Updated successfully");
// Question 19
// Show all subjects in a paragraph with ID subjectsList.

// javascript
// const subjects = ["Math", "Science", "English"];

// let result = "";

// for(let i = 0; i < subjects.length; i++){
//     result = result + subjects[i] + " ";
// }

// document.querySelector("#subjectsList").textContent = result;

// console.log(result);
// Question 20
// Is question mein 2 tasks mix ho gaye hain. Dono solve kar diye hain.

// Part 1: Print numbers from 10 down to 1.

// javascript
// for(let i = 10; i >= 1; i--){
//     console.log(i);
// }
// Part 2: Calculate sum of array [5, 10, 15, 20].

// javascript
// const numbers = [5, 10, 15, 20];

// let sum = 0;

// for(let i = 0; i < numbers.length; i++){
//     sum = sum + numbers[i];
// }

// console.log(sum




// Question 21
// Find the largest number in an array.

// javascript
// const numbers = [45, 67, 12, 89, 34];

// let max = numbers[0];

// for(let i = 0; i < numbers



Question 22
Count how many numbers are even in an array.

javascript
const numbers = [3, 8, 6, 1, 9, 2];

let count = 0;

for(let i = 0; i < numbers.length; i++){

    if(numbers[i] % 2 === 0){
        count++;
    }

}

console.log(count);
Question 23
Calculate the average of numbers in an array.

javascript
const numbers = [20, 30, 40, 50];

let sum = 0;

for(let i = 0; i < numbers.length; i++){
    sum = sum + numbers[i];
}

let average = sum / numbers.length;

console.log(average);
Question 24
Create a new array where each value is multiplied by 3.

javascript
const numbers = [2, 4, 6, 8, 10];

const newArray = [];

for(let i = 0; i < numbers.length; i++){
    newArray[i] = numbers[i] * 3;
}

console.log(newArray);
Question 25
Count how many elements are greater than 4.

javascript
const numbers = [1, 3, 5, 7, 9];

let count = 0;

for(let i = 0; i < numbers.length; i++){

    if(numbers[i] > 4){
        count++;
    }

}

console.log(count);





