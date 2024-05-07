class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old`)
    }
}
const Jane = new Person('Jane',90);
console.log({Jane})
Jane.greet()

Person.prototype.nationality = 'Kenyan';
Person.prototype.eating = ()=>{
    console.log('Hey I am eating food')
}
console.log('nationality',Jane.nationality)
console.log('eat',Jane.eating)

class student extends Person{
    constructor(name,age,school){
        super(name,age);
        this.school = school
    }
    profession(){
        console.log(`Hey I am a student at ${this.school}`)
    }
}

const nancy = new student('Nancy',89,'AkiraChix');
console.log({nancy});
console.log('nancy nationality:', nancy.nationality)