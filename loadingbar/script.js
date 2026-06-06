let pra=document.querySelector("#pra");
let h4=document.querySelector("h4");
let p=document.querySelector("p");

let count=0;
let sec=5;

let inter=setInterval(function(){
pra.style.width=count;

if(count<=99){
    count++;
    pra.style.width=count+"%";
    h4.textContent=count+"%";
}else{
    p.textContent="Downloaded";
clearInterval(inter);
}


},(sec*10));