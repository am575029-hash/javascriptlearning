let users
=[{
    name:"car",
   pic:"SaveClip.App_612396314_18081948944334400_709618947479439968_n (2).jpg",
},{
     name:"iran man",
    pic:"eve-uprising-eve-online-pc-games-macos-games-3840x2160-9126.jpg",
},
{
      name:"iran man2",
    pic:"gundam-city-sunset-4k-wallpaper-uhdpaper.com-293@5@d.jpg",
},
{
      name:"night",
    pic:"pexels-bess-hamiti-83687-36487.jpg",
},
{
      name:"ram",
    pic:"SaveClip.App_587104958_17867311812485150_2592284582720130563_n.jpg",

},
{
      name:"car2",
     pic:"beautiful-supercar-mclaren-night-city-digital-art-uhdpaper.com-4K-4.3059.jpg",
    
},
];


let groupcards=document.querySelector("#groupcards");
let input=document.querySelector("input");
let notfound=document.querySelector("h2");

function showcard(arr){
arr.forEach(function(user) {
    
let card= document.createElement("div");
card.classList.add("card");
let img= document.createElement("img");
img.src= user.pic;

let h3= document.createElement("h3");
h3.innerText=user.name;
card.appendChild(img);
card.appendChild(h3);
groupcards.appendChild(card);

});

}

showcard(users);


input.addEventListener("input",function(){

let newuser= users.filter((user)=>{
return user.name.startsWith(input.value);
});


groupcards.innerHTML="";
showcard(newuser);

if(newuser==""){

    notfound.style.display="inline";

}else{
     notfound.style.display="none";
}

})