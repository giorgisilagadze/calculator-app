const result = document.querySelector(".div-result");
const buttons = document.getElementsByClassName("butt-numbers");
const equal = document.querySelector(".butt-equal");
const reset = document.querySelector(".butt-reset");
const del = document.querySelector(".butt-del");
const circle1 = document.querySelector(".circle-1");
const circle2 = document.querySelector(".circle-2");
const circle3 = document.querySelector(".circle-3");
const body = document.querySelector("body");
const pCalc = document.querySelector(".p-calc");
const pTheme = document.querySelector(".p-theme");
const changeTheme = document.querySelector(".div-change-theme");
const numberTheme = document.querySelector(".number-theme");
const divButtons = document.querySelector(".div-all-buttons");

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

circle1.addEventListener("click", () => {
    body.style.backgroundColor = "";
    pCalc.style.color = "";
    pTheme.style.color = "";
    numberTheme.style.color = "";
    circle2.style.backgroundColor = "";
    circle1.style.backgroundColor = "";
    circle3.style.backgroundColor = "";
    changeTheme.style.backgroundColor = "";
    result.style.backgroundColor = "";
    result.style.color = "";
    divButtons.style.backgroundColor = "";
    del.style.backgroundColor = "";
    reset.style.backgroundColor = "";
    equal.style.backgroundColor = "";
    // buttons.style.backgroundColor = "";
    del.style.boxShadow = "";
    reset.style.boxShadow = "";
    equal.style.boxShadow = "";
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "";
        buttons[i].style.boxShadow = "";
        buttons[i].style.color = "";
    }
    
    
})

circle2.addEventListener("click", () => {
    body.style.backgroundColor = "#F2F2F2";
    pCalc.style.color = "#36362C";
    pTheme.style.color = "#36362C";
    numberTheme.style.color = "#36362C";
    circle2.style.backgroundColor = "#D03F2F";
    circle1.style.backgroundColor = "#D2CDCD";
    circle3.style.backgroundColor = "#D2CDCD";
    changeTheme.style.backgroundColor = "#D2CDCD";
    result.style.backgroundColor = "white";
    result.style.color = "#36362C";
    divButtons.style.backgroundColor = "#D2CDCD";
    // buttons.style.backgroundColor = "#E5E4E1";
    del.style.backgroundColor = "#378187";
    del.style.boxShadow = "inset 0px -4px 0px #1B6066";
    reset.style.backgroundColor = "#378187";
    reset.style.boxShadow = "inset 0px -4px 0px #1B6066";
    equal.style.backgroundColor = "#C85402";
    equal.style.boxShadow = "inset 0px -4px 0px #873901";
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "#E5E4E1";
        buttons[i].style.boxShadow = "inset 0px -4px 0px #A79E91";
        buttons[i].style.color = "#36362C";
    }
     
})

circle3.addEventListener("click", () => {
    body.style.backgroundColor = "#17062a";
    pCalc.style.color = "#FFE53D";
    pTheme.style.color = "#FFE53D";
    numberTheme.style.color = "#FFE53D";
    circle2.style.backgroundColor = "#1E0936";
    circle1.style.backgroundColor = "#1E0936";
    circle3.style.backgroundColor = "#00DED0";
    changeTheme.style.backgroundColor = "#1E0936";
    result.style.backgroundColor = "#1E0936";
    result.style.color = "#FFE53D";
    divButtons.style.backgroundColor = "#1E0936";
    // buttons.style.backgroundColor = "#331C4D";
    del.style.backgroundColor = "#56077C";
    del.style.boxShadow = "inset 0px -4px 0px #BE15F4";
    reset.style.backgroundColor = "#56077C";
    reset.style.boxShadow = "inset 0px -4px 0px #BE15F4";
    equal.style.backgroundColor = "#00DED0";
    equal.style.boxShadow = "inset 0px -4px 0px #6CF9F1";
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "#331C4D";
        buttons[i].style.boxShadow = "inset 0px -4px 0px #881C9E";
        buttons[i].style.color = "#FFE53D";
    }
     
})