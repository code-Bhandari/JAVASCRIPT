"use strict"; // treat all JS code as newer version
console.log(3+2);
console.log(2+2);

/* 
number => 2 to power 53
bigint
string = " "
boolean = true/false
null = standalone value / khaaali hia (object)
undefined => (undefined)
symbol = unique
object

*/
let name = "lappy"; 
console.table([typeof null , typeof undefined, typeof "laap",typeof 2121 , typeof Symbol , typeof Number, typeof false]);
/*
┌─────────┬─────────────┐
│ (index) │   Values    │
├─────────┼─────────────┤
│    0    │  'object'   │
│    1    │ 'undefined' │
│    2    │  'string'   │
│    3    │  'number'   │
│    4    │ 'function'  │
│    5    │ 'function'  │
│    6    │  'boolean'  |
-------------------------_
*/