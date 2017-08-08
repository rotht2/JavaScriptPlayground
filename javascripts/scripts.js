// Modern JavaScript requires the following directive "use strict"
"use script";

/** In the old days of JavaScript the var keyword was used to define a variable
 *  Now the let keyword is used to define variables
 */
let message = "This is an example of... "

/** There are also constant (finals) that can be declared with the const command */
const SEMICOLON = "semicolon"

/** JavaScript traditionall requires a semi colon at the end of a line.
 *  Now JavaScript can insert a semicolon on the fly when they are needed
 *  But like in English this rule can be broken.. 
 *  TODO TWRR pick this up with a sample tomorrow. 
*/ 
console.log( message + "JavaScript message that does not need a " + SEMICOLON);
console.log( message + 
            "JavaScript line that does require a " + SEMICOLON);

/** The following example shows a multiline statement that requires a semicolon.
 *  The wierd exception to the rule is that JavaScript wont add a semicolon before a set of []
 *  So to see a failure remove the semicolon on the console.log line right before the loop.
 *
 *  This example shows the starts of a callback function, which is a big component of JavaScript. 
*/ 
console.log("This should be fine");
[1, 2].forEach(function(){
    console.log("print this message twice")
});