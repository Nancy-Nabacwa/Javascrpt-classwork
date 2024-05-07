function Person(name,age){
    this.name = name;
    this.age = age;
    this.greet = ()=>{
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old`)
    }
}
const adam = new Person('Adam',30);
    console.log({adam})
    adam.greet()

    const eve = new Person('Eve', 25);
    console.log({eve})
    eve.greet()
    eve.children = ['Cain','Abel','Seth']
    console.log({eve})
    console.log({adam})

    console.log('protype:',Person.prototype)

    Person.prototype.skincolor = 'black'
    console.log('skin-color',adam.skincolor)

    adam.skincolor = 'white'
    console.log({adam});
    console.log('eve:', eve.skincolor)


    function findShortest(books){
        let shortestTitle = '';
        let shortestPages = Infinity;
        for (const book of books){
            const {title, pages} = book 
        }

    }