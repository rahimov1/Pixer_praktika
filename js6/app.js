var elTextRed = document.querySelector('.red')
var elTextGreen = document.querySelector('.green')
var elBtnRed = document.querySelector('.btn1')
var elBtnGreen = document.querySelector('.btn2')
var elBtnBlue = document.querySelector('.btn3')

elBtnRed.addEventListener('click', ()=>{
    elTextRed.style.backgroundColor = 'red'
})

elBtnGreen.addEventListener('click', ()=>{
    elTextRed.style.backgroundColor = 'green'
})
elBtnBlue.addEventListener('click', ()=>{
    elTextRed.style.backgroundColor = 'blue'
})
