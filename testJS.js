// var oldVarMsg = "HW";
// const constMsg = "H";
// let varMsg = "W";
// varMsg = "";
// console.log(oldVarMsg);

// const title = `123${oldVarMsg}321`;
// console.log(typeof title);

// let n1 = 0.1
// let n2 = 0.2
// console.log((n1+n2));

// let arr = ["a",123,true];
// console.log(arr);

// const btn = document.getElementById("mint_btn");
const btns = document.querySelectorAll('.bbb')
btns[btns.length-1].style.backgroundColor = 'orange';
console.log(btns);
btns[btns.length-1].addEventListener('click',(element,event)=>{
    alert('hi')
})

// function sleep() {
//     return new Promise((resolve,reject)=>{
//         console.log('sleep...')
//         setTimeout(()=>{
//             resolve()
//         },2000)
//     })
// }
// function findBreakfast() {
//     return new Promise((resolve,reject)=>{
//         console.log('choosing breakfast...')
//         setTimeout(()=>{
//             resolve("ham")
//         },2000)
//     })
// }

// const goodMorning = async ()=>{
//     await sleep()
//     console.log("wake up")
//     let food = await findBreakfast()
//     console.log(`eat ${food}`)
    
// }


// goodMorning()
