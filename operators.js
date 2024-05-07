//arithmetic
let a = 20;
let b = 30;
let add = a+b;
console.log({add});

let subtract = a-b;
console.log({subtract});

let division = a/b;
console.log({division});

let modulus = a%b;
console.log({modulus});

let multiplication = a*b;
console.log({multiplication});

//comparison
//loosely equal to
let c = '20';
let looselyEqualTo = a == c;
console.log({looselyEqualTo});

//strictly equal to
let strictlyEqualTo = a === c;
console.log({strictlyEqualTo});

//not equal to( opposite of loosely equal to)
let notEqualTo = a != c;
console.log({notEqualTo});

//checks for opposite of strictly equal to 
let strictlyNotEqualTo = a !== c;
console.log({strictlyNotEqualTo});

//increment and decrement
 a++;
 console.log('increment', a);
 b--;
 console.log('decrement', b);

 let compound = a += b;
 console.log({compound});

 //checking datatype of variable
 console.log('b',typeof b);
 console.log('c', typeof c);

 //implicit coersion
 let d = a * c;
 console.log({d});
 console.log('d', typeof d);

 //explicit coersion
 console.log({c});
 let e = Number(c);
 console.log({e});
 console.log('c', typeof c);

 /*does not change datatype of c but makes new variable the datatype of number 
 ie taking c and putting it in new variable as a number and not a string*/
 let f = +c;
 console.log({f});

 

