import {TPerson, TStudent, TTeacher} from "./uPeoples";
import TCircle from "./TCircle";
import TRect from "./TRect";
// task 1

// let person = new TPerson(14,"Василий")
// console.log(person.getName())

// task 2

// person = new TStudent(14,"Олег")
// console.log(person.getName())

// task 3
// import "./style.css"
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


//task 2
// let inpSurname = document.createElement('input')
// let inpGroup = document.createElement('input')
// let fieldset = document.createElement("fieldset")
// let radio1 = document.createElement('input')
// let btnAdd = document.createElement('button')
// let btnList = document.createElement('button')
// let list = document.createElement('div')
// btnAdd.innerHTML = "Добавить"
// btnList.innerHTML = "список"
// radio1.type = "radio"
// radio1.name = "group1"
// radio1.value = "Студент"
// radio1.checked = true
// let radio2 = document.createElement('input')
// radio2.type = "radio"
// radio2.name = "group1"
// radio2.value = "Преподаватель"
//
// fieldset.append(radio1)
// fieldset.append("Студент")
// fieldset.append(radio2)
// fieldset.append("Преподаватель")
//
//
// fieldset.append()
// document.body.append('Фамилия:');
// document.body.append(document.createElement('div'))
// document.body.append(inpSurname);
// document.body.append(document.createElement('div'))
// document.body.append('Группа или кафедра:');
// document.body.append(document.createElement('div'))
// document.body.append(inpGroup);
// document.body.append(fieldset);
// document.body.append(btnAdd);
// document.body.append(btnList);
// document.body.append(list)
//
// let teachers:TTeacher[] = [];
// let students:TStudent[] = [];
//
// btnAdd.addEventListener('click',()=>{
//     let person
//     if (radio1.checked) {
//         person = new TStudent(0,inpSurname.value)
//         person.setGroup(inpGroup.value)
//         students.push(person)
//     }
//     else {
//         person = new TTeacher(0,inpSurname.value)
//         person.setKaf(inpGroup.value)
//         teachers.push(person)
//     }
// })
//
// btnList.addEventListener("click", ()=>{
//     list.innerHTML = ''
//     teachers.forEach((person)=>{
//         list.innerHTML+= "Имя: "+person.getName() + "; Кафедра: "+  person.getKaf()
//         list.innerHTML+= '<br>'
//     })
//     students.forEach((person)=>{
//         list.innerHTML+= "Имя: "+person.getName() + "; Группа: "+  person.getGroup()
//         list.innerHTML+= '<br>'
//     })
// })
// task 4
// let rect = new TRect(document.body,40,60,40,40)
// let rect2 = new TRect(document.body,80,80,40,40)
// let circle1 = new TCircle(document.body,20,50,20)
// task 5

// let canvas = document.createElement('canvas') as HTMLCanvasElement
// let ctx = canvas.getContext('2d')
// canvas.width = 1000
// canvas.height= 600
//
// let r = 30
// let start = [10,10]
// let end = [100,100]
//
//
// function draw(){
//     ctx.fillStyle = "white"
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
//     ctx.beginPath()
//     ctx.moveTo(start[0],start[1])
//     ctx.lineTo(end[0],end[1])
//     ctx.stroke()
//     ctx.closePath()
// }
// draw()
//
// let mouseIsDown = false
// canvas.addEventListener('mousemove',(e)=>{
//     if ((e.offsetX - (end[0]+ start[0])/2)**2 + (e.offsetY - (end[1]+start[1])/2)**2<= r**2) {
//         canvas.style.cursor = "grab"
//         if (mouseIsDown) {
//             end[0] += e.movementX;
//             end[1]+= e.movementY;
//             start[0] += e.movementX;
//             start[1] +=e.movementY
//             draw()
//         }
//     }
//     else if ((e.offsetX - end[0])**2 + (e.offsetY - end[1])**2<= r**2) {
//         canvas.style.cursor = "grab"
//         if (mouseIsDown) {
//             end[0] = e.offsetX;
//             end[1] = e.offsetY;
//             draw()
//         }
//     } else if ((e.offsetX - start[0])**2 + (e.offsetY - start[1])**2<= r**2) {
//         canvas.style.cursor = "grab"
//         if (mouseIsDown) {
//             start[0] = e.offsetX;
//             start[1] = e.offsetY;
//             draw()
//         }
//     } else{
//         canvas.style.cursor = "unset"
//         mouseIsDown = false
//     }
// })
//
// canvas.addEventListener('mousedown',()=>{
//     mouseIsDown = true
// })
// canvas.addEventListener('mouseup',()=>{
//     mouseIsDown = false
// })
// document.body.append(canvas)

//task 1

let timerTime = document.createElement('input')
let timerInterval = document.createElement('input')
let btnStart = document.createElement('button')
btnStart.innerHTML = 'Старт'
let btnStop = document.createElement('button')
btnStop.innerHTML = "Стоп"
let btnClear = document.createElement('button')
btnClear.innerHTML = "Сброс"
let timer: NodeJS.Timer

let arr = [timerTime, timerInterval, btnStart, btnStop, btnClear]
for (let x in arr){
    document.body.append(arr[x])
}
timerInterval.addEventListener('change',()=>{
    clearInterval(timer)
})

timerTime.addEventListener('change',()=>{
    clearInterval(timer)
})

btnClear.addEventListener('click',()=>{
    timerTime.value = ''
    timerInterval.value = ''
    clearInterval(timer)
})

btnStart.addEventListener('click',()=>{
    timer = setInterval(()=>{
        if (parseFloat(timerTime.value) <= 0)  return
        timerTime.value = String(parseFloat(timerTime.value) - parseFloat(timerInterval.value));
    },parseFloat(timerInterval.value)*1000)
})

btnStop.addEventListener('click',()=>{
    clearInterval(timer)
})