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
// const btns = document.querySelectorAll('.bbb')
// btns[btns.length-1].style.backgroundColor = 'orange';
// console.log(btns);
// btns[btns.length-1].addEventListener('click',(element,event)=>{
//     alert('hi')
// })










const addElement = ()=>{
    //prevent null
    if(!document.querySelector('#createInput').value){return;}

    const attachCheckBox = (parent)=>{
        let checkbox = document.createElement("input");
        checkbox.type = 'checkbox';
        parent.appendChild(checkbox);
    }
    const attachText = (parent)=>{
        let text = document.querySelector('#createInput');
        let newtext = document.createTextNode(text.value);
        parent.appendChild(newtext);
    }
    const attachDelete = (parent)=>{
        let btn = document.createElement("button");
        btn.innerText = 'delete';
        parent.appendChild(btn);
        btn.addEventListener('click',(event)=>{
            btn.parentElement.remove();
            event.preventDefault()
        })
    }

    let newItem = document.createElement("p");
    attachCheckBox(newItem);
    attachText(newItem);
    attachDelete(newItem);
    let area = document.querySelector('#todoArea');
    area.appendChild(newItem);
}
const createBtn = document.querySelector('#mint_btn');
console.log([createBtn]);
createBtn.addEventListener('click',(event)=>{
    addElement();
    // const title = document.createElement("span");
    // const newItem = document.createElement("div");
    // newItem.innerText = "test1";
    // // newItem.appendChild(title);
    // form.appendChild(newItem);
    console.log(event)
    event.preventDefault()
},{ capture: false })








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
