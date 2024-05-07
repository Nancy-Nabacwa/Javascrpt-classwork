const cup = {
    color:"red",
    size:"small",
    shape:"cylindrical",
    functionality:{
        drinkType:"Teas",
        temperature:"hot"
    },
    design:['floral','polka','checked'],
    drink:()=>{
        console.log('use me to drink tea');
        console.log(`My main use is to drink ${cup.functionality.drinkType}`)

    }
    //or using the function keyword
    // drink:function(){
    //     console.log('use me to drink tea');
    //     return (`My main use is to drink ${this.functionality.drinkType}`)
    // }

};
console.log("size:",cup.size);//dot notation
console.log({design:cup.design[1]})
console.log('shape:',cup['shape'])//bracket notation
console.log('drinkType:',cup.functionality.drinkType)
cup.drink()
//console.log(cup.drink())

delete cup.color;
console.log({cup})//deletes property from object

const values = Object.values(cup)
console.log({values})

const keys = Object.keys(cup)
console.log({keys})

Object.keys(cup).forEach(item =>{
    console.log({key:item , value:cup[item]})
})