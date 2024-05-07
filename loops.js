const multiplyTwo = (num)=>{
    let newArray = [];

    for(let i=0; i<num.length; i++){
        const result = num[i]*2;
        newArray.push(result);
    }
    return newArray;
}
console.log(multiplyTwo([0,4,6,8,7,3,9]));


let totalSum = (num =>{
    let sum = 0;
    for(let element of num){
        sum+=element;
    }
    return sum;
})

console.log(totalSum([1,2,3,5,6,89,]))

/*const teachStudents = (students) =>{
    while(students.length>=2){//infinity loop never stops
        console.log('Teach students');
    //    students.pop();//stops the for loop

    if(students.includes('John')){
        continue;
    }

    if(students.includes('Monica')){
        break;
    }
    }
}
teachStudents(['Max','Nancy','Syrus','Monica','John'])*/

const childrenNames = (children)=>{
    do{
        console.log ('There are many children')
    }
    while(children.length > 5)
}
childrenNames(['Max','Anita','John','Evans','Monica'])

const checkDayOfWeek = (day)=>{
    switch(day){
        case 'Monday':
            console.log('Today is Monday');
            break;
            case 'Tuesday':
                console.log('Today is Tuesday');
                break;
                default:
                    console.log('The day is not listed');
    }
}
checkDayOfWeek('Monday')