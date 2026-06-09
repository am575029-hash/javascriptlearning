




// Sync =>  yesa code jo line by line chale vo hota hai sync

// Async => yesa code jo chalne ke liye ready ho tab chale vo hota haii Async


// callbacks => yek function kisi function ko pass kiya jata hai aur vo function kahi aur rahta hai aur vo reseveing function ko callback karta hai.
// callback function ke andar kisi dusre function ko callback pass kiya jaye , to isi tarh bane pattern ko callhell kahte hai.




function getprofile(username,cback){

    console.log("Profile fatching...")
    
    setTimeout(() => {    
        obj={username:username,_id:1234, pic:"www,htpibcn.com"};
        cback(obj);
    }, 3000);
    
}

function getpic(id,cback){
console.log("fatch pics");

setTimeout(() => {
 obj={id:id, pic:[12,3,4,6,7,5,4]};
 cback(obj);

},3000)

}




// callhell and callbacks..............

getprofile("abhi", function(obj){
    console.log(obj);
    getpic(obj._id,function(obj){
        
        console.log(obj);
            
    });
});