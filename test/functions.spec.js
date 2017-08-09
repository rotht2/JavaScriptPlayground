"use strict";
/** Writing tests
 *  Tests in JavaScript are often times called 'specs'. Specs have 3 main parts to them:
 *    - describe: describes the functionality that we are going to be testing
 *    - it: a human readable way to describe what this specific test is doing
 *    - assert.*: assertions that must be correct, often times they are boolean expressions
 * 
 *  I prefer to use TDD, so I often have my test open on the left side of my screen and the source code I am
 *  implementing on the left.
 */

var assert = require('assert');
var functions = require('../javascripts/functions.js');
// console.log(`TWRR >> typeof functions ${typeof functions}, functions=${functions.add(1,2)}`)

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('Test functions.js', function(){
 it('shoud add 2 and 2', function(){
    assert.equal(functions.add(2,2), 4);
 });
});