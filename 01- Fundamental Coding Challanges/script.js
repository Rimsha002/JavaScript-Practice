// Question No 01
console.log("Question 1");
console.log(" ");

console.log("Part 1 ");
console.log("Hello World");
console.log(" ");

console.log("Part 2");
console.log("My Name is '\Rimsha Majeed\' ");
console.log("I am Learning JavaScript via Full Stack Bootcamp of DiaaTech");
console.log("I will be the best Web developer by hard work.");
console.log("I am making the commitment to do code with consistancy.");
console.log(" ");

// Question No 02
console.log(" Variables ");
console.log(" ");

console.log(" Part 1");
var name = "Rimsha";
var age = " 21 ";
console.log(name + " " + age);
console.log(" ");

console.log(" Part 2");

var myName = "My Name is '\Rimsha Majeed\'";
var js = "I am Learning JavaScript via Full Stack Bootcamp of DiaaTech ";
var best = "I will be the best Web developer by hard work. ";
var commit = "I am making the commitment to do code with consistancy."

var intro = ` ${myName} , ${js} , ${best} ,${commit} `;
console.log (intro);
console.log(" ");

console.log("Part 03");
var a = 20;
var b = 5;
let sum = a + b;
let minus = a - b;
let multiply = a * b;
let divide = a / b;

console.log("1st variable is : "+ a);
console.log("2nd variable is : " + b);
console.log("Their sum is ; " + sum);
console.log("Their minus is ; " + minus);
console.log("Their multiplication is ; " + multiply);
console.log("Their divide is ; " + divide);
console.log(" ");


// Question No 03
 //Alert 
 alert("Previous Tasks are completed. You can checkout in Console");
 alert("Now Find BMI");


console.log(" BMI ");
console.log(" ");
console.log(" Task 1");
var markMass = prompt ("Enter the Mark's mass in Kg: ");
var markHeight = prompt ("Enter the Mark's height in meter: ");

var johnMass = prompt ("Enter the John's mass in Kg: ");
var johnHeight = prompt ("Enter the John's height in meter: ");

console.log("Mass of Mark: " + markMass);
console.log("Height of Mark: " + markHeight);
console.log("Mass of John: " +johnMass);
console.log("Height of John: " +johnHeight);
console.log(" ");



console.log(" Task 2" );
 //BMI = mass / height ** 2 ||  mass / (height * height);

 let markBMI = markMass / markHeight ** 2 ;
 let johnBMI = johnMass / johnHeight ** 2 ;

 console.log("Marks BMI: " + markBMI );
 console.log("John BMI: " + johnBMI );
console.log(" ");


console.log("Task 03");

var markHigherBMI = markBMI > johnBMI ;
console.log(" Mark has Higher BMI = " + markHigherBMI);

