// TODO: this file! :)
const state = {
    numBank:[1,2],
    oddBank:[],
    evenBank:[]
}

const numInput = document.querySelector("form").number
const addButton = document.getElementById("submit")
const numberBankElement = document.getElementById("numberBank")
const sortOne = document.getElementById("sortOne")
const sortAll = document.getElementById("sortAll")
const oddElement = document.getElementById("odds")
const evenElement = document.getElementById("evens")

function updateBank(){

const numElements = state.numBank.map((num)=>{
const numElement =document.createElement("p")
numElement.textContent=num
return numElement
})


const oddElements = state.oddBank.map((num)=>{
    const numElement =document.createElement("p")
    numElement.textContent=num
    return numElement
    })
    
    const evenElements = state.evenBank.map((num)=>{
        const numElement =document.createElement("p")
        numElement.textContent=num
        return numElement
        })


numberBankElement.replaceChildren(...numElements)
oddElement.replaceChildren(...oddElements)
evenElement.replaceChildren(...evenElements)
}
updateBank()

addButton.addEventListener("click",(e)=>{
const newNumber = numInput.value
state.numBank.push(newNumber)
updateBank()

})

sortOne.addEventListener("click",sortOneFunction)

function sortOneFunction(){
    const numToSort = state.numBank[0]
    state.numBank.shift()
    if(numToSort % 2===0){
        state.evenBank.push(numToSort)
    }else{
        state.oddBank.push(numToSort)
    }
    updateBank()
}

sortAll.addEventListener("click",()=>{
    state.numBank.forEach((num)=>{
        if(num % 2==0){
            state.evenBank.push(num)
        }else{
            state.oddBank.push(num)
        }
        state.numBank.shift()
    })
updateBank()
})