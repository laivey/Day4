/*=========================================================
 Part 1: Variables
*/
 var givenName;
// Q: What value is stored in `givenName` right now?
// A:undefined

givenName = "Brett";
// Q: What is `givenName` set to now?
// A: Brett

givenName = givenName;
// Q: What is `givenName` set to now?
// A: Brett

console .log( "Hello," + " " + givenName + " " + "how are you" + "?");

/*=========================================================
  Part 2: Simple Math
  */
  var high = 50;
  var low  = 10;

  var math = high - low;
  // Q: What is `math` set to?
  // A: 40

  math = high - "5";
  // Q: What is `math` set to?
  // A:45

 // Using the `high` & `low` Variables, work through each of the 4 math operators below and log the answers to the console.
 // Write Code Below:
console .log (high - 5);
console .log (high + 5);
console .log (low - 5);
console .log (low + 5);

/* =========================================================
     Part 3: Expressions
    */
    // Create a variable to calculate your age
    // The answer should read "NAME is XX years old"
    // The answer should not be written in a comment.
    var born = 1986;
    var today = 2017;

    // Answers Below:

    // Store some information following in variables.
    var yourName = "LeighAnne";
    var instructorName = "Briana";

    // Update the variables above so the expression reads correctly.
    // Answers Below:


    // Final Statement
    var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;

    console .log (yourName + " " + "is taking a class at the iron yard, my instructor's name is" + " " + instructorName);


  var firstName = "Julia";
   var lastName = "Roberts";
   var fullName = firstName + lastName;

   console.log(fullName);

   var yearBorn = 1975;
   var currentYear = 2016;
   var age = currentYear - yearBorn;

   console.log(age);
