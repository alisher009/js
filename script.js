
let user = {
    name: 'Alisher',
    surname: 'morgenshtern',
    age: 17,
    isMarried: true,
}
let additionInfo = {
    hairColor: 'black',
    height: 180,
    arrid: [],
    money: null,
    width: NaN,
    wife: undefined
}


// ----- номер-1------//
let value = Object.values(user)
console.log(user)
// ----- номер -2-----//
let entries = Object.entries(user)
console.log(entries);

// ------- номер-4-----//

let objAll = Object.assign(user, additionInfo)
let values = Object.values(objAll)

let num = []
let bool = []
let str = []
let obj = []


values.filter(item => {
    if(typeof(item) == 'number') {
        num.push(item)
    } else if(typeof(item) === 'string') {
        str.push(item)
    } else if (typeof(item) === 'object') {
        obj.push(item)
    } else if(typeof(item) === 'boolean') {
        bool.push(item)
    }
})


console.log(num.length, 'num',bool.length, 'bool',str.length, 'str',obj.length, 'obj'); 

let  Alisher = num.length + bool.length + str.length + obj.length

console.log(Alisher);

let Ali = num.length * 100 / Alisher 

console.log(Ali);


let Ali1 = bool.length * 100 / Alisher 

console.log(Ali);


let Ali2 = str.length * 100 / Alisher 

console.log(Ali);

let Ali3 = obj.length * 100 / Alisher 

console.log(Ali, Ali1, Ali2, Ali3 );

