
let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

function ranExcuse(arr){
    return arr[Math.floor(Math.random()*arr.length)]
}

let excuse = (ranExcuse(who)+" "+ranExcuse(action)+" "+ranExcuse(what)+" "+ranExcuse(when))

document.getElementById("text2").innerHTML = excuse;
