"use strict";
/** JavaScript variables are dynamic, meaning that at anytime a variable can change its typing
 *  Example: a variable can be defined to equal a number and later be set to equal a string
 */
let num = 100;
num = "No longer a number"
console.log(num);

/** There are 7 JavaScript types:
 *    - Number
 *    - String
 *    - boolean
 *    - null
 *    - undefined
 *    - object
 *    - symbol
*/

/** Number
 *  A number serves both floating point numbers and integers
 *  There are 2 "special" Numbers that belong to the number type.
 *    - Infinity: Represent mathematical infinity, a number that is greater than any number
 *    - NaN: Represents a computational error
 *   Mathematical operations are safe in JavaScript and will not cause the script to stop with a fatal error
 *   Worst case scenario we will see a NaN, for example if we divide a string by a number
 */
num = 123;
console.log("int representation: " + num);
num = 1.23;
console.log("float representation: " + num);
console.log("computational error: " + ("batman"/num));
console.log("infinity representation: " + Infinity);
console.log("infinity representation: " + (1/0));
console.log("-----------------------------------------------------------------------");

/** String
 *  All strings in JavaScript must be quoted. There are 3 types of quotes:
 *    - ""
 *    - ''
 *    - ``
 *   Double quotes and single quotes are interprated the same by the compiler
 *   Backticks grant extended functionality of the string, an example of this extended functionality is string interpolation
 */
let snglStr = 'This is a string'
let dblStr = "This is a string"
console.log(snglStr + " = " + dblStr);
console.log(`Using interpolation this time.. ${snglStr} = ${dblStr}`)

/** boolean
 *  logical boolean has only 2 values true or false
 *  You can get the result of a comparison as a boolean and save it
 */
let result = 4 > 1
console.out(`is 4 greater than 1? result`);