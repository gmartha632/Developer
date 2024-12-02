
let score = 0 //intialization
score = 10 // assignment
console.log("Your score is" + " " + score);


//User input 
//  let name = prompt("What is your name ?")
//  console.log("Hi",name)

// let tickets = prompt("How many tickets do you want ?")
// console.log("You should pay " ,Number(tickets)*20) ;

// let a = prompt("Enter a number")
// console.log(a+10)


// let message = document.getElementById("message")
// message.innerText = "Welcome to our website"

// Cm to inches calculator

function convert() {


    let cmVal = Number(document.getElementById("input").value)
    let inchVal = cmVal / 2.54
    let result = document.getElementById("result")
    result.innerHTML = inchVal.toFixed(2) + "inches"
}


// cos 90 
let cosine = Math.cos(90 * Math.PI / 180).toFixed(15)
console.log(cosine)

// Dice game
let dice = Math.floor(Math.random()*6)+1
//let dice = Math.floor(Math.random()*100)+1  // if we want random numbers between 1 to 100 
console.log(dice) ;

// Random letter from name
let name = "Maruthamuthu"
console.log(name[Math.floor(Math.random() * name.length)])


//Array

let arr= [80,90,95,98,86]
console.log(arr[arr.length - 1]) ;

//Matrix (Multidimensional array)
let matrix = [[3,4,5],[6,7,8],[9,10,11]]
console.log(matrix[0][1])

//Push
let alphabet = ["a","b","c","d","e"];
// console.log(alphabet.push("f"))
// console.log(alphabet.push("g"))

//splice
alphabet.splice(2,2)
console.log(alphabet)

alphabet.splice(2,2,"m")
console.log(alphabet)

alphabet.splice(2,2,"x","y")
console.log(alphabet)
