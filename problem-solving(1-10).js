// 1) Harry’s mom gave him tk 1000 and asked him to buy some oranges and
// apples. Write a program to help Harry calculate how much money the
// shopkeeper will return. The total cost of 1 kg of oranges and 1 kg of
// apples is tk 700.

var moneyGiven = 1000;
var orangePrice = 300;
var applePrice = 400;
var totalPrice = orangePrice + applePrice;
console.log("Total price:", totalPrice);
var moneyReturned = moneyGiven - totalPrice;
console.log("Money returned:", moneyReturned);


// 2) Write a program to calculate the average marks of Mathematics,
// Biology, Chemistry, Physics, and Bangla of a student.// Making average mark show only two decimal points
// Sample Input:
// 75.25, 65, 80, 35.45, 99.50
// Output:
// 71.04

var mathematics = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 65.45;
var bangla = 89.50;

var totalMarks = mathematics + biology + chemistry + physics + bangla;
console.log(totalMarks);

var averageMark = totalMarks / 5;
console.log(averageMark);


// 3) John’s teacher gave him two variables. Each variable contains a string.
// John’s teacher asked him to combine these two strings(‘I am going to
// be’ and ‘an awesome web developer’) and print them in one line. Help
// John write the program.

var firstString = "I am going to be";
var secondString = "an awesome web developer.";
var bothString = firstString + " " + secondString;
console.log(bothString);


// 4) Sarah’s mother is teaching her mathematics. She gave Sarah the number
// 119 and asked her what the remainder would be if she divided the number by 5.Help Sarah write the program.


var givenNumber = 119;
var remainder = givenNumber % 5;
console.log(remainder);
 


// 5) িনেচর ĺভিরেয়বল িডেǓয়ার এ ĺকানটার মেধƟ িক িক সমসƟা আেছ। ĺদখেতা ĺবর করেত
// পােরা িকনা?
// Var price = 33
// var name - Shabana
// var boxName = ‘Cocola;
// var 88_price = 34;
// var enum = -1;
// var _$box’78 = ‘Monika’;
// var home-address = “kochu khet”;


 var price = 33; //case sensitive.

var name = "Shabana"; //used - instead of = , always bind strings with single or double quotes.

var boxName = 'Cocola'; //string start and end with '' this.

var _price = 34; //

var enumm = -1; //

var $box78 = 'Monika'; //variable name cannot contain special characters other than _ and $, (') is a special character.


var homeAddress = "kochu khet"; //

// 6) You are given an array:
// var fruits = ['Apple', 'Banana', 'Orange'];

// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.

// b) Remove ‘Orange’ and add ‘Watermelon’.
// Declaring the array

//a)
var fruits = ["Apple", "Banana", "Orange"];
var bananaIndex = fruits.indexOf("Banana");
console.log(bananaIndex);
fruits[1] = "Mango";
console.log( fruits);

//b)
fruits.pop();
console.log( fruits);
fruits.push();
console.log( fruits);

// 7) You and your friends Tom, Jane, Peter and John got their final exam
// results. Your total score is 85, Tom’s total score is 66, Jane’s total score is
// 95, Peter’s total score is 56 and John’s total score is 40. The grading
// chart is
// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade
// Write a program to find your and your friends’ grades using
// if-else.


var totalScore = 85;

if (totalScore <= 100 && totalScore >= 80) {

    console.log("Grade A");
}
else if (totalScore < 80 && totalScore >= 60) {
   
    console.log("Grade B");
}
else if (totalScore < 60 && totalScore >= 50) {
   
    console.log("Grade C");
}
else if (totalScore < 50 && totalScore >= 40) {
    
    console.log("Grade D");
}
else if (totalScore < 40 && totalScore >= 0) {
  
    console.log("Grade F");
}
else {
   
    console.log("Valid score needed");
}


// 8) You are given three numbers 13, 79, and 45. Write a program that will
// print the largest number using if-else.
var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 > num2 && num1 > num3) {
   
    console.log(num1);
}
else if (num2 > num3) {
  
    console.log(num2);
}
else {
    console.log(num3);
}

// 9) You are given a triangle with the sides 9, 8, 9. Write a program to check
// whether a triangle is Isosceles or not using if-else.
// Isosceles => two sides are equal


var side1 = 9;
var side2 = 8;
var side3 = 9;

if (side1 === side2 && side2 === side3 && side3 === side1) {
   
    console.log(" Triangle is Equilateral");
}
else if (side1 === side2 || side2 === side3 || side3 === side1) {
    
    console.log("Triangle is Isosceles");
}
else {
  
    console.log("Triangle is not Equilateral nor Isosceles");
}

// 10) Ǔাস ĺসেভর এর ফাইনাল এǙাম এ তু িম ফাʁŪ হেয়ছ। ĺতামার বȴু আিলয়া, ডািলয়া,
// সািলয়া, মািলয়া, িলিলয়া আর ʪালাইয়া - তােদর grade তু িম জােনা না। তেব তােদর ন˘র
// জােনা. আিলয়া 95 ĺপেয়েছ, ডািলয়া 66 ĺপেয়েছ, সািলয়া 80 ĺপেয়েছ, মািলয়া ĺপেয়েছ 59,
// িলিলয়া ĺপেয়েছ 47, ʪালাইয়া ĺপেয়েছ 77। তু িম JS code িদেয় তােদর grade ĺবর কের
// িদেত পারেব?
// ১) যারা ৫০ এর িনেচ ĺপেয়েছ, তােদর grade F.
// ২) যারা ৫০ বা তার উপের ĺপেয়েছ, অথবা ৬০ এর িনেচ ĺপেয়েছ, তােদর grade D.
// ৩) যারা ৬০ বা তার উপের ĺপেয়েছ, অথবা ৭০ এর িনেচ ĺপেয়েছ, তােদর grade C.৪) যারা ৭০ বা তার উপের ĺপেয়েছ, অথবা ৮০ এর িনেচ ĺপেয়েছ, তােদর grade B.
// ৫) যারা ৮০ বা তার উপের ĺপেয়েছ, অথবা ৯০ এর িনেচ ĺপেয়েছ, তােদর grade A.
// ৬) যারা ৯০ বা তার উপের ĺপেয়েছ, তােদর grade A+
let marks = 80;

switch (true) {
    case (marks >= 0 && marks < 50):
        console.log("Grade F");
        break;

    case (marks >= 50 && marks < 60):
        console.log("Grade D");
        break;

    case (marks >= 60 && marks < 70):
        console.log("Grade C");
        break;

    case (marks >= 70 && marks < 80):
        
        console.log("Grade B");
        break;
    case (marks >= 80 && marks < 90):
        
        console.log("Grade A");
        break;
    case (marks >= 90 && marks <= 100):
        
        console.log("Grade A+");
        break;
    default:
       
        console.log("Valid score needed")
        break;
}