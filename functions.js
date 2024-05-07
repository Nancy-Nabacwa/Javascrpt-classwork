function add(num1,num2){
    const sum = num1 +num2;
    console.log({console: sum});
    return {'return': sum}
}
console.log(add(2,3));//callback function is function a function that is taken as an argument by another function
add(4,5);

//function experession another way of writing function
const subtraction = function(num1 , num2){//use undefined function ie function without a name.
    console.log(num1 - num2);
}
subtraction(20,10)

//array functions
const multiply = (num1,num2)=>{
    console.log(num1*num2)
}
multiply(20,30);

//IIFEs

(function(){
    console.log('hello')
})()

//Hoisting with variables
console.log({greet});
var greet = 'Hello there';//if you use a let&const u cannot hoist so always use a var
console.log({greet2:greet});

//Hoisting with function
function person(){
    console.log('Hello there I am a person');
}