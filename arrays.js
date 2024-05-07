let fruits = ['Mango','Apple','Banana','Orange'];

let array = new Array(20,30,6,7);

console.log({fruits});
console.log({array});

fruits[1]=3;
console.log({fruits});

console.log('length',fruits.length);
console.log(fruits[20])
console.log('last',fruits[fruits.length-1])

//Array methods
let addLast = fruits.push('Kiwi');//add as last item
console.log({fruits});
let addFirst = fruits.unshift('Pawpaw');//add as first item
console.log({fruits});
let removeLast = fruits.pop();//removes last item
console.log({fruits});
let removefirst = fruits.shift();
console.log({fruits});//removes first item

let items = [20,30,40,50,60]
let add = items.reduce((acc,curr) => acc + curr)
console.log(add)

let multiply = items.map(item => item*2);
console.log(multiply)

let addEach = items.forEach(item=>item+2);
console.log({addEach})//cannot return array but rather returns undefined.


let eachAdd =[];
let total = 0;//initial start total
 items.forEach((item) =>{
    const add = item+2;
    console.log({add});
    eachAdd.push(add);
    total += item;
});
console.log({eachAdd})
console.log({total});

//Destructuring
//let[num1,num2,num3,num4]= items;//giving array with nums to items array
let[num1,num2,num3, ...rest]= items;//putting the remaiing items in the array
console.log({num1});
console.log({num2});
console.log({num3});

console.log({rest});


