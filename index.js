/* 1st Part 
console.log("I like Pizza");
console.log("I really love pizza");

window.alert("I really love pizza");
//This is a comment
/*This is a
multiline
comment
*/

/* 2nd Part
Variables
A variable is a container for storing a data
1. Declaration (var,let,const)
2. Assignment (= using assignment operator)

let firstName="Smit";
let age=21;
age=age+1;
let student=true;
console.log("Hello", firstName);
console.log("My age is ",age);
console.log("Enrolled ",student);
//This is used to send data from javascript to the HTML file
document.getElementById("p1").innerHTML="Hello "+firstName;
document.getElementById("p2").innerHTML="I am "+age+" years old";
document.getElementById("p3").innerHTML="Enrolled: "+student;
*/

/* 3rd part Arithmetic Expressions
It is a combination of operands (values,variables)
Operators (+ - * / %)
Operator precedence
1.	Parenthesis()
2.	Exponents
3.	Multiplication & Division
4.	Addition & Subtraction
 
let students=20;
students=students+1;
students=students-1;
students=students*2;
students=students/2;
extraStudents=students%3;
console.log(students)
students+=1;
students*=2;
*/

/* 4th part 
Input

let username=window.prompt("What's your name");
console.log(username);

let UserName;
document.getElementById("myButton").onclick=function(){
    UserName=document.getElementById("myText").value;
    console.log(UserName);
    document.getElementById("myLabel").innerHTML="Hello"+UserName;
}
*/

/* 5th Part type Conversion
Change of datatype value to one another 
String,number,booleans

let age=window.prompt("How old are you?");
console.log(typeof age);
age=Number(age);
console.log(typeof age);
age=age+1;
console.log("Happy Birthday you are "+age+" years old");

let x,y,z;
x=Number("pizza");
y=String(3.14);
z=Boolean("pizza");
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
*/

/*6th Part Const
7th Part Math function
const= a variable that value cannot be changed

let x=3.14;
let y=5;
let z=9;
let maximum,minimum;
//x=Math.round(x); 3.14 changes to 3
//x=Math.floor(x); 3.14 changes to 3
//x=Math.ceil(x); 3.14 changes to 4
//x=Math.pow(x,2);
//x=Math.sqrt(x);
//x=Math.abs(x); //-3.14 changes to 3.14
minimum=Math.min(x,y,z);
console.log(minimum);
*/

/* 10th Part Strings

let name="  SmitChoksi  ";
let phoneNumber="123-345-5686";
console.log(name.length);
console.log(name.charAt(0));
console.log(name.indexOf("i"));
console.log(name.lastIndexOf("i"));
console.log(name.trim());
console.log(name.toUpperCase());
console.log(name.toLowerCase());
phoneNumber=phoneNumber.replaceAll("-","");
console.log(phoneNumber);

let fullName="Smit Choksi";
let firstName, LastName;
firstName=fullName.slice(0,4);
LastName=fullName.slice(5);
console.log(firstName);
console.log(LastName);
firstName=fullName.slice(0,fullName.indexOf(" "));
LastName=fullName.slice(fullName.indexOf(" ")+1);
console.log(firstName);
console.log(LastName);
*/

/*Part 13 Method Chaining= Calling one method after another in the continuous line of code 
let userName="Bro";
let letter=userName.charAt(0).toUpperCase();
console.log(letter); */

/* Part 14 if Statement a basic form of decision making if a condition is true

function compareAge() {
    // Get the input value and convert it to a number
    const ageInput = document.getElementById("ageInput").value;
    const age = Number(ageInput);

    // Compare the age and display the result
    if (age < 18) {
        document.getElementById("result").innerHTML = "You are underage.";
    } else if (age >= 18 && age < 60) {
        document.getElementById("result").innerHTML = "You are an adult.";
    } else {
        document.getElementById("result").innerHTML = "You are a senior citizen.";
    }
}
*/

/* Part 15 Radio button , Check box
document.getElementById("myButton").onclick=function(){
    const myCheck=document.getElementById("myCheckBox");
    const visa=document.getElementById("visaBtn");
    const masterCard=document.getElementById("masterCardBtn");
    const upi=document.getElementById("upiBtn");
if(myCheck.checked)
{
    console.log("You are subscribed");
}
else
{
    console.log("You are not subscribed");
}
if(visa.checked)
{
    console.log("You are paying with Visa");
}
else if(masterCard.checked)
{
    console.log("You are paying with MasterCard");
}
else if(upi.checked){
    console.log("You are paying using UPI");
}
else
{
    console.log("Please select a Payment Method");
}
}*/

/* Switch and Relational Operator*/

/* Part 16 Loops

let userName="";
while(userName==""||userName==null)
{
    userName=window.prompt("Enter your name");
}
console.log("Hello your Username is "+userName);
*/
/*
for(let i=0;i<20;i++)
{
    if(i==13)
    {
        continue;
    }
    console.log(i);
}
*/
/*let rows=window.prompt("Enter Number of Rows");
let columns=window.prompt("Enter Number of Columns");
for(let i=1;i<=rows;i++)
{
    for(j=1;j<=columns;j++)
    {
        document.getElementById("rectangle").innerHTML+=j;
    }
    document.getElementById("rectangle").innerHTML+="<br>"
}
*/
/*
let area;
let width;
let height;
width=window.prompt("Enter the width");
height=window.prompt("Enter the height");

area=getArea(width,height);
console.log("The area is",area);
function getArea(width,height){
    let result=width*height;
    return result;

}*/
/*
Variable scope=variable where a variable is accessible
let= variables are related to a block scope
var= variables are limited to a function
global variable is generally declared outside any function
 */
/* To localeString()=returns a value with a language sensitive representation of this number*/
