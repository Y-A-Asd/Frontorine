// Q1
// RESOURCES:
// https://stackoverflow.com/questions/3154454/what-is-the-most-efficient-way-to-calculate-the-least-common-multiple-of-two-int
// https://www.geeksforgeeks.org/program-to-find-gcd-or-hcf-of-two-numbers/
// WHAT THE F IS THIS ALGORITHM ????
// I'm using arrow func and normal func as practice and i use most efficient algorithm

// function gcd(a, b){
//     if(b === 0){
//     return a;
//   }
//   return gcd(b, a % b);
// }
// let lcm = Function('a','b','return a * b/ gcd (a,b)')
//
// let a = + prompt('a:')
// let b = + prompt('b:')
//
// alert(`lmc: ${lcm(a,b)} , gcd: ${gcd(a,b)}`)


// Q2
// RESOURCES:
// https://stackoverflow.com/questions/48350607/how-to-replace-set-or-group-of-characters-with-string-in-python
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
// https://www.geeksforgeeks.org/javascript-program-to-replace-multiple-characters-in-a-string/

// function replaceWithMap(str) {
//     const replaceMap = {
//         'a': '$',
//         'z': '#',
//         'M': '*',
//         'D': '@'
//     };
//     return str.split('').map(char => replaceMap[char] || char).join(''); // ?? mishod
// }
//
// let str = prompt("put some thing here:")
// alert(replaceWithMap(str))


// Q3

// function des(num, char){
//     for (let i = 0; i < num; i++){
//         console.log(`${char}`.repeat(i+1))
//     }
// }
// let num = prompt("put a number: ")
// let char = prompt("put a character: ")
//
// des(num, char)

// Q5
// Resources
// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
//
// let rand = Math.floor(Math.random() * 100 )+ 1;
// console.log(rand)
// for (let i = 0; i < 8; i++){
//     let choice = + prompt("put your number")
//     if (choice == rand){
//         alert("win")
//         break;
//     }
//     else if(choice < rand){
//         alert("up")
//     }
//     else{
//         alert("down")
//     }
// }


// Q6

// let calc = (numb) => {
//     let sum = 0
//     for (i of numb.split('')){
//         sum += Number(i)
//     }
//     console.log(sum)
//     if(String(sum).length > 1){
//         return calc(String(sum))
//     }
//     else{
//         return sum
//     }
// }
// let numb = prompt("put some thing: ")
// alert(calc(numb))


// Q7

// let fact = (numb) => {
//     let mul = 1
//     do{
//         mul *= numb
//         numb--
//     }while(numb > 0)
//     alert(mul)
// }
// let input = + prompt('put some number')
// fact(input)

// Q8

function fibb(numb){
    let f1 = 0
    let f2 = 1
    let f3 = 0
    numb >= 1 ? console.log(f2) : null;
    while(numb > 1){
        f3 = f1 + f2
        console.log(f3)
        f1 = f2
        f2 = f3
        numb--
    }
}
let input =  + prompt('put some number')
fibb(input)