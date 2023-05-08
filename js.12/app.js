var list1  = document.querySelector('.list1')
var list2 = document.querySelector('.list2')
var list3 = document.querySelector('.list3')
var list4 = document.querySelector('.list4')

var fruits = ['olma','anor','kiwi','kakos']
var city = ['warshava','parij','istanbul','bishkek']
var ism = ['Umar','Ali','akmal','Abror']
var cars = ['BMW','MERS','TESLA','FORD']

for (const i in fruits) {
    console.log(fruits[i]);
    var newLi = document.createElement('li')
    newLi.textContent +=fruits[i]
    list1.appendChild(newLi)
}

for (const i in city) {
    console.log(city[i]);
    var newLi = document.createElement('li')
    newLi.textContent +=city[i]
    list2.appendChild(newLi)
}

for (const i in ism) {
    console.log(ism[i]);
    var newLi = document.createElement('li')
    newLi.textContent +=ism[i]
    list3.appendChild(newLi)
}

for (const i in cars) {
    console.log(cars[i]);
    var newLi = document.createElement('li')
    newLi.textContent +=cars[i]
    list4.appendChild(newLi)
}