
// let na="Abhi";
// console.log(na);

// const { createElement } = require("react");

// const { createElement } = require("react");




// var a = 12;
// function add(){
//     var a = 3;
//     console.log(a)
// }

// add();
// console.log(a)



// let a=10;
// {
//     let a=20;
//     console.log("inside:",a);
// }
// console.log("outside:",a);


// array
// let a=[1,2,3];
// let b =[2,3,4]; 

// Object
// a={name: "abhi",
//     agr: 20,
// }


// dynamic typing

// let a=10;
// a=true;
// a={};
// a=[1,2];



// rock paper scissor

// function rps( user,computer){

//     if (user==computer) return "draw";
//     if(user=="rock" && computer=="scissor") return "user";
//     if(user=="scissor" && computer=="paper") return "user";
//     if(user== "paper" && computer=="rock") return "user";

//     return "computer";
// }
// console.log(rps("scissor","paper"));



// let arr=[1,2,3,4,5];

// arr.push(6);  //add new element in last
// arr.pop();    // remove last element
// arr.shift();  //remove first element
// arr.unshift(0); // add element in first
// arr.splice(1,2); //remove the element bitween tow points 
// let newarr= arr.slice(0,2);  //access the part of array
// arr.reverse(); //reverse the array
// let so = arr.sort(function (a,b){
//     return b-a;
// }); //sort the array



// let arr=[2,3,4,6,78,8];
// //map..................................................................
// let newarr=arr.map(function(val){

//     return 21;
// });




// //filter......
// let arr=[2,3,4,6,78,8];

// let newarr=arr.filter(function(val){
//     if(val>4) return true;
// });


//reduce................

// let arr=[1,2,3,4,5,6];

// let sum=arr.reduce(function (accumuletor,val){
//     return accumuletor + val;
// },0);



// //dom..........................
// // selectrs..........
// //by id
// let myname=document.getElementById("myn");
// console.dir(myname);

// // by class.....

// let lastname=document.getElementsByClassName("myl");
// console.dir(lastname)

//queryselectors

// let name=document.querySelector("h1");
// name.textContent="Hacker!!!!";
// name.innerText="MR.Abhi,hacker";

// name.innerHTML="<i>Abhi</>";




// let a=document.querySelector("a");

// a.setAttribute("href","www.youtube.com");

// a.removeAttribute("href");

//  console.log(a.getAttribute("href"));


//dynamic DOM manipulation.....................

// 1 createElement.......
//! create element helf of createElement mothods
//!! append/prepend share to .html

// let h1=document.createElement("h1");
//  h1.textContent="hello ji";

//  document.querySelector("body").prepend(h1);


// //style update...............
// let h1=document.querySelector("h1");
// h1.style.color="orange";
// h1.style.backgroundColor="red";

//  let img = document.createElement("img");
//  img.setAttribute("src","Shri-Ram-Lalla-Original-Murti-Ayodhya-for-Profile-Picture-DP-1919x2048.jpg");

//  document.querySelector("div").prepend(img);
//  img.classList.add("placeholdar");


// let ul = document.querySelectorAll("ul li:nth-child(2n)");
// ul.forEach(function(ele){
// ele.classList.add("placeholdar");
// })



// let p=document.querySelector("p");
// let bu=document.querySelector("button");

// function para(){
//      p.classList.add("colore");
//     };



// bu.addEventListener("click",para);


// bu.addEventListener("dblclick",para);

// bu.removeEventListener("dblclick",para);


// let inp = document.querySelector("input");
// let bu=document.querySelector("button");



// inp.addEventListener("input",function(eve){

//     bu.addEventListener("click",function(){

//     console.log(eve.data);
//     });
// });


// let dev= document.querySelector(".device")
// let sel=document.querySelector("select");

// sel.addEventListener("change",function(det){

//     console.log(det.target.value);
//     dev.textContent=`${det.target.value} your Device `;

// });






