let but=document.querySelector("button");
let toaster=document.querySelector("#toaster");

but.addEventListener("click",function(){
    
    getnoti("clicked !!!!!!");
});



function getnoti(mass){
    
    let noti= document.createElement("div");
    noti.classList.add("noti");
    let h1= document.createElement("h1");
    h1.textContent=mass;
    
    noti.appendChild(h1);
    toaster.appendChild(noti);
    
    
    setTimeout(() => {
        toaster.removeChild(noti);

    }, 
    3*1000);
    
};