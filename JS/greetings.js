/* function sayHello(nameOfPerson, age){
    console.log("Hello My Name is " + nameOfPerson + ", i am " + age + " years old.");
};

sayHello("nico", 20);
sayHello("dal", 25);
sayHello("lynn", 30); */

/* ====================================================================================== */

/* const calculator = {
    add : function(a,b){
        console.log(a + b);
    } ,
    mie : function(a,b){
        console.log(a - b);
    } ,
    div : function(a,b){
        console.log(a / b);
    } ,
    powerof : function(a,b){
        console.log(a ** b)
    }
}

calculator.add(5,5);
calculator.mie(10,3);
calculator.div(10,2);
calculator.powerof(2,2); */

/* ====================================================================================== */

/* 
const age = 96;
function calculateKrAge(ageOfForeigner){
    ageOfForeigner + 2;
    return null; 
}

const krAge = calculateKrAge(age);

console.log(krAge); */

/* ====================================================================================== */

/* const age = parseInt(prompt("How old are you?"));

if(isNaN(age) || age < 0){
    console.log("please write a real positive number");
} else if(age < 18){
    console.log("you are too young.")
} else if(age >= 18 && age <= 50){
    console.log("you can drink");
} else {
    console.log("please drink less");
} */

/* ====================================================================================== */

/* const title = document.querySelector("h1");

console.log(title);

title.innerText = "WELCOME!" ; */

/* ====================================================================================== */

/* const title = document.querySelector(".title");

function handleTitleClick(){
    title.style.color = "blue" ;
};

function handleMouseEnter(){
    title.innerText = "Mouse is here!" ;
};

function handleMouseLeave(){
    title.innerText = "Mouse is gone!" ;
};

function handleWindowResize(){
    document.body.style.backgroundColor = "skyblue"
}

function handleWindowCopy(){
    alert("copier");
}

function handleWindowOffline(){
    alert("SOS no wifi");
}

function handleWindowOnline(){
    alert("ALL GOOD");
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline); */

/* ====================================================================================== */

/* const title = document.querySelector("h1");

function handleTitleClick(){

    const currentColor = title.style.color ;
    let newColor ;

    if(currentColor === "blue"){
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    title.style.color = newColor;
};

title.addEventListener("click", handleTitleClick);
 */

/* ====================================================================================== */

/* const title = document.querySelector("h1");

function handleTitleClick(){

    const h1Class = "active";

    if(title.classList.contains(h1Class)){
        title.classList.remove(h1Class);
    } else {
        title.classList.add(h1Class);
    }
};

title.addEventListener("click", handleTitleClick);
 */

/* ====================================================================================== */

/* const title = document.querySelector("h1");

function handleTitleClick(){

    title.classList.toggle("active");
};

title.addEventListener("click", handleTitleClick); */

/* ====================================================================================== */
/* ====================================== LogIn ========================================= */
/* ====================================================================================== */

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("h1");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, userName);
  paintingGreetings(userName);
}

function paintingGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello! ${username}`;
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintingGreetings(saveUsername);
}
