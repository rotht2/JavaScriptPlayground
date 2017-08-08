"use strict";
/** Functions:
 *  I skipped over the basic function declaration in JavaScript since it is something that is found in
 *  many other programming languages.
 *  However something that I have struggled with are the JavaScript call backs, and how you can pass
 *  a function into a variable and call the new variable to call the function. It has really messed with my head
 * 
 *  All in all you really shouldn't assign a variable to another variable, unless you are passing it
 *  into another method as a parameter, but in my experience i see this done as a parameter of the parent function
 * 
 *  So I can store a function into a variable and call that function via the variable name with ()
 *  whenever that variable is referenced with a () then it will execute the function that variable is set to
 *  BUT if the parenthesis are left off then the FUNCTION is returned.. yeah the whole thing.
 */
let variableStoredFunction = function(){
    console.log("I just created a function that can be called by using 'variable()'");
};
variableStoredFunction();
// My internal conflict is, why wouldnt I just name my function variable from the gitgo?
function variableFunction(){
    console.log("Like this does the same exact thing but not really...");
}
variableFunction();

/** Callback functions:
 *  Alright now I am getting a little nervous.. this is like the first boss that I wanted to beat when it comes
 *  to learning JavaScript.. So it is only fit that I learn it at the end of the day, right?
 *  
 *  here we go...
 *  Well it seems like this is the EXACT reason why JS allows you to pass functions as direct variable references
 *  So I could have a function that takes 3 args, 
 *    - the first is a value I wish to compare against
 *    - the second is the truthy path function to call
 *    - the third is the falsey path funtion to call
 */
function isGreaterThan5(value, yes, no){
  if( value > 5 ){
      yes();
  }
  else{
      no();
  }
}

function yes(){
    console.log('yes, the answer is yes!!');
}

function no(){
    console.log('no way, Jose');
}

// note by NOT using the parenthesis here I am not passing the result of the function to this method but the function itself.
isGreaterThan5(4, yes, no);

/** Declaration vs expression
 *  A function that is declared is immediately usable in the script/code block, while a function that has been
 *  assigned or "expresesd" is only available when the compiler gets evaluating the expression to set a variable to.
 *  
 *  The arrow..
 *  An arrow can be used to create a function expression in a short hand notation.
 */
let sum = (a,b) => a + b; 