/*const name = 'Joshua';
const  age = 23;

const s = 'Hello world, to, my, job';

console.log(s.toUpperCase());
console.log(s.split(', '));
console.log('Hello, my name is '+name+' and my age is'+ age);*/

//Arrays

const numbers = new Array(1,2,3,4,5,6);

const fruits = ['orange','pears',10,true]

fruits[3] = 'grapes';
fruits.push('mangos');
fruits.unshift('fruit at firts');
fruits.pop(); //delete the last one
console.log(Array.isArray(fruits)); //testing about array
console.log(fruits);

//building an object
const person = {
    first_name: 'Joshua',
    last_name: 'Salinas',
    age: 23,
    hobbies: ['music','games'],
    adress:{
        street: 'unknow',
        city: 'far far away',
        state: 'Mx'
    }
}
//acceding to an array and object
console.log(person.hobbies[0],person.adress.state);

const everyone = [
    {
        id: 1,
        text: 'one text',
        isCompleted: true
    },
    {
        id: 2,
        text: 'second text',
        isCompleted: false
    },
    {
        id: 3,
        text: 'three text',
        isCompleted: true
    }
];

console.log(everyone[1].text);

//parsing this to JSON
const everyoneJSON = JSON.stringify(everyone);
console.log(everyoneJSON);

for(let every of everyone){
    console.log(every);
}
//or same for but old way
for (let i=0; i<everyone.length; i++){
    console.log(everyone);
}

//Class
class Person{
    constructor(firstName, lastName, date){
        this.firstName = firstName;
        this.lastName = lastName;
        this.date = date;
    }

    getBirthYear(){
        return this.date.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person('Joshua','Salinas','19/06/1998');
const person2 = new Person('Francisco','Salinas','10/09/1994');

console.log(person2.getFullName());
console.log(person1);