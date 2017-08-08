console.log("this is a js file console.log output..");

/** JavaScript traditionall requires a semi colon at the end of a line.
 *  Now JavaScript can insert a semicolon on the fly when they are needed
 *  But like in English this rule can be broken.. 
 *  TODO TWRR pick this up with a sample tomorrow. 
*/ 
console.log("This is an example of a JavaScript message that does not need a semicolon");
console.log("This is an example of a" + 
            "JavaScript line that does require a semicolon");

/* The following example shows a multiline statement that requires a semicolon.
*  The wierd exception to the rule is that JavaScript wont add a semicolon before a set of []
*  So to see a failure remove the semicolon on the console.log line right before the loop.
*
*  This example shows the starts of a callback function, which is a big component of JavaScript. 
*/ 
console.log("This should be fine");
[1, 2].forEach(function(){
    console.log("print this message twice")
});