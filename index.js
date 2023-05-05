/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const lengthEl = document.getElementById("length-el")
const lengthElInch = document.getElementById("length-el-inch")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
let inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")

//console.log(lengthElInch)

let length = ""
let volume = ""
let mass = ""

convertBtn.addEventListener("click", function(){
    lengthElInch.innerHTML = `
    ${inputEl.value} millimeters = ${(inputEl.value / 25.4).toFixed(3)} inches | ${inputEl.value} inches = ${(inputEl.value * 25.4).toFixed(3)} millimeters`
    lengthEl.innerHTML = `
    ${inputEl.value} meters = ${(inputEl.value * 3.281).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value / 3.281).toFixed(3)} meters`
    volumeEl.innerHTML = `
    ${inputEl.value} liters = ${(inputEl.value * 0.264).toFixed(3)} gallons | ${inputEl.value} gallons = ${(inputEl.value / 0.264).toFixed(3)} liters`
    massEl.innerHTML = `
    ${inputEl.value} kilos = ${(inputEl.value * 2.204).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value / 2.204).toFixed(3)} kilos`
})