import {TPerson,TStudent} from "./uPeoples";
import "./style.css"
import TCircle from "./TCircle";
// task 1

// let person = new TPerson(14,"Василий")
// console.log(person.getName())

// task 2

// person = new TStudent(14,"Олег")
// console.log(person.getName())

// task 3

// import Projectile from "./Projectile";
// let mouseIsDown = false;
// let x = 0;
// let y = 0;
// document.body.addEventListener('mousedown',(e)=>{
//     mouseIsDown = true
//     x = e.clientX
//     y = e.clientY
// })
// document.body.addEventListener('mousemove',(e)=>{
//     x = e.clientX
//     y = e.clientY
// })

// document.body.addEventListener('mouseleave',(e)=>{
//     mouseIsDown = false
// })

// document.body.addEventListener('mouseup',(e)=>{
//     mouseIsDown = false
// })

// function getRandomInRange(min:number,max:number){
//     return Math.random() * (max - min) + min;
// }
// function launch(x:number,y:number){
//     let TTL = getRandomInRange(200,2000)
//     let startSize = getRandomInRange(10,30)
//     let endSize = getRandomInRange(0,1)

//     x = x + getRandomInRange(-10,10)
//     y = y + getRandomInRange(-30,10)
//     let Vx = getRandomInRange(-300,300)
//     let Vy = getRandomInRange(-300,300)

//     let projectile = new Projectile({
//         startSize:startSize,
//         endSize:endSize,
//         TTL: TTL,
//         root:document.body!
//     })

//     projectile.launch(x,y,Vx,Vy)
//     setTimeout(()=>{
//         projectile = null
//     },1000)
// }
// setInterval(()=>{
//     if (mouseIsDown) {
//         launch(x,y)
//     }
// },50)

// task 4

let circle1 = new TCircle(document.body,20,20,20)