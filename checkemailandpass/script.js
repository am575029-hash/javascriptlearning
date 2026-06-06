let form= document.querySelector("form");
let email=document.querySelector("#email");
let password=document.querySelector("#password");
let emailerror=document.querySelector(".emailerror");
let passworderror=document.querySelector(".passworderror");
let alls=document.querySelector(".alls");



form.addEventListener("submit", function(dets){
dets.preventDefault();

emailerror.textContent="";
passworderror.textContent="";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex =/^(?=.*[a-z])(?=l.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&^])[A-Za-z\d@$!%*?#&^]{8,}$/;

let emailans=  emailRegex.test(email.value);

let passwordans =  passwordRegex.test(password.value);


let both=true;
if(!emailans){
    emailerror.textContent="invalid email";
    both=false;
}else{
    emailerror.textContent="✅";
}

if(!passwordans){
    passworderror.textContent="invalid password";
    both=false;
}

if(both){
alls.textContent="both valid";
alls.style.color="green";
}else{
    alls.textContent="both valid";
alls.style.color="red";
}



});