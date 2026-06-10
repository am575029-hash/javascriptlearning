


// fetch API Se data ko maga skte ho kisi dusri jagah se ye url ki tarh hota hai.



let det=fetch("https://randomuser.me/api/");





det.then(function(rawdata){
    
   return rawdata.json();
    
}).then((data) =>{
     console.log(data.results[0].name);
    console.log(data.results[0].name.first);
}).catch((error) =>{
    
    console.log(error);
})