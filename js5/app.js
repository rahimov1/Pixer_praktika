var elFrom = document.querySelector('.from')
var elName = document.querySelector('.ism')
var elAge = document.querySelector('.yosh')
var elText = document.querySelector('.text')
var elText2 = document.querySelector('.text2')

elFrom.addEventListener('submit', function(e){
    e.preventDefault()
    elText.textContent = `$ {elName.valu}`
    elText2.textContent = `$ {elAge.valu}`
})