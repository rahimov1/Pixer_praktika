var elInp1 = document.querySelector('.inp1')
var elInp2 = document.querySelector('.inp2')
var elBtn1 = document.querySelector('.btn1')
var elBtn2 = document.querySelector('.btn2')

elBtn1.addEventListener('click', function () {
    console.log(elInp1.value * 11300 + ' sum');
})
elBtn2.addEventListener('click', function () {
    console.log(elInp2.value / 11300 + ' $');
}) 