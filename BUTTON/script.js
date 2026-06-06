let file =document.querySelector("#file");
let but =document.querySelector("#but");

but.addEventListener("click",function(){
file.click();
});

file.addEventListener("change",function(det){
   const filer =det.target.files[0];
    if( filer ){
        but.textContent=filer.name;
    };

 
});