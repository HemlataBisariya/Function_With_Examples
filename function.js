// ------------------------------------IIFE function-----------------------------//
console.log("//--------------------------IIFE function-------------------------//");
// example1
console.log("example -> 1");
(function () {
    let myName = "My name is Hemlata";
    console.log(myName);
})();

// example2
console.log("example -> 2");
(function () {
    let like = "I love JavaScript"; 
    console.log(like);  
})(); 

// ---------------------------------function expression-------------------------//
console.log("//-----------------------functions Expression----------------------//");
// example1
console.log("example -> 1");
var addTwoNumbers = function (a,b) {
	return a + b;
}

let sum = addTwoNumbers(10, 20)
console.log("sum => " + sum);

// example2
console.log("example -> 2");
const getRectArea = function(width, height) {
    return width * height;
};

let rectangleArea = getRectArea(2, 5);
console.log("Area of Rectangle => " + rectangleArea);


//---------------------------------------- naming function------------------------
console.log("//--------------------------naming function-------------------------//");

// example1
console.log("example -> 1");

function multiplication(a, b) {
  return a * b;             
}

let  multiResult = multiplication(10, 20);   

console.log("Multiplication => " + multiResult); 

// example2
console.log("example -> 2");

function AreaOfRectangle(length, width){
    return length * width;
}

let areaOfRectangleResult = AreaOfRectangle(15, 20) ;

console.log("Area of Rectangle => " + areaOfRectangleResult); 



// ---------------------------------------arrow functon-------------------------//
console.log("//--------------------------Arrow function-------------------------//");
// example1
console.log("example -> 1");
let names = ["Hemlata", "Tineshwar", "Shivam", "Mahima", "Bhatia", "Disha"];

let getNames = names.map(n => {
    console.log(n);
});



// ---------------------------------------callback function--------------------------//
console.log("//--------------------------callback function-------------------------//");
// example1
console.log("example -> 1");

function printName(name) {
     console.log("My name is " + name);
};

function getName(callback) {
    let name = "Hemlata";
    callback(name);
};

console.log(getName(printName));

console.log("example -> 2");


//   example2
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let oddNumbers = numbers.filter(function(num) {
    return num % 2;
});

console.log("odd numbers => " + oddNumbers);


// ---------------------------------------Anonymous function------------------------//
console.log("//--------------------------Anonymous function-------------------------//");
// example1
console.log("example -> 1");
let show = function () {
    console.log("Anonymous Function - 1");
};
show();

// example2
console.log("example -> 2");
let display = function(){
    console.log("Anonymous Function - 2")
};
display();

//-------------------------------------- function with  default parameter------------//
console.log("//-------------------function with default parameter-------------------//");
// example1
console.log("example -> 1");
function MyName(First_Name ="Hemlata" , Last_Name = "Bisariya", Age = 22){
    return {First_Name , Last_Name, Age};
};

console.log(MyName());

// example2
console.log("example -> 2");
function Substraction(a = 100, b = 70) {
    return a - b;
};

console.log("Substraction => " + Substraction());

//------------------------- function with parameter---------------------*/
console.log("//----------------function with parameter------------------//");
// example1
console.log("example -> 1");
function employee(name, age, company, salary){
    return{name, age, company, salary};
}
console.log(employee("Hemlata", 22, "TCS" ,30000));

// example2
console.log("example -> 2");
function areaOfSquare(length){
    return(length * length);
}
console.log("Area of Square => " + areaOfSquare(5));


//----------------------------------------reverse a string------------------------------*//
console.log("//--------------------------reverse a string--------------------------//");
// example
console.log("example -> ");
function revString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
let string1= 'Hemlata';
let result1 = revString(string1);
console.log(result1);


// ----------------------check the number is even or odd--------------------------------*/
console.log("//--------------------check the number is even or odd--------------------//");

console.log("example -> ");
let number = 50;

if(number % 2 == 0) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}


//---------------------------check the number is prime or not---------------------------//
console.log("//--------------------check the number is prime or not--------------------//");
console.log("example -> ");

function isPrime(num) {

    if (num === 2) {
      console.log("number is prime number");
    }
    else if(num > 1) {
      for (var i = 2 ;  i < num/2 ; i++) {
        if (num % i !== 0 ) {
            console.log("number is prime number");
        }
        else if (num === i * i) {
            console.log("number is prime number");
        }
        else {
            console.log("number is not a prime number");
        }
      }
    }
    else {
        console.log("number is not a prime number");
    }
}

console.log(isPrime(11));

//-----------------------------------------palindrome or not---------------------------*//
console.log("//---------------------------palindrome or not----------------------//");
// example
console.log("example -> ");
function Palindrome(str) {
    let len = string.length;

    for (let i = 0; i < len / 2; i++) {

        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
let string = 'level';
let value = Palindrome(string);
console.log(value);

//----------------------------------------find biggest among three---------------------------*//
console.log("//--------------------------find biggest among three number----------------------//");
// example
console.log("example ->");
let num1 = 10;
let num2 = 20;
let num3 = 30;
let largest;

if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}
console.log("The largest number is " + largest);


//----------------------------------------factorial of a number---------------------------*//
console.log("//--------------------------factorial of a number----------------------//");
// example
console.log("example -> ");
let numb = 7;
let fact = 1;

for (i = 1; i <= numb; i++) {
    fact *= i;
}
console.log("The factorial of " + numb + " = "+fact);