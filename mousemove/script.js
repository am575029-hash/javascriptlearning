let box=document.querySelector("#box");

window.addEventListener("mousemove",function(dete){

    box.style.top= dete.clientY -200+ "px";

    box.style.left= dete.clientX -200+ "px";
    
    
});
//
