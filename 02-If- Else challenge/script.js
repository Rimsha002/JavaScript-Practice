//BMI Updated

//Alert 
alert("BMI Updated Task Start");


var markMass = prompt ("Enter the Mark's mass in Kg: ");
var markHeight = prompt ("Enter the Mark's height in meter: ");

var johnMass = prompt ("Enter the John's mass in Kg: ");
var johnHeight = prompt ("Enter the John's height in meter: ");

console.log("Mass of Mark: " + markMass);
console.log("Height of Mark: " + markHeight);
console.log("Mass of John: " +johnMass);
console.log("Height of John: " +johnHeight);
console.log(" ");

let markBMI = markMass / markHeight ** 2 ;
let johnBMI = johnMass / johnHeight ** 2 ;

console.log("Marks BMI: " + markBMI );
console.log("John BMI: " + johnBMI );
console.log(" ");

//Task 01
console.log("👉 Message on Higher BMI")

if(markBMI > johnBMI)
{
    console.log("Mark's BMI is higher than John's!");
}
else{
    console.log("John's BMI is higher than Mark's! ")
}
console.log(" ");

// Task 02
console.log("👉 Template of BMI values");

if(markBMI > johnBMI)
{
    console.log(`Mark's BMI ${markBMI} is higher than John's! ${johnBMI} `);
}
else if( johnBMI > markBMI )
{
    console.log(`John's BMI ${johnBMI} is higher than Mark's! ${markBMI} `);
}
else{
    console.log("Both Mark's and John's BMI have same value");
}
console.log(" ");


//Alert 
alert("Congratulation! BMI updated Task completed, Checkout all Answeres in Console. Now, Question No 2 Tasks ");

alert("Task No 01 (Able to Vote Cast?) ");

//Question no 02
//Part 01
console.log("👉 Age for voting??");

var age = prompt("Enter Your age in number: ");
console.log("Your age is: " + age);
if(age >= 18 )
{
    console.log("You'r Older enough to cast vote");
}
else{
    console.log("Alert: You'r not able to cast vote as you'r under 18 years")
}

console.log(" ");
//Alert 
 alert("Task 01 completed, Now Task No 02 ( Grade Message)");


//Part 02
console.log("👉 Message on Grades: ");
let A = "Excellent, Great Job! ";
let B = "Great Job! ";
let C = "Fine";
let D = "Fine, But need to improve";
let F = "Ooh, You are Fail";

var grade = prompt("Enter Your Subject's grades i.e A / B / C / D / F: ");
console.log("Your grade is: " + grade);

if(grade === "A" || grade === "a" )
{
    console.log("Excellent, Great Job! ");
}
else if(grade === "B" || grade === "b")
{
    console.log("Good Job!");
}
else if ( grade === "C" || grade === "c")
{
    console.log( " Just Fine" );
}
else if( grade === "D" || grade === "d")
{
    console.log( "Fine, But need to improve" );
}
else if (grade === "F" || grade === "f")
 {
    console.log( "Ooh, You are Fail" );
 }
 else{
    console.log("Invalid Input! Please enter Valid Grade.i.e A, B, C, D, F")
 }


console.log(" ");
 //Alert 
 alert("Task No 03 ( Find Stage of life)");
 

//Part 03

console.log("👉 Stage of life ?");

var Age = prompt("Enter You  Age: ");
console.log("Your Age is: " + Age);

if(Age >= 0 && Age <=2)
{
    console.log("You are a baby");
}
else if(Age >=3 && Age <= 5)
{
    console.log("You are a Toddler");
}
else if(Age >=6 && Age <= 12)
{
    console.log("You are a Child");
}
else if(Age >=13 && Age <= 18)
{
    console.log("You are a teenager");
}
else (Age >=19 );
{
    console.log("You are a Adult");
}
console.log(" ");
 

 //Alert 
 alert("Task No 04");


 //Part 04
 console.log(" 👉 Find +ve / -ve / 0 ??")

 var number = prompt("Enter Any number: ");
 if(number < 0)
 {
    console.log("Your number is Negative");
 }
 else if(number == 0)
 {
    console.log("Your number is Zero");
 }
 else if(number > 0)
 {
    console.log("Your number is Positive");
 }
 else
 {
    console.log("Invalid Number! Please enter Valid number");
 }

 alert("Congratulation! 🎉 All Tasks are Completed ✔️,All Answeres in console")
