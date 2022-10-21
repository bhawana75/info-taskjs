// qn no 1

//Create an object student which has properties name, sclass and rollno.
const student = {
    name: "BhawanaDhamala",
    sclass: "lastsem",
    rollno: 10
};

//a.list the properties of a JavaScript object

var keys = Object.keys(student)
console.log(keys);

// b.delete the rollno property from the following object. Also print the object before or after deleting the property.
console.log(student);
delete student.rollno;
console.log(student);

// c. get the length of a JavaScript object.
studentLength = Object.keys(student).length;
console.log(studentLength);

// qn no 2
// Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.

let radius = 8;
let height = 10;
let volume = Math.PI * Math.pow(radius, 2) * height;
console.log('The volume of a Cylinder is :' +volume.toFixed(4));

//qn no 3
//Write a JavaScript program to create a Clock. Note: The output will come every second.

function clock() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh === 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ clock() }, 1000);
  }
  
  clock();

//qn no 4
// Write a JavaScript function to print all the methods in a JavaScript object.

function FindAllMethods(obj) {
    return Object.getOwnPropertyNames(obj).filter(function(property) {
        return typeof obj[property] == "function";
    });
}
console.log(FindAllMethods(Math));
console.log(FindAllMethods(Array));

//qn no 5
//Write a JavaScript function to convert an object into a list of `[key, value]` pairs.

let obj = { 
    name: "Bhawana", 
    age: 23, 
  } 

  let keys = Object.keys(obj) 
   
  let arr = keys.map((key) => { 
    let kvpair = {}; 
    kvpair[key] = obj[key]; 
    return kvpair; 
  })
  console.log(arr);

  //qn no 6
  //Write a JavaScript function that reverse a number.
  
function revrsnum(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(revrsnum(986128)));

//qn no 7
//Write a JavaScript function that generates all combinations of a string.

let possibleCombinations = (str) =>{
    let combinations = [];
      for(let i = 0 ;i < str.length; i++)
    {
        for(let j = i + 1; j< str.length + 1; j++)
        {
            combinations.push(str.slice(i , j));
        }
    }
   return combinations;
}
console.log(possibleCombinations('Dog'));

//qn no 8
//Write a JavaScript function that returns a passed string with letters in alphabetical order.

function StringToAlphabeticOrder(str)
  {
return str.split('').sort().join('');
  }
console.log(StringToAlphabeticOrder("webmaster"));

//qn no 9
//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

function longest(str){
str = str.split(" ")
return str.sort((a, b) => b.length - a.length)[0].toUpperCase();
}
     
console.log(longest("Web Development Tutorial"))

//qn no 10
//Write a program to Count number of Vowels in String

function countVowel(str) { 

    const count = str.match(/[aeiou]/gi).length;

    return count;
}

const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);

//qn no 11
//Write a function to generate a random number and find the factorial of the random number generated in javascript.

function factorial(n){
    if(n == 0 || n == 1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}
let x = Math.floor(Math.random()* 10);

console.log(`The given Random num is ${x} and It's factorail is ${factorial(x)}`);

//qn no 12
//Write a JavaScript program to check two given numbers and return true if one of the numbers is 50 or if their sum is 50.

function isIt50(x, y) 
{
  return ((x == 50 || y == 50) || (x + y == 50));
}
console.log(isIt50(50, 50))
console.log(isIt50(20, 50))
console.log(isIt50(20, 20))
console.log(isIt50(40, 37))
console.log(isIt50(20, 30))

//qn no 13
//Write a JavaScript program to create a new string with the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.
function upper_lower(str) {
    if (str.length <= 3) {
      return str.toUpperCase();
    }
    front_part = (str.substring(0, 3)).toLowerCase();
    back_part = str.substring(3, str.length);  
    return front_part + back_part;
  }
  console.log(upper_lower("Bhawana"));
  console.log(upper_lower("DHAMALA"));
  console.log(upper_lower("an"));
  console.log(upper_lower("Bee"));

  //qn no 14
  //Create a function which takes a word as a parameter.
  
  let y = parameter(4, 3);


function parameter(a, b) {
  return a * b;
}
console.log(y);

  //a. Create two variables vowels = [] and consonants = []
  var vowels = [];
  var consonants = [];
  
  //b. Insert the character into vowels array if it is vowel and consonant if character is consonant.
var input = prompt("Enter a character:");
if (input == 'a' || input == 'A' || input == 'e' || input == 'E' || input == 'i' || input == 'I' || input == 'o' || input == 'O' || input == 'u' || input == 'U') {
console.log("Its a vowel");
} else if ((input >= 'a' && input <= 'z') || (input >= 'A' && input <= 'Z')) {
  console.log("Its a consonant");
} else {
    console.log("Invalid input please enter an alphabet");
 }
  
  //c. Arrange the elements of array in ascending array.
  let animals = [
    'cat', 'dog', 'elephant', 'bee', 'ant'
    ];
animals.sort();

console.log(animals);
  