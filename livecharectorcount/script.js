let inp=document.querySelector("input");

let span=document.querySelector("span");

inp.addEventListener("input", function(dets){

span.textContent = inp.value.length;
console.log(dets);


})