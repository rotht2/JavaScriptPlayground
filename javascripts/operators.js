"use strict";
/** Operators
 *  operand is what the operator is applied to
 *  unary operator implies one operand
 *  binary operator implies two operands
 * 
 *  String concatenation will always take precidence with the binary '+' operand
 *    - So no matter what object types are being added, if one of them is a string the string will
 *      all be concatenated together.
 */
console.log("This is an example of " + 2 + " concatenated strings");
console.log("-----------------------------------------------------------------------");

 /**
 *  Numeric conversion with unary +
 *    - prefixing a variable or another object with a plus will convert it to a number
 *    - 
 */
let stringNum = "24"
console.log(`this is an example of the unary plus typeOfStringNum=${typeof stringNum} typeOfPlusStringNum=${typeof +stringNum}`);
console.log("-----------------------------------------------------------------------");

/** Assignment operator
 *  The '=' or assignment operator assigns a value to a variable and then returns it.
 */
let num;
console.log(`result of assignment=${num = 3+4}`);
console.log("-----------------------------------------------------------------------");

/** Mod/Remainder operator
 *  Works just like I know it to operate, returns the remainder of the division of the binary operation
 */
console.log(`result of 13 % 2=${13 % 2}`);
console.log("-----------------------------------------------------------------------");

/** Exponential operator
 *  The '**' operator is a way to mention exponents in JavaScript
 */
console.log(`result of 2^4=${2**4}`);
console.log("-----------------------------------------------------------------------");

/** Increment/Decrement
 *  The '++' and '--' operator will increment by one a variable or decrement a variable by one
 *  A nuance with this is that the position of the unary operation MATTERS.
 *  when the unary operator is put AFTER the variable the OLD value is returned 
 *  when the unary operator is put BEFORE the variable the NEW value is returned
 */
num = 1;
console.log(`num=${num} num++=${num++} now num=${num}`);
console.log(`num=${num} ++num=${++num} now num=${num}`);
console.log("-----------------------------------------------------------------------");

/** In place operators
 *  The '+=' and '*=' operator will perform the current value of the variable plus, or times some other value
 *  and then store it back into the original variable
 */
console.log(`num=${num} (num*=2)=${num*=2}`);
console.log(`num=${num} (num+=2)=${num+=2}`);
console.log("-----------------------------------------------------------------------");

/** Comma operator
 *  The ',' operator has very low precedence, but allows us to do multiple calculations on one line
 *  HOWEVER the caveat to this is that only the last calculation is returned
 *  But we can assign many values at once using this short hand notation
 *  Also it is useful to note that the precedence of this operation is even lower than the assignment operator
 */
let a;
let b;
let c;
console.log(`result=${(a=1, b=2+1, c=3+2)} a=${a} b=${b} c=${c}`);