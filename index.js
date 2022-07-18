let find = document.querySelectorAll('input');
let blocker = document.querySelector('p')
let btn = document.querySelector('.addition');
btn.addEventListener('click', click); 
function click() {
    blocker.innerText =`${Number(find[0].value) + Number(find[1].value)}`;
};

let btn_sec = document.querySelector('.subtraction');
btn_sec.addEventListener('click' , subtraction );
function subtraction() {
    blocker.innerText =`${Number(find[0].value) - Number(find[1].value)}`;
};

let btn_third = document.querySelector('.multiplication');
btn_third.addEventListener('click' , multiplication);
function multiplication() {
    blocker.innerText =`${Number(find[0].value) * Number(find[1].value)}`;
};

let btn_fourth = document.querySelector('.division');
btn_fourth.addEventListener('click' , division);
function division() {
    blocker.innerText =`${Number(find[0].value) / Number(find[1].value)}`;
};

// function ClearFields() {
            
//     document.getElementById("textfield1").value = "";
//     document.getElementById("textfield2").value = "";
// }
//результат в одной и той самой строке и добавить подпись