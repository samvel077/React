// -----------Bind---------------
// Function.prototype.myBind = function (contetxt, ...args) {
//    const fn = this
//    return function (...fnArgs) {
//       let key = Date.now().toString()
//       contetxt[key] = fn
//       const result = context[key](args.concat(fnArgs))
//       return result
//    }
// }
// -----------Bind---------------



// ------------multiplay without *--------------
// function multiply(num1, num2) {
//    let sum = 0;

//    if (num1 < 0 && num2 < 0 || num2 < 0) {
//       for (let i = 0; i < -num2; i++) {
//          sum += -num1;
//       }
//       return sum
//    }
//    else {
//       for (let i = 0; i < num2; i++) {
//          sum += num1;
//       }
//       return sum;
//    }
// }
// let a = multiply(-2, -3)
// console.log(a);
// ------------multiplay without *--------------



// ------------Davoyi xndir------------------
// let x = document.getElementById('input')
// let change = 0  
// x.onkeyup = function () {
//     document.getElementById('text').innerHTML = x.value 
//     if (x.value === '') {
//         change++
//     }
//     if (change === 5) {
//         // x.onkeyup = false
//        x.setAttribute('readonly', true)
//     }
// }


// let x = document.getElementsByClassName('input')
// let y = document.getElementsByClassName('text')

// // for (let i = 0; i < x.length; i++) {
// //     x[i].oninput = function () {
// //         y[0].innerHTML = x[0].value
// //         y[1].innerHTML = x[1].value
// //         y[2].innerHTML = x[2].value
// //     }
// // }

// for (let i = 0; i < x.length; i++) {
//     x[i].oninput = function () {
//         for (let j = 0; j < y.length; j++) {
//             if (i === j) {
//                 y[j].innerHTML = x[i].value
//             }
//         }
//     }
// }
// ------------Davoyi xndir------------------




// ------------Davoyi xndir 2------------------
// let x = document.getElementsByClassName('input_skil')
// let y = document.querySelector('.div_text')
// let z = document.querySelector('#span')
// let p = 1

// for (let i = 0; i < x.length; i++) {
//    x[i].oninput = function () {
//       y.innerText = x[i].value
//       if (x[i].value.length === 0) {
//          y.innerText = 'Your skil' + ' ' + 1
//       }
//    }
// }

// function creatSkill() {
//    let div = document.createElement('div')
//    let div1 = document.createElement('div')
//    let div2 = document.createElement('div')
//    let form = document.createElement('form')
//    let input = document.createElement('input')
//    let span = document.createElement('span')
//    let div3 = document.createElement('div')
//    let div4 = document.createElement('div')

//    div3.classList.add('block_skil')
//    div4.classList.add('position_block')
//    div.classList.add('position_skil')
//    div1.classList.add('block_input_skil')
//    div2.classList.add('div_text', 'text_skil')
//    div2.innerText = 'Your skil' + ' '
//    form.action = 'form_input'
//    input.type = 'text'
//    input.classList.add('input_skil')
//    input.placeholder = 'Skil'
//    input.oninput = function fillSkil() {
//       div2.innerText = input.value
//       if (input.value.length === 0) {
//          div2.innerText = 'Your skil' + ' ' + span.innerText
//       }
//    }
//    span.innerText = p

//    div4.appendChild(div3)
//    div3.appendChild(div)
//    div.append(div1, div2)
//    div1.appendChild(form)
//    div2.appendChild(span)
//    form.appendChild(input)

//    document.body.appendChild(div4)
// }

// function test() {

//    for (let i = 0; i < x.length; i++) {
//       if (x[i].value === '') {
//          return false
//       }
//    }
//    p++
//    creatSkill()
// }
// ------------Davoyi xndir 2------------------






// -------------Prev and Next-----------------
// let spanForText = document.querySelector('#span_for_text')
// let clickSum = 0

// function buttonClick(direction) {
//    if (direction === 'next') {
//       clickSum++
//    }
//    else {
//       clickSum--
//    }

//    document.querySelector('.btn_1').disabled = (clickSum <= 0)
//    document.querySelector('.btn_2').disabled = (clickSum === 3)

//    if (clickSum === 0) {
//       spanForText.innerText = 'My name is Samvel'
//    }
//    if (clickSum === 1) {
//       spanForText.innerText = 'I am a junior Front-end developer'
//    }
//    if (clickSum === 2) {
//       spanForText.innerText = 'I can work with HTML/CSS > JvaScript > Recat/Redux'
//    }
//    if (clickSum === 3) {
//       spanForText.innerText = 'Thanks for reading'
//    }
// }
// -------------Prev and Next-----------------




// function sum(x,y) {
//    if (y === undefined) {
//       return function (y) {
//          return x + y
//       }
//    }

//    return x + y
// }

// console.log(sum(2, 3));
// console.log(sum(2)(3));





// ---------------add activ class-----------------
let btns = document.querySelectorAll(".btn");

// for (let i = 0; i < btns.length; i++) {
//    btns[i].addEventListener('click', () => {
//       let activ = document.querySelectorAll('.activ')

//       let current = btns[i]
//       current.classList.add('activ')

//       for (let i = 0; i < activ.length; i++) {
//          if (current !== activ[i]) {
//             activ[i].classList.remove('activ')
//          }
//       }
//    })
// }


// btns.forEach(btn => {
//    btn.addEventListener('click', function () {
//       btns.forEach(btn => btn.classList.remove('activ'))
//       this.classList.add('activ')
//    })
// })
// ---------------add activ class-----------------




// ---------mouse stop chaker----------
// let shu = document.getElementById('shu')
// var timeout;

// document.addEventListener("mousemove", function (e) {
//    shu.innerText = ''
//    clearTimeout(timeout);

//    timeout = setTimeout(mouseStop, 200);

//    function mouseStop() {
//       shu.innerHTML = e.clientX + ' ' + e.clientY;
//       // shu.innerText = `Ara tapov mknik@ sharshi teche gluxt kjardem \u2764`
//    }
// });
// ---------mouse stop chaker----------




// --------------mini game------------------
let intervalSpan1 = document.querySelector('#interval1')
let intervalSpan2 = document.querySelector('#interval2')
let startbutton = document.querySelector('#start')
let winnerText = document.querySelector('#winner')

startbutton.addEventListener('click', function () {
   let num1 = undefined
   let num2 = undefined
   let interval = setInterval(() => {
      num1 = Math.floor(Math.random() * 10)
      intervalSpan1.innerText = num1

      num2 = Math.floor(Math.random() * 10)
      intervalSpan2.innerText = num2
   }, 80);

   setTimeout(() => {
      clearInterval(interval)

      let winner = ''

      num1 > num2 ? winner = 'Win Player One' : (num1 < num2) ? winner = 'Win Player Two' : winner = 'Draw'

      winnerText.innerText = winner
   }, 800);
})
// --------------mini game------------------
