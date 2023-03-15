const result = document.querySelector(".div-result");
const buttons = document.getElementsByClassName("butt-numbers");
const equal = document.querySelector(".butt-equal");
const reset = document.querySelector(".butt-reset");
const del = document.querySelector(".butt-del");

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (event) => {
        result.innerHTML += event.target.innerHTML
    })
}

equal.addEventListener("click", () => { 
    result.innerHTML = eval(result.innerHTML);
})

reset.addEventListener("click", () => {
    result.innerHTML = "";
})

del.addEventListener("click", () => {
    result.innerHTML = (result.innerHTML).slice(0, result.innerHTML.length - 1)
})