"use strict";
/** Comparisons
 *  Comparisons always return a boolean value based on the comparison that was performed.
 *  You can have mathematical comparisons, String comparisons, comparisons by different types
 */

 /** Mathematical comparisons
  *  Basic mathematical comparisons.. examples to follow
  */
console.log(`2 > 1 ${2 > 1}`);
console.log(`2 < 1 ${2 < 1}`);
console.log(`2 == 1 ${2 == 1}`);
console.log(`2 != 1 ${2 != 1}`);
console.log("-----------------------------------------------------------------------");

/** String comparisons
 *  Compares if one string is greater than the other with
 *  walks down the characters of each string and compares them, if the value of a character in string a is greater than string b
 *  then string a is greater than string b 
 *  I believe that the comparison is based on the ascii values of the characters
 *  If one word is longer than another then it is by definition greater
 */
console.log(`"foo" > "bar" = ${"foo" > "bar"}`);
console.log(`"foo" > "food" = ${"foo" > "food"}`);
console.log("-----------------------------------------------------------------------");

/** Comparing different types
 *  It is possible to compare different types. And often times one of the types will be converted
 *  to the other type in order to complete the comparison
 */
console.log(`"2" > 1 = ${"2" > 1}`);
console.log("-----------------------------------------------------------------------");

/** Strict equality
 *  '===' will compare if the two values are EXACTLY equal. for example 0 == false will return true
 */
console.log(`0 == false = ${0 == false}; 0 === false = ${0 === false}`)
console.log("-----------------------------------------------------------------------");

