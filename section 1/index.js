
let contEl = document.getElementById("count")
let saveEl = document.getElementById("save-el") 
let count = 0

function increment(){
    count +=1 
    contEl.innerText = count

}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr 
    count = 0
    contEl.textContent = count
}














