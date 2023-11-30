let score = "33abc";
let run = null
let play = undefined
//console.log(typeof score);
let valueIn_number = Number(score);
console.log(typeof valueIn_number);
console.log(score)

let valueIn_number2 = Number(run);
console.log(typeof valueIn_number2);
console.log(valueIn_number2);

let valueIn_number3 = Number(run);
console.log(typeof valueIn_number3);
console.log(valueIn_number3);

// "33" = 33
// "33abc" = nan
// true = 1,false = 0
let sumnumber = 33
let stringnumber = String(sumnumber)
console.log(stringnumber);
console.log(typeof stringnumber)



///// opertaion ///
let v1 = 3
let nev1 = -v1
console.log(nev1)

let str1 = "yes"
let str2 = "  sir"
let str3 =  str1 + str2;
console.log(str3);

console.log(2+2+"3")  
// 43 
console.log("2"+2+"3")
// 223 
console.log("2"+2+3) 
//  223

//***********increment/decrement***********

let c = 20;
let d = c++;

console.log(`c:${c},d:${d}`); // 21 , 20 
let e = --c;
console.log(`e:${c},d:${d}`); // 20 , 20
let f = e++ + --d;
console.log(`f:${f++},d:${--d}`); //39, 18
let s = --f;
console.log(`c:${s},s:${--d}`); //39 , 17 
let p = --s
console.log(`p:${p++},d:${--d}`); // 38 , 16