let ages = [3, 9, 23, 64, 2, 8, 28, 93];
//task 1a
let first = ages[0];
let last = ages[ages.length - 1];
let difference = last - first;
console.log(difference);

//task 1b
let ages_2 = [3, 9, 23, 64, 2, 8, 28, 93, 100];
let first_2 = ages_2[0];
let last_2 = ages_2[ages_2.length - 1];
let difference_2 = last_2 - first_2;
console.log(difference_2);



//task 1c
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
let average = sum / ages.length;
console.log(average);

//task 2a

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let sum_2 = 0;
for (let i = 0; i < names.length; i++) {
  sum_2 += names[i].length;
}
let average_2 = sum_2 / names.length;
console.log(average_2);

//task 2b
let names_3 = "";
for (let i = 0; i < names.length; i++) {
  names_3 += names[i] + " ";
}
console.log(names_3);

//task 3
//How do you access the last element of any array?
let last_element = names[names.length - 1];
console.log(last_element);

//task 4
//How do you access the first element of any array?
let first_element = names[0];
console.log(first_element);

//task 5
//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
}
console.log(nameLengths);

//task 6
//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let sum_3 = 0;
for (let i = 0; i < nameLengths.length; i++) {
  sum_3 += nameLengths[i];
}
console.log(sum_3);

//task 7
//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
function word(word, n) {
  let word_2 = "";
  for (let i = 0; i < n; i++) {
    word_2 += word;
  }
  return word_2;
}
console.log(word("Hello", 3));

//task 8
//Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
function full_name(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log(full_name("abc", "ottweiler"));

//task 9
//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function sum_of_array(array) {
  let sum_4 = 0;
  for (let i = 0; i < array.length; i++) {
    sum_4 += array[i];
  }
  if (sum_4 > 100) {
    return true;
  } else {
    return false;
  }
}

//task 10
//Write a function that takes an array of numbers and returns the average of all the elements in the array.
function average_of_array(array) {
  let sum_5 = 0;
  for (let i = 0; i < array.length; i++) {
    sum_5 += array[i];
  }
  return sum_5 / array.length;
}

//task 11
//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function average_of_array_2(array_1, array_2) {
  let sum_6 = 0;
  for (let i = 0; i < array_1.length; i++) {
    sum_6 += array_1[i];
  }
  let average_3 = sum_6 / array_1.length;
  let sum_7 = 0;
  for (let i = 0; i < array_2.length; i++) {
    sum_7 += array_2[i];
  }
  let average_4 = sum_7 / array_2.length;
  if (average_3 > average_4) {
    return true;
  } else {
    return false;
  }
}

//task 12
//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket) {
  if (isHotOutside === true && moneyInPocket > 10.5) {
    return true;
  } else {
    return false;
  }
}

//task 13
//Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
//This function takes an array of numbers and returns the sum of all the elements in the array. I created this function because I wanted to practice writing a function that takes an array as an argument.

function sum_of_array_2(array) {
  let sum_8 = 0;
  for (let i = 0; i < array.length; i++) {
    sum_8 += array[i];
  }
  return sum_8;
}
