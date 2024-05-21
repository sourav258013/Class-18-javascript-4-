
//pass section start
let inpute = document.querySelector(".inpute");
let btn_1 = document.querySelector(".btn-1");
let btn_2 = document.querySelector(".btn-2");

btn_1.addEventListener("click",function(){
   inpute.type = "tect";
   btn_1.style.display = "none";
   btn_2.style.display = "block";
});

btn_2.addEventListener("click",function(){
    inpute.type = "password";
    btn_2.style.display = "none";
    btn_1.style.display = "block";
});
//pass section end

//progress section start
let parentBox = document.querySelector(".parent-box");
let childBox = document.querySelector(".child-box");

window.addEventListener('scroll',function(){

let scrollHeight = document.documentElement.scrollHeight;
let clientHeight = document.documentElement.clientHeight;
let fromTop = document.documentElement.scrollTop;
let sub = scrollHeight - clientHeight;
let result = fromTop * 100 / sub;

let test = Math.round(result);

parentBox.style.backgroundImage = `conic-gradient(red ${result}%, #48C9B0 ${result}%)`;
childBox.innerHTML = test;

});

//progress section end