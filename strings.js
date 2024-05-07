let a = 'Hello';// single quotes
let b = "Nancy";//double quotes
let c = `There`;//template literals
console.log('length', a.length);
console.log('index', a[3]);
console.log('position', a.indexOf('o'));
a[4]='n';
console.log({a});//means string is immutable.

//conacatenation
let d = a+ ' ' +b;
console.log({d});

let e = `${a} ${b}, I like coding`;
console.log({e});

let nme = 'Nancy';
let name2 = 'Nabacwa';
let fullName = `My whole name is ${nme} ${name2}`;//use temperate literals for strings.
console.log({fullName});