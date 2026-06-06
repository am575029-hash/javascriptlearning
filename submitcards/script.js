let form=document.querySelector("form");
let inputs=document.querySelectorAll("input");
let main =  document.querySelector("#main");

form.addEventListener("submit",function(det){
det.preventDefault();

let card=document.createElement("div");
card.classList.add("card");

let pic=document.createElement("div");
pic.classList.add("pic");

let img=document.createElement("img");
img.setAttribute("src",inputs[0].value);

let h1=document.createElement("h1");
h1.textContent= inputs[1].value;

let h2=document.createElement("h2");
h2.textContent= inputs[2].value;

let p=document.createElement("p");
p.textContent= inputs[3].value;


pic.appendChild(img);
card.appendChild(pic);
card.appendChild(h1)
card.appendChild(h2)
card.appendChild(p)
main.appendChild(card);

inputs.forEach(function(daa){
    if(daa.type !="submit"){
        daa.value="";
    }
})
});