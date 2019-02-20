/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var countSlide=0;
function next() {
    var x=document.getElementById("slide");
    var span = document.querySelectorAll("div.slide-bar>span>span");
    span[countSlide].style.backgroundColor = "rgba(0,0,0,0.3)";
    if(countSlide<4) {
        countSlide++;
    }
    else {
        countSlide=0;
    }
    x.style.transform="translateX("+-20*countSlide+"%)";
    x.style.transition="transform 0.75s";
    span[countSlide].style.backgroundColor = "rgba(255,102,0,0.8)";
}

function back() {
    var x=document.getElementById("slide");
    var span = document.querySelectorAll("div.slide-bar>span>span");
    span[countSlide].style.backgroundColor = "rgba(0,0,0,0.3)";
    if(countSlide>0) {
        countSlide--;
        
    }
    else {
        countSlide=4;
    }
    x.style.transform="translateX("+-20*countSlide+"%)";
    x.style.transition="transform 0.75s";
    span[countSlide].style.backgroundColor = "rgba(255,102,0,0.9)";
}
var start = true;
var id;
function stop() {
    clearTimeout(id);
}
function clearStop() {
    id = setTimeout("slideBarAuto()",7000);
}

function slideBarAuto () {
    if (start === true) {
        for (i = 0; i < 5; i++)
            next();
        start = false;
    }
    else if (start === false) {
        next();
    }
    id = setTimeout("slideBarAuto()",7000);
}

function nextTo(the) {
    
    var x=document.getElementById("slide");
    var span = document.querySelectorAll("div.slide-bar>span>span");
    var position = Number(the.innerHTML) - 1;
    if (position != countSlide) {
        span[countSlide].style.backgroundColor = "rgba(0,0,0,0.3)";
        countSlide = position;
        x.style.transform="translateX("+-20*countSlide+"%)";
        x.style.transition="transform 1s";
         span[countSlide].style.backgroundColor = "rgba(255,102,0,0.8)";
    }
}
   